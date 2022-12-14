using FluentMigrator.Runner;
using Microsoft.Data.SqlClient;
using pet_api.Domain.Interfaces;
using pet_api.Infrastructure.DAL.Extensions;
using pet_api.Infrastructure.DAL.Migrations;
using pet_api.Infrastructure.DAL;
using pet_api.Infrastructure.Logging;
using pet_api.Middleware.ErrorHandlingMiddleware;
using pet_api.Middleware.LoggingMiddleware;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "PetApiPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
    });
});
string connectionString = builder.Configuration.GetConnectionString("SqlConnection");
string masterConnectionString = builder.Configuration.GetConnectionString("MasterConnection");
builder.Services.AddLogging(c => c.AddFluentMigratorConsole())
.AddFluentMigratorCore()
        .ConfigureRunner(c => c.AddSqlServer()
            .WithGlobalConnectionString(connectionString)
            .ScanIn(Assembly.GetExecutingAssembly()).For.All());

builder.Services.AddLogging(loggingBuilder =>
{
    loggingBuilder.ClearProviders();
    loggingBuilder.AddFileLoggerProvider();
});

builder.Services.AddScoped<IDatabaseContext>((provider) =>
{
    return new DatabaseContext
    {
        SqlConnection = new SqlConnection(connectionString),
        MasterSqlConnection = new SqlConnection(masterConnectionString)
    };
});
builder.Services.AddScoped<Database>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
// Add services to the container. 

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCustomErrorHandling();

// Configure the HTTP request pipeline. 
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseRequestLogging();

app.UseCors("PetApiPolicy");
app.UseAuthorization();

app.MapControllers();
app.MigrateDatabase();
app.Run();
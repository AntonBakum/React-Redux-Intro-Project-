using pet_api.Domain.Interfaces;
using pet_api.Infrastructure.DAL.Migrations;
using pet_api.Infrastructure.DAL;
using pet_api.Infrastructure.Logging;
using pet_api.Middleware.ErrorHandlingMiddleware;
using pet_api.Middleware.LoggingMiddleware;
using pet_api.Infrastructure.DAL.Extensions;
using FluentMigrator.Runner;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLogging(c => c.AddFluentMigratorConsole())
.AddFluentMigratorCore()
        .ConfigureRunner(c => c.AddSqlServer()
            .WithGlobalConnectionString("server=.; database=PetApiDatabase; Integrated Security=true")
            .ScanIn(Assembly.GetExecutingAssembly()).For.All());

builder.Services.AddLogging(loggingBuilder =>
{
    loggingBuilder.ClearProviders();
    loggingBuilder.AddFileLoggerProvider();
});

builder.Services.AddSingleton<IDatabaseContext, DatabaseContext>();
builder.Services.AddSingleton<Database>();
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
app.UseAuthorization();

app.MapControllers();
app.MigrateDatabase();
app.Run();

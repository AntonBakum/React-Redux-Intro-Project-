using PetProjectWepApi.Infrastructure.Logging;
using PetProjectWepApi.User_Interface.Middleware;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddLogging((loggingBuilder) =>
{
    loggingBuilder.ClearProviders();
    loggingBuilder.AddFileLogger();
});


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseErrorHandling();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


app.Run();

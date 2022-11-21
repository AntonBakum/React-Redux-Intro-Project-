using pet_api.Infrastructure.Logging;
using pet_api.Middleware.ErrorHandlingMiddleware;
using pet_api.Middleware.LoggingMiddleware;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddLogging(loggingBuilder =>
{
    loggingBuilder.ClearProviders();
    loggingBuilder.AddFile();
});

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

app.Run();

using Microsoft.Extensions.Options;

namespace PetProjectWepApi.Infrastructure.Logging
{
    public class FileLoggerProvider : ILoggerProvider
    {
        public ILogger CreateLogger(string categoryName)
        {
            return new FileLogger();
        }
        public void Dispose()
        {
            
        }
    }
}

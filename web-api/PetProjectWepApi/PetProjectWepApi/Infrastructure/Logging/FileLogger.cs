using Microsoft.OpenApi.Extensions;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using System.IO;

namespace PetProjectWepApi.Infrastructure.Logging
{
    public class FileLogger : ILogger
    {
        object _lock= new object();
        public IDisposable BeginScope<TState>(TState state)
        {
            return default!;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return logLevel != LogLevel.None;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }
            string filePath = Path.Combine("C:\\Pets\\React-Redux-Intro-Project-\\web-api\\PetProjectWepApi\\PetProjectWepApi\\Infrastructure\\Logging\\logs", "file-" + DateTime.Now.ToString("yyyyMMdd") + ".txt");
            lock (_lock)
            {
                if (!File.Exists(filePath))
                {
                    File.Create(filePath).Dispose();
                }
                File.AppendAllText(filePath, formatter(state, exception) + " " + DateTime.Now + Environment.NewLine);
            }

        }
    }
}

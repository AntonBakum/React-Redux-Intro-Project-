namespace pet_api.Infrastructure.Logging
{
    public class FileLogger : ILogger
    {
        string path;
        public FileLogger(string path)
        {
            this.path = path;
        }
        public IDisposable BeginScope<TState>(TState state)
        {
            return default!;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return logLevel != LogLevel.None;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }
            using (FileStream stream = File.Open(path, FileMode.Append))
            using (StreamWriter streamWriter = new StreamWriter(stream))
            {
                streamWriter.WriteLine(formatter(state, exception));
            }
        }
    }
}

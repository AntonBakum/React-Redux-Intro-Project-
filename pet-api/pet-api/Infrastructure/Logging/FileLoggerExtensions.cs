﻿using Microsoft.Extensions.DependencyInjection.Extensions;

namespace pet_api.Infrastructure.Logging
{
    public static class FileLoggerExtensions
    {
        public static string CreateFile()
        {
            return Path.Combine(Path.GetFullPath("Infrastructure\\Logging\\LogFiles"), "file-" + DateTime.Now.ToString("yyyy-MM-dd") + ".txt");
        }
        public static ILoggingBuilder AddFile(this ILoggingBuilder builder)
        {
            builder.Services.TryAddEnumerable(
                ServiceDescriptor.Singleton<ILoggerProvider, FileLoggerProvider>(
                    (srv) =>
                    {
                        return new FileLoggerProvider(CreateFile());
                    }
             ));
            return builder;
        }
    }
}

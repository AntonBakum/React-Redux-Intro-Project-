using FluentMigrator.Runner;
using pet_api.Infrastructure.DAL.Migrations;


namespace pet_api.Infrastructure.DAL.Extensions
{
    public static class MigrationManager
    {
        public static WebApplication MigrateDatabase(this WebApplication webApplication)
        {
            using (var scope = webApplication.Services.CreateScope())
            {
                Database databaseService = scope.ServiceProvider.GetRequiredService<Database>();
                IMigrationRunner migrationService = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();
                try
                {
                    databaseService.CreateDatabase("PetApiDatabase");
                    migrationService.ListMigrations();
                    migrationService.MigrateUp();
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
            return webApplication;
        }
    }
}

using Dapper;
using pet_api.Domain.Interfaces;


namespace pet_api.Infrastructure.DAL.Migrations
{
    public class Database
    {
        private readonly IDatabaseContext _context;
        public Database (IDatabaseContext context)
        {
            _context = context;
        }

        public void CreateDatabase (string databaseName)
        {
            string query = "SELECT * FROM sys.databases WHERE name = @name";
            var parameters = new DynamicParameters();
            parameters.Add("name", databaseName);
            using (var connection = _context.CreateMasterConnection())
            {
                var records = connection.Query(query, parameters);
                if (!records.Any())
                    connection.Execute($"CREATE DATABASE {databaseName}");
            }
        }
    }
}

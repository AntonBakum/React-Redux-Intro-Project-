using FluentMigrator.Builders.IfDatabase;
using Microsoft.Data.SqlClient;
using pet_api.Domain.Interfaces;
using System.Data;

namespace pet_api.Infrastructure.DAL
{
    public class DatabaseContext: IDatabaseContext
    {
        private readonly IConfiguration _configuration;

        public DatabaseContext (IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IDbConnection CreateConnection()
        => new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
        public IDbConnection CreateMasterConnection()
            => new SqlConnection(_configuration.GetConnectionString("MasterConnection"));
    }
}

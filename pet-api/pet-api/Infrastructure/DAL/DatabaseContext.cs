using FluentMigrator.Builders.IfDatabase;
using Microsoft.Data.SqlClient;
using pet_api.Domain.Interfaces;
using System.Data;

namespace pet_api.Infrastructure.DAL
{
    public class DatabaseContext : IDatabaseContext
    {
        public SqlConnection SqlConnection { get; set; }
        public SqlConnection MasterSqlConnection { get; set; }
    }
}

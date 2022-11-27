using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace pet_api.Domain.Interfaces
{
    public interface IDatabaseContext
    {
        public IDbConnection CreateConnection();
        public IDbConnection CreateMasterConnection();
    }
}

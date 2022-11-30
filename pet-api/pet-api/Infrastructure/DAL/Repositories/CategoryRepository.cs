using Dapper;
using pet_api.Domain.Entities;
using pet_api.Domain.Interfaces;

namespace pet_api.Infrastructure.DAL.Repositories
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly IDatabaseContext _context;

        public CategoryRepository(IDatabaseContext context)
        {
            _context = context;
        }

        public async Task Create(Category entity)
        {
            string sqlQuery = "INSERT INTO Categories (Name, Description) VALUES (@Name, @Description)";
            var parameters = new DynamicParameters();
            parameters.Add("@Name", entity.Name);
            parameters.Add("@Description", entity.Description);
            using (var connection = _context.SqlConnection)
            {
                await connection.ExecuteAsync(sqlQuery, parameters);
            }
        }

        public async Task Delete(int id)
        {
            string sqlQuery = "DELETE FROM Categories WHERE Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("@Id", id);
            using (var connection = _context.SqlConnection)
            {
                await connection.ExecuteAsync(sqlQuery, parameters);
            }
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            string sqlQuery = "SELECT * FROM Categories";
            IEnumerable<Category> categories;
            using (var connection = _context.SqlConnection)
            {
                categories = await connection.QueryAsync<Category>(sqlQuery);
                return categories;
            }
        }

        public async Task<Category> GetById(int id)
        {
            string sqlQuery = "SELECT * FROM Categories WHERE Id = @Id";
            Category category;
            var parameters = new DynamicParameters();
            parameters.Add("@Id", id);
            using (var connection = _context.SqlConnection)
            {
                category = await connection.QuerySingleOrDefaultAsync<Category>(sqlQuery, parameters);
                return category;
            }
        }

        public async Task Update(int id, Category entity)
        {
            var parameters = new DynamicParameters();
            string sqlQuery = "UPDATE Categories SET Name = @Name, Description = @Description WHERE Id = @Id";
            parameters.Add("@Id", id);
            parameters.Add("@Name", entity.Name);
            parameters.Add("@Description", entity.Description);
            using (var connection = _context.SqlConnection)
            {
                await connection.ExecuteAsync(sqlQuery, parameters);
            }
        }

    }
}

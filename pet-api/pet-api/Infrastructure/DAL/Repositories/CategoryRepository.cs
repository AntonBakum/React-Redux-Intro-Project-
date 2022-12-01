using Dapper;
using Microsoft.Data.SqlClient;
using pet_api.Controllers.Models;
using pet_api.Domain.Entities;
using pet_api.Domain.Interfaces;
using System.Data.Common;

namespace pet_api.Infrastructure.DAL.Repositories
{
    public class CategoryRepository : IRepository<Category, CategoryModel>
    {
        private readonly SqlConnection _connection;
        private readonly DbTransaction _transaction;
        public CategoryRepository(SqlConnection connection, DbTransaction transaction)
        {
            _connection = connection;
            _transaction = transaction;
        }

        public async Task Create(CategoryModel entity)
        {
            string sqlQuery = "INSERT INTO Categories (Name, Description) VALUES (@Name, @Description)";
            var parameters = new DynamicParameters();
            parameters.Add("@Name", entity.Name);
            parameters.Add("@Description", entity.Description);
            await _connection.ExecuteAsync(sqlQuery, parameters, transaction: _transaction);
        }

        public async Task<int> Delete(int id)
        {
            string sqlQuery = "DELETE FROM Categories WHERE Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("@Id", id);
            return await _connection.ExecuteAsync(sqlQuery, parameters, transaction: _transaction);
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            string sqlQuery = "SELECT * FROM Categories";
            IEnumerable<Category> categories;
            categories = await _connection.QueryAsync<Category>(sqlQuery, transaction: _transaction);
            return categories;

        }

        public async Task<Category> GetById(int id)
        {
            string sqlQuery = "SELECT * FROM Categories WHERE Id = @Id";
            Category category;
            var parameters = new DynamicParameters();
            parameters.Add("@Id", id);
            category = await _connection.QuerySingleOrDefaultAsync<Category>(sqlQuery, parameters, transaction: _transaction);
            return category;
        }

        public async Task<int> Update(int id, CategoryModel entity)
        {
            var parameters = new DynamicParameters();
            string sqlQuery = "UPDATE Categories SET Name = @Name, Description = @Description WHERE Id = @Id";
            parameters.Add("@Id", id);
            parameters.Add("@Name", entity.Name);
            parameters.Add("@Description", entity.Description);
            return await _connection.ExecuteAsync(sqlQuery, parameters, transaction: _transaction);
        }

    }
}

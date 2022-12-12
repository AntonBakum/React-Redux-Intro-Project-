using Dapper;
using Microsoft.Data.SqlClient;
using pet_api.Controllers.Models;
using pet_api.Domain.Entities;
using pet_api.Domain.Entities.Pagination;
using pet_api.Domain.Interfaces;
using System.Data;
using System.Data.Common;

namespace pet_api.Infrastructure.DAL.Repositories
{
    public class ProductRepository : IRepository<Product, ProductModel>
    {
        private readonly SqlConnection _connection;
        private readonly DbTransaction _transaction;

        public ProductRepository(SqlConnection connection, DbTransaction transaction)
        {
            _connection = connection;
            _transaction = transaction;
        }

        public async Task<int> Create(ProductModel entity)
        {
            string sqlQuery = "INSERT INTO Products (Name, Description, Price, Image, DateOfCreation) OUTPUT INSERTED.Id" +
                "VALUES (@Name, @Description, @Price, @Image, @DateOfCreation)";
            var parameters = new DynamicParameters();
            parameters.Add("@Name", entity.Name);
            parameters.Add("@Description", entity.Description);
            parameters.Add("@Price", entity.Price);
            parameters.Add("@Image", entity.Image);
            parameters.Add("@DateOfCreation", entity.DateOfCreation);
            return await _connection.ExecuteScalarAsync<int>(sqlQuery, parameters, transaction: _transaction);
        }

        public async Task<int> Delete(int id)
        {
            string sqlQuery = "DELETE FROM Products WHERE Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("@Id", id);
            return await _connection.ExecuteAsync(sqlQuery, parameters, transaction: _transaction);
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            IEnumerable<Product> products;
            string sqlQuery = "SELECT * FROM Products";
            products = await _connection.QueryAsync<Product>(sqlQuery, transaction: _transaction);
            return products;
        }

        public async Task<Product> GetById(int id)
        {
            Product product;
            var parameters = new DynamicParameters();
            parameters.Add("@Id", id);
            string sqlQuery = "SELECT * FROM Products WHERE Id = @Id";
            product = await _connection.QuerySingleOrDefaultAsync<Product>(sqlQuery, parameters, transaction: _transaction);
            return product;
        }

        public async Task<int> Update(int id, ProductModel entity)
        {
            var parameters = new DynamicParameters();
            string sqlQuery = "UPDATE Products SET Name = @Name, Description = @Description, Price = @Price, Image = @Image, DateOfCreation = @DateOfCreation WHERE Id = @Id";
            parameters.Add("@Id", id);
            parameters.Add("@Name", entity.Name);
            parameters.Add("@Description", entity.Description);
            parameters.Add("@Price", entity.Price, DbType.Decimal);
            parameters.Add("@Image", entity.Image, DbType.String);
            parameters.Add("@DateOfCreation", entity.DateOfCreation, DbType.DateTime);
            return await _connection.ExecuteAsync(sqlQuery, parameters, transaction: _transaction);
        }
        public async Task<IEnumerable<Product>> GetByPage(ProductParameters productParameters)
        {
            int numberOfSkippedProducts = (productParameters.PageNumber - 1) * productParameters.PageSize;
            string sqlQuery = "SELECT * FROM Products ORDER BY Id OFFSET @Number ROWS FETCH NEXT @PageSize ROWS ONLY";
            var parameters = new DynamicParameters();
            parameters.Add("@Number", numberOfSkippedProducts);
            parameters.Add("@PageSize", productParameters.PageSize);
            IEnumerable<Product> products;
            products = await _connection.QueryAsync<Product>(sqlQuery, parameters, transaction: _transaction);
            return products;
        }
    }
}

using Dapper;
using pet_api.Domain.Entities;
using pet_api.Domain.Entities.Pagination;
using pet_api.Domain.Interfaces;
using System.Data;

namespace pet_api.Infrastructure.DAL.Repositories
{
    public class ProductRepository
    {
        public class ProductRepository : IRepository<Product>
        {
            private readonly IDatabaseContext _context;

            public ProductRepository(IDatabaseContext context)
            {
                _context = context;
            }

            public async Task Create(Product entity)
            {
                string sqlQuery = "INSERT INTO Products (Name, Description, Price, Image, DateOfCreation) " +
                    "VALUES (@Name, @Description, @Price, @Image, @DateOfCreation)";
                var parameters = new DynamicParameters();
                using (var connection = _context.SqlConnection)
                {
                    await connection.ExecuteAsync(sqlQuery, parameters);
                }
            }

            public async Task Delete(int id)
            {
                string sqlQuery = "DELETE FROM Products WHERE Id = @Id";
                var parameters = new DynamicParameters();
                parameters.Add("@Id", id);
                using (var connection = _context.SqlConnection)
                {
                    await connection.ExecuteAsync(sqlQuery, parameters);
                }
            }

            public async Task<IEnumerable<Product>> GetAll()
            {
                IEnumerable<Product> products;
                string sqlQuery = "SELECT * FROM Products";
                using (var connection = _context.SqlConnection)
                {
                    products = await connection.QueryAsync<Product>(sqlQuery);
                    return products;
                }
            }

            public async Task<Product> GetById(int id)
            {
                Product product;
                var parameters = new DynamicParameters();
                parameters.Add("@Id", id);
                string sqlQuery = "SELECT * FROM Products WHERE Id = @Id";
                using (var connection = _context.SqlConnection)
                {
                    product = await connection.QuerySingleOrDefaultAsync<Product>(sqlQuery, parameters);
                    return product;
                }
            }

            public async Task Update(int id, Product entity)
            {
                var parameters = new DynamicParameters();
                string sqlQuery = "UPDATE Products SET Name = @Name, Description = @Description " +
                    "Price = @Price, Image = @Image, DateOfCreation = @DateOfCreation WHERE Id = @Id";
                parameters.Add("@Id", id);
                parameters.Add("@Name", entity.Name);
                parameters.Add("@Description", entity.Description);
                parameters.Add("@Price", entity.Price, DbType.Decimal);
                parameters.Add("@Image", entity.Image, DbType.String);
                parameters.Add("@DateOfCreation", entity.DateOfCreation, DbType.DateTime);
                using (var connection = _context.SqlConnection)
                {
                    await connection.ExecuteAsync(sqlQuery, parameters);
                }
            }
            public async Task<PagedList<Product>> GetByPage(ProductParameters productParameters)
            {
                string sqlQuery = "SELECT * FROM Categories";
                IEnumerable<Product> products;
                using (var connection = _context.SqlConnection)
                {
                    products = await connection.QueryAsync<Product>(sqlQuery);
                    return PagedList<Product>.ToPagedList(products, productParameters.PageNumber, productParameters.PageSize);
                }
            }
        }
    }
}

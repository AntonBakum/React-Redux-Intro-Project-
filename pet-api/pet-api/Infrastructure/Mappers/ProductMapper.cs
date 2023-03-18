using pet_api.Controllers.DTOs;
using pet_api.Domain.Entities;
using pet_api.Domain.Interfaces;

namespace pet_api.Infrastructure.Mappers
{
    public class ProductMapper: IProductMapper
    {
        private readonly IConfiguration _configuration;
        private readonly string productDTOImagePath;
        public ProductMapper (IConfiguration configuration)
        {
            _configuration = configuration;
            productDTOImagePath = $"{_configuration["URL"]}//Products/";
        }
        public ProductDTO MapToProductDTO(Product product)
        {
            return new ProductDTO
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Image = String.Concat(productDTOImagePath, product.Image),
                DateOfCreation = product.DateOfCreation,
            };
        }
    }
}

using pet_api.Controllers.DTOs;
using pet_api.Domain.Entities;

namespace pet_api.Domain.Interfaces
{
    public interface IProductMapper
    {
        ProductDTO MapToProductDTO(Product product);
    }
}

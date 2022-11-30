using Microsoft.AspNetCore.Mvc;
using pet_api.Domain.Entities.Pagination;
using pet_api.Domain.Entities;
using pet_api.Domain.Interfaces;

namespace pet_api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetProductById(int id)
        {
            Product product = await _unitOfWork.ProductRepository.GetById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpGet]
        public async Task<ActionResult> GetProducts([FromQuery] ProductParameters productParameters)
        {
            PagedList<Product> products = await _unitOfWork.ProductRepository.GetByPage(productParameters);
            return Ok(products);
        }
    }
}

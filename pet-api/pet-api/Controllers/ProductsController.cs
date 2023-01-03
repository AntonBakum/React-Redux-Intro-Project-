using Microsoft.AspNetCore.Mvc;
using pet_api.Domain.Entities.Pagination;
using pet_api.Domain.Entities;
using pet_api.Domain.Interfaces;
using pet_api.Controllers.Models;
using pet_api.Controllers.DTOs;

namespace pet_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IProductMapper _productMapper;

        public ProductsController(IUnitOfWork unitOfWork, IProductMapper productMapper)
        {
            _unitOfWork = unitOfWork;
            _productMapper = productMapper;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Product>> GetProductById(int id)
        {
            await _unitOfWork.BeginTransaction();
            Product product = await _unitOfWork.ProductRepository.GetById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProducts([FromQuery] ProductParameters productParameters)
        {
            await _unitOfWork.BeginTransaction();
            IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetByPage(productParameters);
            var productDTOs = products.Select(_productMapper.MapToProductDTO);
            return Ok(productDTOs);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateProduct([FromBody] ProductModel product)
        {
            await _unitOfWork.BeginTransaction();
            int id = await _unitOfWork.ProductRepository.Create(product);
            await _unitOfWork.Commit();
            return Ok(id);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<HttpResponse>> UpdateCetegory(int id, [FromBody] ProductModel product)
        {
            await _unitOfWork.BeginTransaction();
            int updatingResult = await _unitOfWork.ProductRepository.Update(id, product);
            await _unitOfWork.Commit();
            if (updatingResult == 0)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<HttpResponse>> DeleteProduct(int id)
        {
            await _unitOfWork.BeginTransaction();
            int deletingResult = await _unitOfWork.ProductRepository.Delete(id);
            await _unitOfWork.Commit();
            if (deletingResult == 0)
            {
                return NotFound();
            }
            return Ok();
        }
    }
}

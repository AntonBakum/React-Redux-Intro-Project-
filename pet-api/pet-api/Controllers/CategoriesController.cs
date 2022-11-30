using Microsoft.AspNetCore.Mvc;
using pet_api.Domain.Entities;
using pet_api.Domain.Interfaces;

namespace pet_api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoriesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetCategoryById(int id)
        {
            Category category = await _unitOfWork.CategoryRepository.GetById(id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        [HttpGet]
        public async Task<ActionResult> GetCategories()
        {
            IEnumerable<Category> categories = await _unitOfWork.CategoryRepository.GetAll();
            return Ok(categories);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using pet_api.Controllers.Models;
using pet_api.Domain.Entities;
using pet_api.Domain.Interfaces;

namespace pet_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoriesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Category>> GetCategoryById(int id)
        {
            Category category;
            await _unitOfWork.BeginTransaction();
            category = await _unitOfWork.CategoryRepository.GetById(id);
            if (category != null)
            {
                return Ok(category);
            }
            return NotFound();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            await _unitOfWork.BeginTransaction();
            IEnumerable<Category> categories = await _unitOfWork.CategoryRepository.GetAll();
            return Ok(categories);
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateCategory([FromBody] CategoryModel category)
        {
            await _unitOfWork.BeginTransaction();
            int id = await _unitOfWork.CategoryRepository.Create(category);
            await _unitOfWork.Commit();
            return Ok(id);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<HttpResponse>> UpdateCetegory(int id, [FromBody] CategoryModel category)
        {
            await _unitOfWork.BeginTransaction();
            int updatingResult = await _unitOfWork.CategoryRepository.Update(id, category);
            await _unitOfWork.Commit();
            if (updatingResult == 0)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<HttpResponse>> DeleteCategory(int id)
        {
            await _unitOfWork.BeginTransaction();
            int deletingResult = await _unitOfWork.CategoryRepository.Delete(id);
            await _unitOfWork.Commit();
            if (deletingResult == 0)
            {
                return NotFound();
            }
            return Ok();
        }
    }
}

using pet_api.Domain.Interfaces;
using pet_api.Infrastructure.DAL.Repositories;

namespace pet_api.Infrastructure.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseContext _context;
        private CategoryRepository _categoryRepository;
        private ProductRepository _productRepository;

        public UnitOfWork(IDatabaseContext context)
        {
            _context = context;
        }
        public CategoryRepository CategoryRepository
        {
            get
            {

                if (this._categoryRepository == null)
                {
                    this._categoryRepository = new CategoryRepository(_context);
                }
                return _categoryRepository;
            }
        }
        public ProductRepository ProductRepository
        {
            get
            {

                if (this._productRepository == null)
                {
                    this._productRepository = new ProductRepository(_context);
                }
                return _productRepository;
            }
        }
    }
}

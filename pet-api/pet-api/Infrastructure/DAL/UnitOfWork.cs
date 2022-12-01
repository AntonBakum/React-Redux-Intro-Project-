using pet_api.Domain.Interfaces;
using pet_api.Infrastructure.DAL.Repositories;
using System.Data.Common;

namespace pet_api.Infrastructure.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseContext _context;
        private DbTransaction sqlTransaction;
        private CategoryRepository _categoryRepository;
        private ProductRepository _productRepository;
        private bool disposedValue;

        public UnitOfWork(IDatabaseContext context)
        {
            _context = context;
            _context.SqlConnection.Open();
        }
        public CategoryRepository CategoryRepository
        {
            get
            {
                if (this._categoryRepository == null)
                {
                    this._categoryRepository = new CategoryRepository(_context.SqlConnection, sqlTransaction);
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
                    this._productRepository = new ProductRepository(_context.SqlConnection, sqlTransaction);
                }
                return _productRepository;
            }
        }

        public async Task BeginTransaction()
        {
            sqlTransaction = await _context.SqlConnection.BeginTransactionAsync();
        }

        public async Task Commit()
        {
            try
            {
                await sqlTransaction.CommitAsync();
            }
            catch
            {
                await Rollback();
            }
        }

        public async Task Rollback()
        {
            await sqlTransaction.RollbackAsync();
        }

        protected virtual void Dispose(bool disposing)
        {
            _context.SqlConnection.Close();
            if (!disposedValue)
            {
                if (disposing)
                {
                }
                disposedValue = true;
            }
        }

        /*~UnitOfWork()
        {
            Dispose(disposing: false);
        }*/

        public void Dispose()
        {
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}

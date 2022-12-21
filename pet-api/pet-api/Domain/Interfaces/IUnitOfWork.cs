using pet_api.Infrastructure.DAL.Repositories;

namespace pet_api.Domain.Interfaces
{
    public interface IUnitOfWork
    {
        Task Rollback();
        Task Commit();
        Task BeginTransaction();
        CategoryRepository CategoryRepository { get; }
        ProductRepository ProductRepository { get; }
    }
}

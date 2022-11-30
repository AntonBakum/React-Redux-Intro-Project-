using pet_api.Infrastructure.DAL.Repositories;

namespace pet_api.Domain.Interfaces
{
    public interface IUnitOfWork
    {
        CategoryRepository CategoryRepository { get; }
        ProductRepository ProductRepository { get; }
    }
}

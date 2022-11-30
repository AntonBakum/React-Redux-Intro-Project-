namespace pet_api.Domain.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task<T> GetById(int id);
        Task<IEnumerable<T>> GetAll();

        Task Update(int id, T entity);

        Task Delete(int id);

        Task Create(T entity);
    }
}

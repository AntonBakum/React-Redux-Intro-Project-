namespace pet_api.Domain.Interfaces
{
    public interface IRepository<T, U> where T : class
         where U : class
    {
        Task<T> GetById(int id);
        Task<IEnumerable<T>> GetAll();

        Task<int> Update(int id, U entity);

        Task<int> Delete(int id);

        Task Create(U entity);

    }
}

namespace pet_api.Domain.Entities.Pagination
{
    public class ProductParameters
    {
        const int maxPageSize = 50;
        public int PageNumber { get; set; } = 1;

        int pageSize = 10;
        public int PageSize
        {
            get
            {
                return pageSize;
            }
            set
            {
                pageSize = (value > maxPageSize) ? maxPageSize : value;
            }
        }
    }
}

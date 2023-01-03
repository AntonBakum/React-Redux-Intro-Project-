using pet_api.Domain.Entities;

namespace pet_api.Infrastructure.Services
{
    public static class URLBuilderService
    {
        public static IEnumerable<Product> BuildURL (this IEnumerable<Product> products, IConfiguration configuration)
        {
            string imagePath = $"{configuration["URL"]}//Products/";
            return products.Select(product =>
            new Product
            {
                Id = product.Id,
                Name = product.Name,
                DateOfCreation = product.DateOfCreation,
                Description = product.Description,
                Categories= product.Categories,
                Price= product.Price,
                ProductFeedbacks= product.ProductFeedbacks,
                Image = String.Concat(imagePath, product.Image),
            });
        }
    }
}


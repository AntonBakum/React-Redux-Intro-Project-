using FluentMigrator;


namespace pet_api.Infrastructure.DAL.Migrations
{
    [Migration(2)]
    public class InitialSeed : Migration
    {
        private readonly IConfiguration _configuration;

        public InitialSeed(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public override void Down()
        {
        }

        public override void Up()
        {
            Insert.IntoTable("Products")
                .Row(new
                {
                    Name = "Apples",
                    Description = "The best Ukrainian apples from the Vinnitsa region",
                    Price = 9,
                    Image = $"{_configuration["URL"]}//Products/1-apple.png",
                    DateOfCreation = DateTime.Now
                });

            Insert.IntoTable("Products")
                .Row(new
                {
                    Name = "Oranges",
                    Description = "The best Geogrian oranges from the sunny city of Batumi",
                    Price = 49,
                    Image = $"{_configuration["URL"]}//Products/2-orange.png",
                    DateOfCreation = DateTime.Now
                });

            Insert.IntoTable("Products")
                .Row(new
                {
                    Name = "Pineapples",
                    Description = "The best Southamerican pineapples",
                    Price = 160,
                    Image = $"{_configuration["URL"]}//Products/3-pineapple.png",
                    DateOfCreation = DateTime.Now
                });

            Insert.IntoTable("Products")
               .Row(new
               {
                   Name = "Qiwi",
                   Description = "The best Italian subtropical qiwi",
                   Price = 140,
                   Image = $"{_configuration["URL"]}//Products/4-qiwi.png",
                   DateOfCreation = DateTime.Now
               });

            Insert.IntoTable("ProductFeedbacks")
                .Row(new
                {
                    Content = "This is the best apples in my life, it`s very tasty!",
                    ProductId = 1,
                    DateOfPublication = DateTime.Now
                });

            Insert.IntoTable("ProductFeedbacks")
              .Row(new
              {
                  Content = "This is the best oranges in my life, I like Georgia and it`s residents",
                  ProductId = 2,
                  DateOfPublication = DateTime.Now,

              });
            Insert.IntoTable("Categories")
            .Row(new
            {
                Name = "Fruits",
                Description = "Fruits: oranges, apples etc"

            });
            Insert.IntoTable("Categories")
            .Row(new
            {
                Name = "Home chemistry",
                Description = "Things for cleaning in the house"
            });

        }
    }
}

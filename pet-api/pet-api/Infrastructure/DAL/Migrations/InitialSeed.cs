﻿using FluentMigrator;
using System.Collections.Generic;

namespace pet_api.Infrastructure.DAL.Migrations
{
    [Migration(2)]
    public class InitialSeed : Migration
    {
        public override void Down()
        {
        }

        public override void Up()
        {
            Insert.IntoTable("Product")
                .Row(new
                {
                    Name = "Apples",
                    Description = "The best Ukrainian apples from the Vinnitsa region",
                    Price = 9,
                    Image = "1/apple.png",
                    DateOfCreation = DateTime.Now
                });

            Insert.IntoTable("Product")
                .Row(new
                {
                    Name = "Oranges",
                    Description = "The best Geogrian oranges from the sunny city of Batumi",
                    Price = 49,
                    Image = "2/orange.png",
                    DateOfCreation = DateTime.Now
                });

            Insert.IntoTable("ProductFeedback")
                .Row(new
                {
                    Content = "This is the best apples in my life, it`s very tasty!",
                    ProductId = 1,
                    DateOfPublication = DateTime.Now,
                });

            Insert.IntoTable("ProductFeedback")
              .Row(new
              {
                  Content = "This is the best oranges in my life, I like Georgia and it`s residents",
                  ProductId = 2,
                  DateOfPublication = DateTime.Now,

              });
            Insert.IntoTable("Category")
            .Row(new
            {
                Name = "Fruits",
                Description = "Fruits: oranges, apples etc"

            });
            Insert.IntoTable("Category")
            .Row(new
            {
                Name = "Home chemistry",
                Description = "Things for cleaning in the house"
            });

        }
    }
}

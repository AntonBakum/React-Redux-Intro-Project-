﻿namespace pet_api.Domain.Entities
{
   public class Product
   {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        public DateTime DateOfCreation { get; set; }
        public List<Category> Categories { get; set; }
        public List<ProductFeedback> ProductFeedbacks { get; set; }

   }
}

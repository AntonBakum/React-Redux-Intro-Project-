namespace pet_api.Domain.Entities
{
    public class ProductFeedback
    {
        public int ProductFeedbackId { get; set; }
        public string Content { get; set; }
        public DateTime DateOfPublication { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}

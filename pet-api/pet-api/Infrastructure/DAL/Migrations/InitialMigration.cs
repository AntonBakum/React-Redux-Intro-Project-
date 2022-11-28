using FluentMigrator;
using FluentMigrator.SqlServer;

namespace pet_api.Infrastructure.DAL.Migrations
{
    [Migration(1)]
    public class InitialMigration : Migration
    {
        public override void Down()
        {
            Delete.Table("Product");
            Delete.Table("Category");
            Delete.Table("ProductFeedback");
        }

        public override void Up()
        {
            Create.Table("Product")
               .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
               .WithColumn("Name").AsString(50).NotNullable()
               .WithColumn("Description").AsString(300).NotNullable()
               .WithColumn("Price").AsDecimal().NotNullable()
               .WithColumn("Image").AsString(100).NotNullable()
               .WithColumn("DateOfCreation").AsDateTime().NotNullable();

            Create.Table("Category")
                .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("Description").AsString(300).NotNullable();

            Create.Table("ProductFeedback")
                .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
                .WithColumn("Content").AsString(500).NotNullable()
                .WithColumn("DateOfPublication").AsDateTime().NotNullable()
                .WithColumn("ProductId").AsInt32().NotNullable().ForeignKey("Product", "Id");

            Create.Index("IX_ProductFeedback_ProductId")
                .OnTable("ProductFeedback")
                .OnColumn("ProductId")
                .Ascending()
                .WithOptions().NonClustered();
        }
    }
}

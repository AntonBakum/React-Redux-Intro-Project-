using FluentMigrator;
using FluentMigrator.SqlServer;

namespace pet_api.Infrastructure.DAL.Migrations
{
    [Migration(1)]
    public class InitialMigration : Migration
    {
        public override void Down()
        {
            Delete.Table("Products");
            Delete.Table("Categories");
            Delete.Table("ProductFeedbacks");
        }

        public override void Up()
        {
            Create.Table("Products")
               .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
               .WithColumn("Name").AsString(50).NotNullable()
               .WithColumn("Description").AsString(300).NotNullable()
               .WithColumn("Price").AsDecimal().NotNullable()
               .WithColumn("Image").AsString(100).NotNullable()
               .WithColumn("DateOfCreation").AsDateTime().NotNullable();

            Create.Table("Categories")
                .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("Description").AsString(300).NotNullable();

            Create.Table("ProductFeedbacks")
                .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity(1, 1)
                .WithColumn("Content").AsString(500).NotNullable()
                .WithColumn("DateOfPublication").AsDateTime().NotNullable()
                .WithColumn("ProductId").AsInt32().NotNullable().ForeignKey("Products", "Id");

            Create.Index("IX_ProductFeedbacks_ProductId")
                .OnTable("ProductFeedbacks")
                .OnColumn("ProductId")
                .Ascending()
                .WithOptions().NonClustered();
        }
    }
}

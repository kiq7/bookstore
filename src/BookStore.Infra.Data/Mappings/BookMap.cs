using BookStore.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookStore.Infra.Data.Mappings
{
    public class BookMap : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder
                .ToTable("Books")
                .HasKey(x => x.Isbn);

            builder.Property(x => x.Title)
                .HasColumnName("Title")
                .HasMaxLength(100);

            builder.Property(x => x.Author)
                .HasColumnName("Author")
                .HasMaxLength(20);

            builder.Property(x => x.Isbn)
                .HasColumnName("Isbn")
                .HasMaxLength(13);

            builder.Property(x => x.Publisher)
                .HasColumnName("Publisher")
                .HasMaxLength(30);

            builder.Property(x => x.CreateDate)
                .HasColumnName("CreateDate");

            // Ignore Flunt properties
            builder.Ignore(x => x.Valid);
            builder.Ignore(x => x.Invalid);
            builder.Ignore(x => x.Notifications);
        }
    }
}

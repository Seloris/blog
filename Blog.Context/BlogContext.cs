using Blog.Context.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blog.Context
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions options) : base(options) { }

        public DbSet<Post> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>(post =>
            {
                post.HasKey(p => p.Id);

                post.ToTable("Posts");

                post.Property(p => p.CreationDate).IsRequired();
                post.Property(p => p.PublicationDate).IsRequired();
                post.Property(p => p.Title).IsRequired();
                post.Property(p => p.Description).IsRequired();
                post.Property(p => p.Url).IsRequired();
                post.Property(p => p.MarkdownContent).IsRequired();
                post.Property(p => p.HtmlContent).IsRequired();
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}

using Blog.Context.Entities;

namespace Blog.Domain.Models
{
    public class UpsertPostModel : PostModel
    {
        public string Markdown { get; set; }

        public new static UpsertPostModel From(Post post)
        {
            return new UpsertPostModel
            {
                Description = post.Description,
                Html = post.HtmlContent,
                PublicationDate = post.PublicationDate,
                Title = post.Title,
                Url = post.Url,
                Markdown = post.MarkdownContent
            };
        }
    }
}

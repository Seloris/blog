using Blog.Context.Entities;
using System;

namespace Blog.Domain.Models
{

    public class PostModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string Html { get; set; }

        public DateTime PublicationDate { get; set; }

        public static PostModel From(Post post)
        {
            return new PostModel
            {
                Description = post.Description,
                Html = post.HtmlContent,
                PublicationDate = post.PublicationDate,
                Title = post.Title,
                Url = post.Url,
            };
        }
    }
}

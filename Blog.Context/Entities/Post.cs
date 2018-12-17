using System;

namespace Blog.Context.Entities
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }

        public string MarkdownContent { get; set; }
        public string HtmlContent { get; set; }

        public DateTime CreationDate { get; set; }
        public DateTime PublicationDate { get; set; }
    }
}

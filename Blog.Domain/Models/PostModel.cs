using System;

namespace Blog.Domain.Models
{
    public class PostModel
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime PublicationDate { get; set; }
    }
}

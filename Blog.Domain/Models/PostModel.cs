using Blog.Context.Entities;
using System;

namespace Blog.Domain.Models
{
    public class PostModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string Markdown { get; set; }
        public DateTime PublicationDate { get; set; }
    }
}

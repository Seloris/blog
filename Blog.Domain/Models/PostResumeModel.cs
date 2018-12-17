using Blog.Context.Entities;
using System;

namespace Blog.Domain.Models
{
    public class PostResumeModel
    {
        public int Id { get; set; }
        public DateTime PublicationDate { get; set; }
        public DateTime CreationDate { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public static PostResumeModel From(Post post)
        {
            return new PostResumeModel
            {
                Id = post.Id,
                Description = post.Description,
                CreationDate = post.CreationDate,
                PublicationDate = post.PublicationDate,
                Title = post.Title,
                Url = post.Url
            };
        }
    }
}

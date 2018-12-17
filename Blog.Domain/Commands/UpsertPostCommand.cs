using Blog.Context;
using Blog.Context.Entities;
using Blog.Domain.Models;
using System;
using System.Threading.Tasks;

namespace Blog.Domain.Commands
{
    public class UpsertPostCommand : ICommand
    {
        private UpsertPostModel _post;
        private BlogContext _context;
        private int? Id;

        public UpsertPostCommand(BlogContext context)
        {
            _context = context;
        }

        public UpsertPostCommand WithPost(UpsertPostModel postModel)
        {
            _post = postModel;
            return this;
        }

        public UpsertPostCommand WithPostId(int id)
        {
            Id = id;
            return this;
        }

        public async Task SendAsync()
        {
            Post post;
            if (Id != null)
            {
                post = await _context.Posts.FindAsync(Id);
            }
            else
            {
                post = new Post
                {
                    CreationDate = DateTime.UtcNow
                };
                _context.Posts.Add(post);
            }

            post.PublicationDate = _post.PublicationDate;
            post.MarkdownContent = _post.Markdown;
            post.Title = _post.Title;
            post.Url = _post.Url;
            post.Description = _post.Description;
            post.HtmlContent = _post.Html;

            await _context.SaveChangesAsync();
        }

    }
}

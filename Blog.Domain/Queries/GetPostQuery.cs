using Blog.Context;
using Blog.Context.Entities;
using Blog.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Domain.Queries
{
    public class GetPostQuery : IQuery<PostModel>
    {
        private readonly BlogContext _context;
        private string _postUrl;
        public GetPostQuery(BlogContext context)
        {
            _context = context;
        }

        public GetPostQuery ByPostUrl(string postUrl)
        {
            _postUrl = postUrl;
            return this;
        }

        public async Task<PostModel> GetAsync()
        {
            if (string.IsNullOrWhiteSpace(_postUrl))
            {
                throw new Exception("Tu comptes aller où avec un null or whitespace ??");
            }

            Post post = await _context.Posts.FirstOrDefaultAsync(p => p.Url == _postUrl);

            if (post == null)
            {
                throw new Exception("Dsl ce post n'existe pas");
            }

            return new PostModel
            {
                Markdown = post.MarkdownContent,
                PublicationDate = post.PublicationDate,
                Title = post.Title,
            };
        }
    }
}

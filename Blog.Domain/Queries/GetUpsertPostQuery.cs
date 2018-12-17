using Blog.Context;
using Blog.Context.Entities;
using Blog.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Domain.Queries
{
    public class GetUpsertPostQuery : IQuery<UpsertPostModel>
    {
        private readonly BlogContext _context;
        private int? _postId;
        public GetUpsertPostQuery(BlogContext context)
        {
            _context = context;
        }

        public GetUpsertPostQuery ByPostId(int postId)
        {
            _postId = postId;
            return this;
        }

        public async Task<UpsertPostModel> GetAsync()
        {
            if (_postId == null)
            {
                throw new Exception("Post id null");
            }

            Post post = await _context.Posts.FirstOrDefaultAsync(p => p.Id == _postId);

            if (post == null)
            {
                throw new Exception("Dsl ce post n'existe pas");
            }

            return UpsertPostModel.From(post);
        }
    }
}

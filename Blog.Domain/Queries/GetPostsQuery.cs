using Blog.Context;
using Blog.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Domain.Queries
{
    public class GetPostsQuery : IQuery<PostResumeModel[]>
    {
        private readonly BlogContext _context;
        public GetPostsQuery(BlogContext context)
        {
            _context = context;
        }

        public Task<PostResumeModel[]> GetAsync()
        {
            return _context.Posts.Select(p => PostResumeModel.From(p)).ToArrayAsync();
        }
    }
}

using System.Threading.Tasks;

namespace Blog.Domain.Queries
{
    public class GetPostsQuery : IQuery<object>
    {
        public string Data { get; set; }

        public GetPostsQuery()
        {

        }

        public Task<object> GetAsync()
        {
            return Task.FromResult((object)new { Test = "ok" });
        }
    }
}

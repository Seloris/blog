using Blog.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Api.Controllers
{
    [Route("api/posts")]
    public class PostController : Controller
    {
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            var post1 = new PostResumeModel
            {
                Title = "Blog de post 1",
                Url = "blog-post-1"
            };

            var post2 = new PostResumeModel
            {
                Title = "Blog de post 1",
                Url = "blog-post-1"
            };
            var post3 = new PostResumeModel
            {
                Title = "Blog de post 1",
                Url = "blog-post-1"
            };

            return Ok(new PostResumeModel[] { post1, post2, post3 });
        }
    }
}
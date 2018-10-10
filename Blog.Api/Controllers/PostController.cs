using Blog.Domain.Models;
using Blog.Domain.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blog.Api.Controllers
{
    [Route("api/posts")]
    public class PostController : Controller
    {
        [Route("")]
        [HttpGet]
        public async Task<IActionResult> Index([FromServices] GetPostsQuery query)
        {
            PostResumeModel[] result = await query.GetAsync();
            return Ok(result);
        }
    }
}
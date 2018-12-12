﻿using Blog.Domain.Commands;
using Blog.Domain.Models;
using Blog.Domain.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Blog.Api.Controllers
{
    [Route("api/posts")]
    public class PostController : Controller
    {
        [HttpGet("")]
        public async Task<IActionResult> Index([FromServices] GetPostsQuery query)
        {
            PostResumeModel[] result = await query.GetAsync();
            return Ok(result);
        }

        [HttpGet("{postUrl}")]
        public async Task<IActionResult> Index([FromServices] GetPostQuery query, string postUrl)
        {
            PostModel post = await query.ByPostUrl(postUrl).GetAsync();
            return Ok(post);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddPostAsync([FromServices] UpsertPostCommand command, [FromBody] PostModel request)
        {
            await command.WithPost(request).SendAsync();
            return NoContent();
        }

        [HttpPut("{postId}")]
        public async Task<IActionResult> UpdatePostAsync([FromServices] UpsertPostCommand command, [FromBody] PostModel request, int postId)
        {
            await command.WithPost(request).SendAsync();
            return NoContent();
        }
    }
}
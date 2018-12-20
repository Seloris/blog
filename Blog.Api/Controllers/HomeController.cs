using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Prerendering;

namespace Blog.Api.Controllers
{
    public class HomeController : Controller
    {
        public class SimpleRequest
        {
            public IRequestCookieCollection Cookies { get; }
            public IHeaderDictionary Headers { get; }

            public SimpleRequest(HttpRequest request)
            {
                this.Cookies = request.Cookies;
                this.Headers = request.Headers;
            }
        }
        public async Task<IActionResult> Index([FromServices] ISpaPrerenderer prerenderer)
        {
            var parameters = new
            {
                Request = new SimpleRequest(Request),
                Data = new
                {
                    Something = "something"
                }
            };

            RenderToStringResult result = await prerenderer.RenderToString("./Blog.Front/dist/server/server.js", customDataParameter: parameters);

            ViewData["SPA"] = result.Html;
            ViewData["Scripts"] = result.Globals["scripts"];
            ViewData["Styles"] = result.Globals["styles"];


            return View();
        }

    }
}

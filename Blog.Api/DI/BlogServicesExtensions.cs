using Blog.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Blog.Api.DI
{
    public static class BlogServicesExtensions
    {
        public static void AddSpaBullshit(this IServiceCollection services)
        {
            services.AddNodeServices();
            services.AddSpaPrerenderer();
            services.AddSpaStaticFiles(config =>
            {
                config.RootPath = "wwwroot";
            });
        }

        public static void AddBlogCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("MostSecureCorsEver", builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            });
        }

        public static void AddEntityFramework(this IServiceCollection services, IConfiguration config)
        {
            services.AddEntityFrameworkSqlServer().AddDbContext<BlogContext>(opt => opt.UseSqlServer(config.GetConnectionString("BlogContext")));
        }
    }
}

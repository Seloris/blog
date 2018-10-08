using Blog.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Blog.Api.Extensions
{
    public static class BlogServicesExtensions
    {
        public static void AddSpaBullshit(this IServiceCollection services)
        {
            services.AddNodeServices();
            services.AddSpaPrerenderer();
            services.AddSpaStaticFiles(config =>
            {
                config.RootPath = "../Blog.Front/dist/blog-server";
            });
        }

        public static void AddBlogCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("MostSecureCorsEver", builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            });
        }

        public static void AddEntityFramework(this IServiceCollection services)
        {
            services.AddEntityFrameworkSqlServer().AddDbContext<BlogContext>(opt => opt.UseSqlServer("."));
            services.AddScoped(provider => provider.GetService<BlogContext>());
        }
    }
}

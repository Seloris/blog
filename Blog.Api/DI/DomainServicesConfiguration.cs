using Blog.Domain.Commands;
using Blog.Domain.Queries;
using Microsoft.Extensions.DependencyInjection;

namespace Blog.Api.DI
{
    public static class DomainServicesConfiguration
    {
        public static void AddQueryCommands(this IServiceCollection services)
        {
            services.AddScoped<GetPostsQuery>();
        }

    }
}

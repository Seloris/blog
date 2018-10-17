using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Blog.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseUrls("http://*:5200")
                .UseStartup<Startup>()
                .UseApplicationInsights("7f280b35-1638-4db8-a9ea-93b4555a4983")
                .Build();
    }
}

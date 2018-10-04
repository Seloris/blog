using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Blog.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddNodeServices();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "../Blog.Front/dist/server";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }


            //app.UseSpa(spa =>
            //{
            //    spa.Options.SourcePath = "../Blog.Front";

            //    spa.UseSpaPrerendering(options =>
            //    {
            //        options.BootModulePath = $"{spa.Options.SourcePath}/dist/server/main.js";
            //        //options.BootModuleBuilder = env.IsDevelopment()
            //        //    ? new AngularCliBuilder(npmScript: "build:ssr")
            //        //    : null;
            //        options.ExcludeUrls = new[] { "/sockjs-node" };
            //    });
            //});

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            //app.UseSpa(spa =>
            //{
            //    spa.Options.SourcePath = "../Blog.Front";

            //    spa.UseSpaPrerendering(options =>
            //    {
            //        options.BootModulePath = $"{spa.Options.SourcePath}/dist/server/boot-server.ts";
            //        //options.BootModuleBuilder = env.IsDevelopment()
            //        //    ? new AngularCliBuilder(npmScript: "build:ssr")
            //        //    : null;
            //        options.ExcludeUrls = new[] { "/sockjs-node" };
            //    });
            //});
        }
    }
}

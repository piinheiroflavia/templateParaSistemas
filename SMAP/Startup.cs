//using SMAP.Models;
//using SMAP.Models.DatabaseContext;
//using SMAP.Repositories;
using SMAP.Controllers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.UI;
//using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using SMAP.Models.DatabaseContext;

namespace SMAP
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
            services.AddControllersWithViews().AddRazorRuntimeCompilation();
			//services.AddNotyf(config => { config.DurationInSeconds = 10; config.IsDismissable = true; config.Position = NotyfPosition.TopRight; });


			//conexao de banco

			//string CentileConnectionString = Configuration.GetConnectionString("CentileConnectionString");
			//string _CCCConnectionString = Configuration.GetConnectionString("");

			//database contexts
			// services.AddDbContext<_ApplicationContext>(options => options.UseSqlServer(_CCConnectionString));

			// services.AddDbContext<CENTILE_ApplicationContext>(options =>
			// {
			//     options.UseSqlServer(Configuration.GetConnectionString("CentileConnectionString"), sqlServerOptionsAction: sqlOptions =>
			//     {
			//         sqlOptions.CommandTimeout(300); // Defina o tempo limite desejado em segundos
			//     });

			//     options.EnableSensitiveDataLogging();
			// });



			// //Injeção de Dependências 
			// services.AddScoped<ConsultaRepositoryCENTILE>();

			// services.AddScoped<ParametrosController>();


			services.AddMvc();
            services.AddDistributedMemoryCache();
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromMinutes(120);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });

            services.Configure<IdentityOptions>(options =>
            {
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(120);
                options.Lockout.AllowedForNewUsers = false;
            });

            //autorizações
            services.AddAuthorization(options =>
            {
                options.AddPolicy("RequireAuthenticatedUser", policy => policy.RequireAuthenticatedUser());// usuários autenticados (logados) 
                options.AddPolicy("AdminPolicy", policy => policy.RequireRole("Admin"));
                options.AddPolicy("UserPolicy", policy => policy.RequireRole("User"));
            });

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30); 
            });


            // Cokies
            services.AddAuthentication("CookieAuthentication").AddCookie("CookieAuthentication", config =>
            {
                config.Cookie.Name = "UserLoginCookie";
                config.LoginPath = "/Login/UserLogin"; //TALVEZ ALTERAR AQUI
                config.AccessDeniedPath = "/Login/AccessDenied"; //TALVEZ ALTERAR AQUI
                config.SlidingExpiration = true; //Renova o cookie enquanto existir interação
                config.ExpireTimeSpan = TimeSpan.FromMinutes(120);
                config.Events.OnRedirectToLogin = context =>
                {
                    context.Response.Redirect("/Login/UserLogin");
                    return Task.CompletedTask;
                };
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseSession();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }



    }
}

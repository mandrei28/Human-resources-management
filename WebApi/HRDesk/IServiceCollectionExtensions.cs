using HRDesk.Infrastructure;
using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRDesk.Services.ServiceInterfaces;
using HRDesk.Services.Services;

namespace HRDesk
{
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            // Configure DbContext with Scoped lifetime   
            services.AddDbContext<HRDeskDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            }
            );
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            return services;
        }

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            return services
                .AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>))
                .AddScoped<IUserRepository, UserRepository>();
            //.AddScoped<IDepartmentRepository, DepartmentRepository>()
            //.AddScoped<IUserRepository, UserRepository>()
            //.AddScoped<ISalaryRepository, SalaryRepository>();
        }

        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
        {
            return services.AddSingleton<IAuthService>(
                new AuthService(
                    configuration.GetValue<string>("JWTSecretKey"),
                    configuration.GetValue<int>("JWTLifespan")
                )
            );
        }
    }
}

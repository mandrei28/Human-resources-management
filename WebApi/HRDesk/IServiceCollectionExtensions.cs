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
                .AddScoped<IUserRepository, UserRepository>()
                .AddScoped<IFunctionRepository, FunctionRepository>()
                .AddScoped<ITeamRepository, TeamRepository>()
                .AddScoped<IOfficeRepository, OfficeRepository>()
                .AddScoped<IMeetingRoomRepository, MeetingRoomRepository>()
                .AddScoped<INationalDayRepository, NationalDayRepository>()
                .AddScoped<ILeaveRequestRepository, LeaveRequestRepository>()
                .AddScoped<IDayoffRepository, DayoffRepository>()
                .AddScoped<IMeetingRepository, MeetingRepository>();
        }

        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
        {
            return services.AddSingleton<IAuthService>(
                new AuthService(
                    configuration.GetValue<string>("JWTSecretKey"),
                    configuration.GetValue<int>("JWTLifespan")
                )
            ).AddHttpContextAccessor()
            .AddScoped<IIdentityService, IdentityService>()
            .AddScoped<IUserService, UserService>()
            .AddScoped<IFunctionService, FunctionService>()
            .AddScoped<ITeamService, TeamService>()
            .AddScoped<IOfficeService, OfficeService>()
            .AddScoped<IMeetingRoomService, MeetingRoomService>()
            .AddScoped<INationalDayService, NationalDayService>()
            .AddScoped<ILeaveRequestService, LeaveRequestService>()
            .AddScoped<IDayoffService, DayoffService>()
            .AddScoped<IMeetingService, MeetingService>();
        }
    }
}

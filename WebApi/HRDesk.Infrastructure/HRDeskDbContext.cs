using HRDesk.Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure
{
    public class HRDeskDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Function> Functions { get; set; }
        public DbSet<Office> Offices { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Dayoff> Daysoff { get; set; }
        public DbSet<LeaveRequest> LeaveRequests { get; set; }
        public DbSet<NationalDay> NationalDays { get; set; }
        public DbSet<MeetingRoom> MeetingRooms { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<UserPermission> UserPermissions { get; set; }
        public DbSet<Meeting> Meetings { get; set; }
        public HRDeskDbContext(DbContextOptions<HRDeskDbContext> options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Seed
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 1,
                CreatedDate = new DateTime(2021, 6, 5),
                Description = "Management function",
                Name = "Company manager",
                UpdatedDate = new DateTime(2021, 6, 5),
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 2,
                CreatedDate = new DateTime(2021, 6, 5),
                Description = "Board employee",
                Name = "Board",
                UpdatedDate = new DateTime(2021, 6, 5),
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 3,
                CreatedDate = new DateTime(2021, 6, 5),
                Description = "Human resource employee",
                Name = "Human resource",
                UpdatedDate = new DateTime(2021, 6, 5),
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 4,
                CreatedDate = new DateTime(2021, 6, 5),
                Description = "Project manager employee",
                Name = "Project manager",
                UpdatedDate = new DateTime(2021, 6, 5),
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 5,
                CreatedDate = new DateTime(2021, 6, 5),
                Description = "Developer employee",
                Name = "Developer",
                UpdatedDate = new DateTime(2021, 6, 5),
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 6,
                CreatedDate = new DateTime(2021, 6, 5),
                Description = "Quality assurance employee",
                Name = "Quality assurance",
                UpdatedDate = new DateTime(2021, 6, 5),
            });
            modelBuilder.Entity<Office>().HasData(new Office
            {
                Id = 1,
                CreatedDate = new DateTime(2021, 6, 5),
                Location = "First floor",
                Name = "Management office",
                Number = 1,
                UpdatedDate = new DateTime(2021, 6, 5),
            });

            modelBuilder.Entity<Team>().HasData(new Team
            {
                Id = 1,
                CreatedDate = new DateTime(2021, 6, 5),
                Description = "Management team",
                Name = "Management team",
                UpdatedDate = new DateTime(2021, 6, 5),
            });
            //   "Email" : "administrator@admin.com",
            //"Password" : "administrator"
            modelBuilder.Entity<User>().HasData(new User
            {
                Id = 1,
                CreatedDate = new DateTime(2021, 6, 5),
                IsDeleted = false,
                Address = "Company address",
                CNP = "1980528111111",
                CountryOfBirth = "Romania",
                DateOfBirth = new DateTime(1998, 5, 28),
                DateOfEmployment = new DateTime(2021, 6, 5),
                Email = "administrator@admin.com",
                FirstName = "Andrei Cristian",
                LastName = "Marcu",
                FunctionId = 1,
                NumberOfDaysoff = 20,
                OfficeId = 1,
                Password = "AQAAAAEAACcQAAAAECB47GOoGMZ5MBmFGNmX95ffBJEzfsP/77XSzbcpeS6Oakk3M/CXQ0ul0M2SWn/pzg==",
                Phone = "0749206007",
                Salary = 5000,
                TeamId = 1,
                WorkEmail = "administrator@company.com",
                UpdatedDate = new DateTime(2021, 6, 5),
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 1,
                Name = "Dashboard"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 2,
                Name = "Leave requests"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 3,
                Name = "Daysoff requests"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 4,
                Name = "Reports"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 5,
                Name = "Meetings"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 6,
                Name = "Team"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 7,
                Name = "Holiday calendar"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 8,
                Name = "Book room"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 9,
                Name = "Manage employees"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 10,
                Name = "Manage holidays"
            });

            modelBuilder.Entity<Permission>().HasData(new Permission
            {
                Id = 11,
                Name = "Manage organization"
            });

            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 1,
                UserId = 1,
                PermissionId = 1
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 2,
                UserId = 1,
                PermissionId = 2
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 3,
                UserId = 1,
                PermissionId = 3
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 4,
                UserId = 1,
                PermissionId = 4
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 5,
                UserId = 1,
                PermissionId = 5
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 6,
                UserId = 1,
                PermissionId = 6
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 7,
                UserId = 1,
                PermissionId = 7
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 8,
                UserId = 1,
                PermissionId = 8
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 9,
                UserId = 1,
                PermissionId = 9
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 10,
                UserId = 1,
                PermissionId = 10
            });
            modelBuilder.Entity<UserPermission>().HasData(new UserPermission
            {
                Id = 11,
                UserId = 1,
                PermissionId = 11
            });
            #endregion
        }
    }
}

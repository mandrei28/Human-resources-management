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
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 1,
                CreatedDate = DateTime.Now,
                Description = "Management function",
                IsDeleted = false,
                Name = "Company manager",
                UpdatedDate = DateTime.Now,
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 2,
                CreatedDate = DateTime.Now,
                Description = "Board employee",
                IsDeleted = false,
                Name = "Board",
                UpdatedDate = DateTime.Now,
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 3,
                CreatedDate = DateTime.Now,
                Description = "Human resource employee",
                IsDeleted = false,
                Name = "Human resource",
                UpdatedDate = DateTime.Now,
            });
            modelBuilder.Entity<Function>().HasData(new Function
            {
                Id = 4,
                CreatedDate = DateTime.Now,
                Description = "Project manager employee",
                IsDeleted = false,
                Name = "Project manager",
                UpdatedDate = DateTime.Now,
            });
            modelBuilder.Entity<Team>().HasData(new Team
            {
                Id = 5,
                CreatedDate = DateTime.Now,
                Description = "Developer employee",
                IsDeleted = false,
                Name = "Developer",
                UpdatedDate = DateTime.Now,
            });
            modelBuilder.Entity<Team>().HasData(new Team
            {
                Id = 6,
                CreatedDate = DateTime.Now,
                Description = "Quality assurance employee",
                IsDeleted = false,
                Name = "Quality assurance",
                UpdatedDate = DateTime.Now,
            });
            modelBuilder.Entity<Office>().HasData(new Office
            {
                Id = 1,
                CreatedDate = DateTime.Now,
                IsDeleted = false,
                Location = "First floor",
                Name = "Management office",
                Number = 1,
                UpdatedDate = DateTime.Now,
            });
            //   "Email" : "administrator@admin.com",
            //"Password" : "administrator"
            modelBuilder.Entity<User>().HasData(new User
            {
                Id = 1,
                CreatedDate = DateTime.Now,
                IsDeleted = false,
                Adress = "Company address",
                CNP = "1980528111111",
                CountryOfBirth = "Romania",
                DateOfBirth = new DateTime(1998, 5, 28),
                DateOfEmployment = DateTime.Now,
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
                UpdatedDate = DateTime.Now,
            });
        }
    }
}

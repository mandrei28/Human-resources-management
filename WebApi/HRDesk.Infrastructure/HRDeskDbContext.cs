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
        public HRDeskDbContext(DbContextOptions<HRDeskDbContext> options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}

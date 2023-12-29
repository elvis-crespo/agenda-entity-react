using Diary.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Diary.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<ContactEn> Contacts => Set<ContactEn>();
        public DbSet<DiaryEn> Diary => Set<DiaryEn>();
  
    }
}

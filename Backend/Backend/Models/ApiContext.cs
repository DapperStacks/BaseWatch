using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Backend.Models
{
    public class ApiContext : DbContext
    {
        public virtual DbSet<Messages> Messages { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        public ApiContext(DbContextOptions<ApiContext> options) :
            base(options){ }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Messages>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Messages)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Messages_Users");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .ValueGeneratedNever();
            });
        }
    }
}

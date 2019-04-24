using System;
using Microsoft.EntityFrameworkCore;
using mvc;


// dotnet ef dbcontext scaffold "data source=DESKTOP-3550K4L\HARMONY;database=rfid;user id=sa; password=123" Microsoft.EntityFrameworkCore.SqlServer -o Model -c "RfidContext"
namespace seed
{
    public static class DataSeeding
    {
        public static void AddLieus(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Marque>().HasData(new Marque[]{
                new Marque {Id = 1, Name = "casa blanca"},
            });
        }

        public static void AddRoles(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(new Role[]{
                new Role {Id = 1, Name = "users"},
                new Role {Id = 2, Name = "sa"},
                new Role {Id = 3, Name = "admins"},
            });
        }

        public static void AddSA(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User[]{
                new User
                {
                    Id = 1,
                    FullName = "sa",
                    Email = "sa@angular.io",
                    Password = "123",
                },
            });
        }

        public static void AddUsersRole(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRole>().HasData(new UserRole[]{
                new UserRole { IdRole = 3, IdUser = 1},
            });
        }
    }
}
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
    }
}
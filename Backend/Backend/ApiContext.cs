using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Backend
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) :
            base(options){ }

        public DbSet<Models.Message> Messages { get; set; }
        public DbSet<Models.User> Users { get; set; }
    }
    
    public class UserModel
    {
        [Key]
        public string username { get; set; }
        public string userpw { get; set; }

    }
    
}

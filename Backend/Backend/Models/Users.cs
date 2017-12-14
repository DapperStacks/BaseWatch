using System;
using System.Collections.Generic;

namespace Backend.Models
{
    public partial class Users
    {
        public Users()
        {
            Messages = new HashSet<Messages>();
        }

        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public ICollection<Messages> Messages { get; set; }
    }
}

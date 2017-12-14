using System;
using System.Collections.Generic;

namespace Backend.Models
{
    public partial class Messages
    {
        public string Id { get; set; }
        public string Owner { get; set; }
        public string Text { get; set; }
        public string UserId { get; set; }

        public Users User { get; set; }
    }
}

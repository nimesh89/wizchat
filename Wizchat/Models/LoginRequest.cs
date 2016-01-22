using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wizchat.Models
{
    public class LoginRequest
    {
        public string Name { get; set; }

        public string ConnectionId { get; set; }
    }
}

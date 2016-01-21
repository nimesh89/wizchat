using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wizchat.Models
{
    public class Message
    {
        public Client from { get; set; }
        public Client to { get; set; }
        public string message { get; set; }
    }
}

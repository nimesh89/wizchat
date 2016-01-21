using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace Wizchat.Models
{
    public class Client
    {
        public Client()
        {
            Inbox = new List<Message>();
        }

        public string Name { get; set; }
        public string ConnectionId { get; set; }
        public List<Message> Inbox { get; set; }
    }
}

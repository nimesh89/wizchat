using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wizchat.Hubs
{
    using Microsoft.AspNet.SignalR;

    public class ChatHub : Hub
    {
        public void Send(string to, string from, string message)
        {
            Clients.Client(to).addNewMessage(from, message);
        }
    }
}

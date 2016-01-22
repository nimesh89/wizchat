using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wizchat.Hubs
{
    using Microsoft.AspNet.SignalR;
    using Microsoft.AspNet.SignalR.Hubs;

    using Wizchat.Models;

    public class ChatHub : Hub
    {


        public void Send(string toid, string from, string message)
        {
            Clients.Client(toid).addNewMessage(from, message);
        }

    }
}

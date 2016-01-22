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


        public void Send(string to, string from, string message)
        {
            var connectionid = ClientStore.UserConnectionIDictionary[to];
            var client = ClientStore.ConnectionIdClientDictionary[connectionid];

            var fromclient = ClientStore.ConnectionIdClientDictionary[this.Context.ConnectionId];

            client.Inbox.Add(new Message()
            {
                to = client,
                from = fromclient,
                message = message
            });

            Clients.Client(connectionid).addNewMessage(from, message);
        }

    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Wizchat.Controllers
{
    using Microsoft.AspNet.SignalR;
    using Microsoft.Extensions.DependencyInjection;

    using Wizchat.Hubs;
    using Wizchat.Models;

    [Route("api/[controller]")]
    public class UserController : Controller
    {
        // POST api/values
        [HttpPost]
        public void Post([FromBody]LoginRequest request)
        {
            var context = this.Resolver.GetRequiredService<IHubContext<ChatHub>>();
            ClientStore.AddClient(request.Name, request.ConnectionId);
            var client = context.Clients.Client(ClientStore.AdminClient.ConnectionId);
            client.addUser(request.Name);
        }
    }
}

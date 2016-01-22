using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Wizchat.Controllers
{
    using Wizchat.Models;

    [Route("api/[controller]")]
    public class AdminUserController : Controller
    {
        // POST api/values
        [HttpPost]
        public void Post([FromBody]LoginRequest request)
        {
            ClientStore.AddAdmin(request.ConnectionId);
        }
    }
}

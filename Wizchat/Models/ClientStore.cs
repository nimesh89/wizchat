using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace Wizchat.Models
{
    public class ClientStore
    {
        static ClientStore()
        {
            UserConnectionIDictionary = new Dictionary<string, string>();
            ConnectionIdClientDictionary = new Dictionary<string, Client>();
        }

        public static Dictionary<string, string> UserConnectionIDictionary { get; private set; }
        public static Dictionary<string, Client> ConnectionIdClientDictionary { get; private set; } 
    }
}

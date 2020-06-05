using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaKS_Backend.Models
{
    public class ItemTable
    {
        public Guid ItemID { get; set; }
       
        public string ItemName { get; set; }
        public int ItemQuantity { get; set; }
    }
}

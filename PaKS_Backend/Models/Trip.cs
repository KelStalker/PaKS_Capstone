using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PaKS_Backend.Models
{
    public class TripTable
    {
        public Guid TripID { get; set; }
        [Required]
        public string Destination { get; set; }
        public DateTime DepartDate { get; set; }
        public DateTime ReturnDate { get; set; }
    }

    public class PersonTable
    {
        public Guid PersonID { get; set; }
        [Required]
        public string UserName { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public int TelephoneNumber { get; set; }

    }

    public class ItemTable
    {
        public Guid ItemID { get; set; }
        public string ItemName { get; set; }
        public int ItemQuantity

    }
}

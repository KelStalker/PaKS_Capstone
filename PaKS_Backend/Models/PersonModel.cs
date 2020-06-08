using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PaKS_Backend.Models
{
    public class PersonTable
    {
        public Guid PersonID { get; set; }
        [Required]
        public string UserName { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public int TelephoneNumber { get; set; }
        public ICollection<TripTable> TripsForThisUser { get; set; }
    }
}

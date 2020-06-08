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
        public ICollection<PersonTable> PersonsGoingOnTrip { get; set; }
    }




}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaKS_Backend.Services
{
    public class TripService : ITripService
    {
        // Add Dependencdy Infection on database here
        // Define DB Context (called "_context")

        private readonly ApplicationDbContext _context;
        
        public TripService(ApplicationDbContext context)
        {
            _context = context;
        }
    }

}

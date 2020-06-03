using Microsoft.AspNetCore.Mvc;
using PaKS_Backend.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaKS_Backend.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]

    public class TripController : ControllerBase
    {
        private readonly ITripService _tripService;

        public TripController(ITripService tripService)
        {

        }
    }


   
    {
    }
}

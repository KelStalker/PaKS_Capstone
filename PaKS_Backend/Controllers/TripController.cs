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
        //private readonly ITripService _tripService;

        //public TripController(ITripService tripService)
        { 
        /**
         * <remarks>
         * Method: Get
         * Path: {base)/api/trip
         * Query Parameters: {base}/api/trip/:isGoing
         * </remarks>
         * 
         * <summary>
         * Gets all of the trips from the trip table
         * </summary>
         * 
         * localhost:5000/api/Trip
         */
        [HttpGet]  //31m

        public async Task<IActionResult> GetTrips([FromQuery(Name = "isgoing")] bool isGoing)
        
        {
            return Ok(await _tripService.GetTrips(isGoing));
        }

        /*
         * <remarks>
         * 
         * <summary>
         * 
         */
        [HttpPost]
        public async Task<IActionResult> CreateNewTrip([FromBody] Trip trip)
        // NOTE that 'fromBody' is a keyword is still in the method argument
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            // The following line simply calls the trip Service and adds a new trip
            await _tripService.addTrip(trip);  //need to still build _tripService
            
            return Ok();
        }
        
    }
}

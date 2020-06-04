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
         * Method: GET
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

        /**
         * <remarks>
         * Method: POST
         * Path: {base}/api/trip
         * </remarks>
         * 
         * <summary>
         * Create a brand new trip based on the JSON provided
         * </summary>
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

        /**
         * <remarks>
         * Method: PATCH
         * Path: {base}api/trip/TripID
         * NOTE that the above 'TripID' is in the 'Route' of the method below,
         *   and is required to pass in via the URL being used to access the API
         * </remarks>
         * 
         * <summary>
         * Updates an existing trip as to whether the user is going or not going
         *   - represented as a checkbox/toggle field
         * </summary>
         */

        [HttpPatch]
        public async Task<IActionResult> ToggleTripIsGoingYesNo([FromRoute] Guid TripID)
        {
            try
            {
                await _tripService.ToggleTripIsGoing(TripID);

            } catch (Exception ex)
            {
                return StatusCode(500);  // INTERNAL SERVER ERROR
                //  No 'built in' method in .NET core so this is a way to do so
                //  Returns 500 as we don't want the external clients to know of
                //  the exact exception we have on our backend.  Just a way of saying
                // 'something' went wrong without really saying what went wrong...
            }
        }

        /**
         * <remarks>
         * Method: PUT
         * Path: {base}/api/trip/TripID
         * </remarks>
         * 
         * <summary>
         * Updates an already existing Trip with Brand new data (eg: new flight schedule)
         * Not just marking a trip as going/notgoing (although if you ONLY updated that field
         * it could potentially do so. 
         * </summary>
         */

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateExistingTripFully([FromRoute] Guid TripID, [FromBody] TripController trip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                await _tripService.CompletelyUpdateTrip(trip);
            } catch (Exception ex)
            {
                return StatusCode(500);

            }

            return Ok();
        }

        /**
         * <remarks>
         * method: DELETE
         * Path: {base}/api/trip/:TripID
         * </remarks>
         * 
         * <summary>
         * Delete the trip with the matching ID from the database
         * </summary>
         */
        [HttpDelete("{TripID}")]
        public async Task<IActionResult> DeleteTrip([FromRoute] Guid TripID)
        {
            try
            {
                await _tripService.DeleteTrip(TripID);
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }

            return Ok();
        }

    }
}

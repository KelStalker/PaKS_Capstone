using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaKS_Backend.Services
{
    public interface ITripService
    {
        Task<TripInstance[]> GetTripInstances(bool isChecked);

        Task<bool> AddTrip(TripInstance newTrip);
        Task<bool> UpdateEntireTripInstance(TripInstance newTrip);
        Task<bool> ToggleTripInstanceGoing(Guid id);
        Task<bool> DeleteTripInstance(Guid id);
    }
 }

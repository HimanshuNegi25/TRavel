import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  let itinerary = trip?.tripData?.itinerary;

  // Fix for Firebase returning object instead of array
  if (itinerary && typeof itinerary === 'object' && !Array.isArray(itinerary)) {
    itinerary = Object.values(itinerary);
  }

  if (!Array.isArray(itinerary)) {
    return (
      <div>
        <h2 className='font-bold text-xl mt-10'>Places To Visit</h2>
        <p className='text-gray-500 mt-2'>No itinerary data found.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className='font-bold text-xl mt-10'>Places To Visit</h2>

      <div>
        {itinerary.map((item, index) => (
          <div className='mt-5' key={index}>
            <h2 className='font-medium text-lg'>Day {item.day}</h2>

            <div className='grid md:grid-cols-2 gap-5'>
              {Array.isArray(item.plan) && item.plan.map((place, index) => (
                <div key={index}>
                  <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
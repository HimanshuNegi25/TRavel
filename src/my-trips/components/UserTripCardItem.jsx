import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
    const [PhotoUrl,setPhotoUrl]=useState();
      useEffect(()=>{
        trip&&GetPlacePhoto();
      },[trip])
    
      const GetPlacePhoto=async()=>{
        const data={
          textQuery:trip?.userSelection?.location?.label
        }
        const result = await GetPlaceDetails(data).then(resp=>{
         
    
          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
          setPhotoUrl(PhotoUrl);
        })
      }

  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='rounded-xl p-3 mt-2 gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={PhotoUrl?PhotoUrl: "/placeholder.jpg"} className='object-cover rounded-xl w-[450px] h-[220px]'/>
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem
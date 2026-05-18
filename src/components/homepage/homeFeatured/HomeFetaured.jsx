import { getFeatured } from '@/lib/data-fetch';
import React from 'react';

const HomeFetaured = async() => {
  const featureds = await getFeatured()
  
  return (
    <div>
      <h1>{featureds.length}</h1>
      
      <div>
        
        {
          featureds.map((featured)=>{
              const {appointmentTime, appointmentDate, phoneNumber, gender, patientName, doctorName, userEmail} = featured
            return(
            <div key={featured._id}>
            <h1>{doctorName}</h1>
            <h1>{userEmail}</h1>
            <h1>{gender}</h1>
            </div>
          )})
        }
      </div>
    </div>
  );
};

export default HomeFetaured;
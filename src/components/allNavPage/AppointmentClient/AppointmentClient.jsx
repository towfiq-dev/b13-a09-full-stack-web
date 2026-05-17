import React from 'react';
import AppointmentsCard from '../appointmentsCard/AppointmentsCard';

const AppointmentClient = ({allAppointments}) => {
  
  return (
    <div>
    {
      allAppointments.map((appointment)=>{return(
        <div key={appointment._id}>
          <AppointmentsCard 
          appointment={appointment}/>
        </div>
      )})
    }
    </div>
  );
};

export default AppointmentClient;
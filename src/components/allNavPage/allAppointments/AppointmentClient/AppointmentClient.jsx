import React from 'react';
import AppointmentsCard from '../appointmentsCard/AppointmentsCard';

const AppointmentClient = ({allAppointments}) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
      allAppointments.map((appointment)=>{return(
        <div key={appointment._id} >
          <AppointmentsCard 
          appointment={appointment}/>
        </div>
      )})
    }
    </div>
  );
};

export default AppointmentClient;
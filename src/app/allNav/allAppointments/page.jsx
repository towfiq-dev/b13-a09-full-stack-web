import AppointmentClient from '@/components/allNavPage/allAppointments/AppointmentClient/AppointmentClient';
import { getAppointments } from '@/lib/data-fetch';
import React from 'react';

const AllAppointment = async() => {
  const allAppointments = await getAppointments()
  return (
    <div className='mt-25'>
      AllAppointment
      <h1>{allAppointments.length}</h1>
      <div>
      <AppointmentClient allAppointments={allAppointments}/>
      </div>
    </div>
  );
};

export default AllAppointment;
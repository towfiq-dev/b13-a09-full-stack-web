import React from 'react';
import Delete from '@/components/allNavPage/delete/Delete';
import AppointmentEditModal from '@/components/allNavPage/appointmentEditModal/AppointmentEditModal';
const AppointmentDetails = async({params}) => {
  const {id} = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`)
  const detailsData = await res.json()
  const {appointmentTime, appointmentDate, phoneNumber, gender, patientName, doctorName, userEmail} = detailsData
  return (
    <div className='mt-25'>
      <Delete detailsData={detailsData}/>
      <AppointmentEditModal detailsData={detailsData}/>
      AppointmentDetails
      <h1>{doctorName}</h1>
      <h1>{patientName}</h1>
      <h1>{phoneNumber}</h1>
    </div>
  );
};

export default AppointmentDetails;
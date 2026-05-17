import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const AppointmentsCard = ({appointment}) => {
  const {appointmentTime, appointmentDate, phoneNumber, gender, patientName, doctorName, userEmail} = appointment
  return (
    <div>
      <h1>{doctorName}</h1>
      <p>{patientName}</p>
      <Link href={'/'}>
      <Button>
        See more
      </Button>
      </Link>
    </div>
  );
};

export default AppointmentsCard;
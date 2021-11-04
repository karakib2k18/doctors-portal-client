import React from 'react';
import Navigation from '../../Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default Appointment;
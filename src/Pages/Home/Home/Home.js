import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Services/>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;
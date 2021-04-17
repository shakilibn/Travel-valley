import React from 'react';
import Destinations from '../Destinations/Destinations';
import Header from '../Header/Header';
import Menubar from '../../shared/Menubar/Menubar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../shared/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Guide from '../Guide/Guide';

const Home = () => {
    return (
        <div>
            <Header />
            <Destinations />
            <FeaturedService />
            <Services />
            <Guide />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import About from '../Components/Home/About';
import Hero from '../Components/Home/Hero';
import InfoCards from '../Components/Home/InfoCards';
import News from '../Components/Home/News';
import Navbar from '../Components/Shared/Navbar';
import Stats from '../Components/Home/Stats';
import Faq from '../Components/Home/Faq';
import Reviews from '../Components/Home/Reviews';
import Steps from "../Components/Home/Steps";
import ContactUs from '../Components/Home/ContactUs';

const Home = () => {
    // const value = useContext(AuthContext);
    // console.log(value, ' from home js');
    return (
        <div className="bg-[#f1f1f1]">
            <Navbar />
            <Hero />
            <About />
            <InfoCards />
            <News />
            {/* <Stats /> */}
            <Steps />
            <Faq />
            <ContactUs />
        </div>
    );
};

export default Home;

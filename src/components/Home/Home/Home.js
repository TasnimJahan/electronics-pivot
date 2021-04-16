import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Services/>
            <Review/>
            <FAQ/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
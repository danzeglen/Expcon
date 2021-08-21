import React from 'react';
import Demo from '../sections/Demo';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Reviews from '../sections/Reviews';
import Sound from '../sections/Sound';
import Perks from '../sections/Perks'
import Download from '../sections/Download';

const Home = (props) => {
    return (
        <div>
            <Hero/>
            <Sound/>
            <Demo/>
            <Perks/>
            <Reviews/>
            <Download/>
            <Footer/>
        </div>
    );
}

export default Home;
import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import Awards from './Awards';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return (
        <div>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
           
        </div>
    );
}

export default HomePage;
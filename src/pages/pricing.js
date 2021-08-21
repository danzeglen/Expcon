import React, {useEffect} from 'react';
import Footer from '../sections/Footer';
import PricingMain from '../sections/PricingMain';
import Pricingperks from '../sections/Pricingperks';

const Pricing = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);   
    })
    return (
        <div>
           <PricingMain/>
           <Pricingperks/>
           <Footer/>
        </div>
    );
}

export default Pricing;
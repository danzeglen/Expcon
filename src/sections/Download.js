import React from 'react';
import Hamburger from '../components/Hamburger'
import SecondaryButton from '../components/SecondaryButton';
import MagicRainbowButton from '../components/LiquidButton';
import LiquidButton from '../components/LiquidButton2';
import Pricingperks from './Pricingperks';
import {
    Link
} from "react-router-dom";
const Download = (props) => {
    return (
        <div style={{ height: '80vh', backgroundColor: '#191919' }}>
            <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between' }}>
                <Hamburger textcolor={'#fff'} bcolor={'#1FE1E9'} titlecolor={'black'} />

            </div>
            <div style={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ display: 'flex', justifyContent: 'space-around',flex:1 }}>
                    <div>
                        <h1 style={{color:'#D34848',fontSize:'4rem',margin:'0px'}}>GET EXP|CON NOW</h1>
                        <p style={{color:'white',textAlign:'initial',fontSize:'2rem',margin:'0px'}}>Purchase and download the app.</p>
                    </div>
                    <div style={{ alignSelf: 'center'}}>
                    <Link to={'/pricing'} style={{textDecoration:'none'}}>

                        <MagicRainbowButton>Try it now</MagicRainbowButton>
                    </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Download;
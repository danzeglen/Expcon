import React from 'react';
import Hamburger from '../components/Hamburger'
import SecondaryButton from '../components/SecondaryButton';
import MagicRainbowButton from '../components/LiquidButton';
import LiquidButton from '../components/LiquidButton2';

const Pricingperks = (props) => {
    return (
        <div style={{ height: '100vh', backgroundColor: '#D34848' }}>
            <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between'}}>
                <Hamburger textcolor={'white'} bcolor={'black'} titlecolor={'#D34848'} />
               
            </div>

            <div style={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ flex: 1, padding: '50px' }}>
                    <h1 style={{ color: '#fff', textAlign: 'initial', fontSize: '5rem', margin: '0px', paddingLeft: '80px' }}>PERKS</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                            <div>
                                <h1 style={{ margin: '0px', color: '#fff', textAlign: 'initial',marginBottom:'10px' }}>___</h1>
                            </div>
                            <div>
                                <h1 style={{ margin: '0px', color: '#fff', textAlign: 'initial' }}>Subscription Payment Model</h1>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '1.5rem', color: 'black', textAlign: 'initial' }}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                            <div>
                                <h1 style={{ margin: '0px', color: '#fff', textAlign: 'initial' ,marginBottom:'10px' }}>___</h1>
                            </div>
                            <div>
                                <h1 style={{ margin: '0px', color: '#fff', textAlign: 'initial'  }}>No Fee Cancelation Policy</h1>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '1.5rem', color: 'black', textAlign: 'initial'  }}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                            <div>
                                <h1 style={{ margin: '0px', color: '#fff', textAlign: 'initial',marginBottom:'10px'  }}>___</h1>
                            </div>
                            <div>
                                <h1 style={{ margin: '0px', color: '#fff', textAlign: 'initial'  }}>Subscription Payment Model</h1>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '1.5rem', color: 'black', textAlign: 'initial'  }}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricingperks;
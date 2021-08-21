import React from 'react';
import Hamburger from '../components/Hamburger'
import LiquidButton from '../components/LiquidButton2';
const Payment = (props) => {
    return (
        <div style={{ height: '110vh' }}>
            <Hamburger hcolor={'white'} textcolor={'black'} bcolor={'black'} titlecolor={'#D34848'} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '100px' }}>
                <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ textAlign: 'initial' }}>Payments</h1>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ textAlign: 'initial',fontSize:'1.5rem'  }}>1. Select your plan</p>
                        <div style={{ display: 'flex', width: '500px', justifyContent: 'space-around' }}>
                            <div style={{display:'flex',alignItems: 'center',}}>
                                <input type='radio' name='plan'></input>
                                <p style={{fontWeight:'bold', color:'#D24848',fontSize:'1.5rem'}}>BASIC</p>
                            </div>
                            <div style={{display:'flex',alignItems: 'center',}}>
                                <input type='radio' name='plan'></input>
                                <p style={{fontWeight:'bold',color:'#FFB33F',fontSize:'1.5rem'}}>ADVANCED</p>
                            </div>
                            <div style={{display:'flex',alignItems: 'center',}}> 
                                <input type='radio' name='plan'></input>
                                <p style={{fontWeight:'bold',color:'#1FE1E9',fontSize:'1.5rem'}}>PRO</p>
                            </div>
                            
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                            <p style={{ textAlign: 'initial',fontSize:'1.5rem'  }}>2. Billing Information</p>
                            <form>
                                <div style={{ width: '80%' }}>
                                    <label for="fname" style={{fontSize:'12px', display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>First name</label>
                                    <input  className={"textinput"}type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                </div>
                                <div style={{ width: '80%' }}>
                                    <label for="fname" style={{marginTop:'20px',fontSize:'12px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>Billing Address</label>
                                    <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                </div>
                                <div style={{marginTop:'20px', width: '80%', display: 'flex', justifyContent:'space-between' }}>
                                    <div style={{width:'45%'}}>

                                        <label for="fname" style={{fontSize:'12px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>City</label>
                                        <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                    </div>
                                    <div style={{width:'45%'}}>
                                        <label for="fname" style={{fontSize:'12px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>Postal Code</label>
                                        <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>

                                    </div>
                                </div>
                
                                <div style={{ width: '80%' }}>
                                    <label for="fname" style={{fontSize:'12px',marginTop:'20px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>Country</label>
                                    <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                </div>
                            </form>
                            <div style={{width:'80%',display:'flex',flexDirection:'column'}}>
                            <p style={{textAlign:'initial'}}>By continuing, I acknowledge that I’ve read and agree to the <span style={{color:'#2F1FE9'}}>Terms of Service </span> &  <span style={{color:'#2F1FE9'}}>Privacy Policy</span>.</p>
                            <LiquidButton>Download</LiquidButton>
                            </div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <p style={{ textAlign: 'initial',fontSize:'1.5rem' }}>3. Credit Card Information</p>
                            <form>
                                <div style={{ width: '80%' }}>
                                    <label for="fname" style={{fontSize:'12px', display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>Cardholder's name</label>
                                    <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                </div>
                                <div style={{ width: '80%' }}>
                                    <label for="fname" style={{marginTop:'20px',fontSize:'12px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>Card number</label>
                                    <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                </div>
                                <div style={{marginTop:'20px', width: '80%', display: 'flex', justifyContent:'space-between' }}>
                                    <div style={{width:'45%'}}>

                                        <label for="fname" style={{fontSize:'12px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>Expiry month</label>
                                        <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                    </div>
                                    <div style={{width:'45%'}}>
                                        <label for="fname" style={{fontSize:'12px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>Expiry year</label>
                                        <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>

                                    </div>
                                </div>
                
                                <div style={{ width: '80%' }}>
                                    <label for="fname" style={{fontSize:'12px',marginTop:'20px',  display: 'block', textAlign: 'initial', fontWeight: 'bold' }}>CVV</label>
                                    <input className={"textinput"} type="text" id="fname" name="fname" style={{ width: '100%', height: '30px' }}></input>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Payment;
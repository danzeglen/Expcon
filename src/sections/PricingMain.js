import React from 'react';
import Hamburger from '../components/Hamburger'
import SecondaryButton from '../components/SecondaryButton';
import MagicRainbowButton from '../components/LiquidButton';
import LiquidButton from '../components/LiquidButton2';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {
    Link
} from "react-router-dom";
const PricingMain = (props) => {
    return (
        <div style={{ height: '120vh', backgroundColor: '#191919' }}>
            <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between' }}>
                <Hamburger textcolor={'#fff'} bcolor={'#1FE1E9'} titlecolor={'black'} />

            </div>

            <div style={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ flex: 1, padding: '50px' }}>
                    <h1 style={{ color: '#fff', textAlign: 'initial', fontSize: '5rem', margin: '0px', paddingLeft: '80px' }}>PRICING</h1>
                    <p style={{ color: 'white', textAlign: 'initial', paddingLeft: '80px', fontSize: '2rem' }}>Test out our app today! Choose from three subscription Based payment models.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                            <div>
                                <h1 style={{ margin: '0px', color: '#D34848', textAlign: 'initial', }}>BASIC</h1>

                                <h1 style={{ margin: '0px', color: '#D34848', textAlign: 'initial', marginBottom: '0px' }}>___</h1>
                            </div>
                            <div>
                                <h1 style={{ margin: '0px', color: '#D34848', textAlign: 'initial', marginTop: '20px' }}>MONTHLY</h1>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '1.5rem', color: 'white', textAlign: 'initial' }}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '7rem', color: '#D34848', textAlign: 'initial' }}>$9</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Very good</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Amazing</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Perfect job</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Love this</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>It's so good</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Features</p>
                                </div>
                                <Link to={'./purchase'} style={{ textDecoration: 'none', marginTop:'10px' }}>
                                    <SecondaryButton height={'40px'} width={'200px'} color={'white'} text={'SELECT'} bcolor='#D34848' />
                                </Link>
                            </div>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                            <div>
                                <h1 style={{ margin: '0px', color: '#FFB33F', textAlign: 'initial', }}>PRO</h1>

                                <h1 style={{ margin: '0px', color: '#FFB33F', textAlign: 'initial', marginBottom: '0px' }}>___</h1>
                            </div>
                            <div>
                                <h1 style={{ margin: '0px', color: '#FFB33F', textAlign: 'initial', marginTop: '20px' }}>YEARLY</h1>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '1.5rem', color: 'white', textAlign: 'initial' }}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '7rem', color: '#FFB33F', textAlign: 'initial' }}>$99</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Very good</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Amazing</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Perfect job</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Love this</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>It's so good</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Features</p>
                                </div>
                                <Link to={'./purchase'} style={{ textDecoration: 'none', marginTop:'10px'  }}>
                                    <SecondaryButton height={'40px'} width={'200px'} color={'white'} text={'SELECT'} bcolor='#FFB33F' />
                                </Link>

                            </div>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                            <div>
                                <h1 style={{ margin: '0px', color: '#1FE1E9', textAlign: 'initial', }}>PRO</h1>

                                <h1 style={{ margin: '0px', color: '#1FE1E9', textAlign: 'initial', marginBottom: '0px' }}>___</h1>
                            </div>
                            <div>
                                <h1 style={{ margin: '0px', color: '#1FE1E9', textAlign: 'initial', marginTop: '20px' }}>YEARLY</h1>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '1.5rem', color: 'white', textAlign: 'initial' }}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                            </div>
                            <div>

                                <p style={{ margin: '0px', fontSize: '7rem', color: '#1FE1E9', textAlign: 'initial' }}>$120</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Very good</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Amazing</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Perfect job</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Love this</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>It's so good</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', }}>
                                    <MusicNoteIcon style={{ color: 'white', fontSize: '2rem' }} />
                                    <p style={{ color: 'white', fontSize: '1.5rem', margin: '0px' }}>Features</p>
                                </div>
                                <Link to={'./purchase'} style={{ textDecoration: 'none', marginTop:'10px'  }}>
                                    <SecondaryButton height={'40px'} width={'200px'} color={'white'} text={'SELECT'} bcolor='#1FE1E9' />
                                </Link>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default PricingMain;
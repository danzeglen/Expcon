import React from 'react';
import Hamburger from '../components/Hamburger'
import SecondaryButton from '../components/SecondaryButton';
import Speaker1 from '../sections/assets/Speaker1.png'
import Speaker2 from '../sections/assets/Speaker2.png'
import Stars from '../sections/assets/stars.png'

const Reviews = (props) => {
    return (
        <div style={{ height: '100vh', backgroundColor: '#1FE1E9' }}>
            <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between'}}>
                <Hamburger textcolor={'#fff'} bcolor={'black'} titlecolor={'#1FE1E9'} />
                <div style={{ alignSelf: 'center', paddingRight: '50px', marginTop: '30px' }}>
                    <SecondaryButton height={'40px'} width={'200px'} color={'#1FE1E9'} text={'TRY IT NOW'} />
                </div>
            </div>

            <div style={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{ flex: 1.5, }}>
                    <img src={Speaker2} style={{ width: '100%' }}></img>
                    <img src={Speaker1} style={{ width: '100%' }}></img>

                </div>
                <div style={{flex: 3 }}>
                    <h1 style={{color:'#fff',textAlign:'initial',fontSize:'5rem',margin:'0px'}}>Reviews</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column',width:'300px' }}>
                            <div>

                                <img src={Stars} style={{ width: '50%' }} />
                            </div>
                            <div>
                                <h1 style={{margin:'0px',color:'#fff'}}>ARTIST</h1>
                            </div>
                            <div>

                                <p style={{margin:'0px',fontSize:'1.5rem'}}>"Love it, it's the best. I can't live without it!"</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column',width:'300px' }}>
                            <div>

                                <img src={Stars} style={{ width: '50%' }} />
                            </div>
                            <div>
                                <h1 style={{margin:'0px',color:'#fff'}}>PRODUCER</h1>
                            </div>
                            <div>

                                <p style={{margin:'0px',fontSize:'1.5rem'}}>"Love it, it's the best. I can't live without it!"</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column',width:'300px' }}>
                            <div>

                                <img src={Stars} style={{ width: '50%' }} />
                            </div>
                            <div>
                                <h1 style={{margin:'0px',color:'#fff'}}>MUSIC FAN</h1>
                            </div>
                            <div>

                                <p style={{margin:'0px',fontSize:'1.5rem'}}>"Love it, it's the best. I can't live without it!"</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Reviews;
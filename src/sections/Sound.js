import React, { useState,useEffect } from 'react';
import Hamburger from '../components/Hamburger';
import SecondaryButton from '../components/SecondaryButton';
import speaker from './medium17.png'
import speaker2 from './medium27.png'
import ricky from '../sections/assets/roll.mp3'
import {
    Link
} from "react-router-dom";
import { useSpring, animated } from 'react-spring'


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };



const Sound = (props) => {
    const [playing, toggle] = useAudio(ricky)

    return (
        <div style={{ backgroundColor: '#D34848', height: '100vh', cursor: 'pointer' }}>
            <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between' }}>
                <Hamburger textcolor={'#fff'} bcolor={'black'} titlecolor={'#D34848'} />
                <div style={{ alignSelf: 'center', paddingRight: '50px', marginTop: '30px' }}>
                    <Link to={'./pricing'} style={{ textDecoration: 'none' }}>
                        <SecondaryButton height={'40px'} width={'200px'} color={'#D34848'} text={'TRY IT NOW'} />
                    </Link>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90%' }}>
                <div style={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '90px' }}>
                        <h1 style={{ fontSize: '5rem', margin: '0px', color: 'white' }}>Superior Sound</h1>
                        <h1 style={{ margin: '10px' }}>Experience live versions of your favorite songs</h1>
                        <SecondaryButton height={'70px'} width={'250px'} color={'#D34848'} text={'SEE DEMO'} />

                    </div>
                </div>
                <div style={{ width: '40%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={speaker} style={{ width: '45%', marginBottom: '50px' }} />
                    <img src={speaker2} style={{ width: '45%', marginTop: '80px' }} />
                    <div onClick={toggle} style={{ fontWeight: 'bold', fontSize: '20px', position: 'absolute', marginTop: '20%', border: '2px solid white', borderRadius: '50%', height: '100px', width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>{playing ? "Pause" : "Click me!"}</div>
                </div>
            </div>
        </div>
    );
}

export default Sound;
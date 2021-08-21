import React,{useState, useRef,useEffect} from 'react';
import { Power3, gsap } from 'gsap'
import useRainbow from '../components/LiquidButton'
import NavHero from '../components/NavHero';
import Slider from '../components/Slider';
import Slideshow from '../components/Slideshow'
import MagicRainbowButton from '../components/LiquidButton';
import Hamburger from '../components/Hamburger';
import {
    Link
  } from "react-router-dom";

const Hero = (props) => {
    let title = useRef(null)
    let subtitle = useRef(null)
    const imgs = ['https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']

    useEffect(() => {
        gsap.to(
            title,
            .8,
            {
                opacity: 1,
                y: - 20,
                ease: Power3.easOut
            }
        )
        gsap.to(
            subtitle,
            .8,
            {
                opacity: 1,
                y: - 10,
                ease: Power3.easOut,
                delay: .4
            }
        )
    }, [])
    return (
        <div style={{backgroundColor:'black'}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{zIndex:1, position: 'absolute', width: '100%', marginTop: '10%' }}>
                
                    <h1 ref={el => { title = el }} style={{ opacity: '0', marginBottom: '0px', color: 'white', fontSize: '5rem' }}>Interactive Concert Experience</h1>
                    <h3 ref={el => { subtitle = el }} style={{ opacity: '0', width: '50%', margin: 'auto', color: 'white', fontSize: '2rem', color: 'white' }}>Experience your favorite artists like never before and from the comfort of your own home.</h3>
                    <Link to={'/pricing'}>
                    
                    <MagicRainbowButton>
                        TRY IT NOW
                    </MagicRainbowButton>
                    </Link>
                    
                </div>
            </div>
            <Hamburger textcolor={'#fff'} bcolor={'black'} titlecolor={'#1FE1E9'} />
            <Slideshow slides={imgs}/>
            
        </div>
    );
}

export default Hero;
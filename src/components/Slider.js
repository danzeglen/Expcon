import React, { useState, useEffect, useRef } from 'react';
import { Power3, gsap } from 'gsap'
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import './slider.css'





const Slider = ({ imgs }) => {
    const [showingImage, setShowingImage] = useState(0);
    let title = useRef(null)
    let subtitle = useRef(null)
    const from = imgs[showingImage];
    const to = imgs[(showingImage + 1)];
    const transition = GLTransitions[12];
    const progress = (1)



    useEffect(() => {
        const interval = setInterval(() => {
            let index = showingImage + 1
            if (index > imgs.length - 1) {
                setShowingImage(0)
            } else {
                setShowingImage(index)
            }
        }, 8000)
        return () => clearInterval(interval);

    }, [showingImage])

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
        <div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{zIndex:1, position: 'absolute', width: '100%', marginTop: '10%' }}>
                    <h1 ref={el => { title = el }} style={{ opacity: '0', marginBottom: '0px', color: 'white', fontSize: '5rem' }}>Interactive Concert Experience</h1>
                    <h3 ref={el => { subtitle = el }} style={{ opacity: '0', width: '50%', margin: 'auto', color: 'white', fontSize: '2rem', color: 'white' }}>Experience your favorite artists like never before and from the comfort of your own home.</h3>
                    <button>Try it now</button>
                </div>
            </div>



            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{zIndex:1, position: 'absolute', marginTop: '95vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {imgs.map((item, index) => {
                            if (showingImage == index) {
                                return (
                                    <div className='dot' />
                                )
                            } else {
                                return (
                                    <div onClick={() => setShowingImage(index)} className='dots' />
                                )
                            }
                        })}
                    </div>
                </div>

            </div>
            <Surface width={1500} height={800}>
                {progress > 0 ?
                <GLTransition
                    from={imgs[showingImage]}
                    to={imgs[showingImage + 1]}
                    progress={progress}
                    transition={transition}
                />
                :<LinearCopy>{imgs[showingImage]}</LinearCopy>}
            </Surface>
            
        </div>
    );
}

export default Slider;
import React, { useState, useEffect, useRef } from "react";
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import timeLoop from "./timeLoop.js";
import useWindowSize from './hooks/useWindow'
import Hero1 from '../sections/assets/Hero1.png'
import Hero2 from '../sections/assets/Hero2.png'
import Hero3 from '../sections/assets/Hero3.png'

const images = [Hero1, Hero2, Hero3]


const Slideshow = timeLoop(({ slides, time }) => {

    const index = Math.floor(time / (2000 + 4000));
    const from = slides[index % slides.length];
    const to = slides[(index + 1) % slides.length];
    const transition = GLTransitions[32];
    const total = 2000 + 4000;
    const progress = (time - index * total - 2000) / 2000;


    return progress > 0
        ?
        <GLTransition
            from={from}
            to={to}
            progress={progress}
            transition={transition}
        />

        : <LinearCopy>{from}</LinearCopy>;
});

export default () => {
    const [showingImage, setShowingImage] = useState(0);
    let size = useWindowSize()

    return (
        <Surface width={size.width} height={800}>
            <Slideshow slides={images} delay={2000} duration={6000} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{zIndex:1, position: 'absolute', marginTop: '95vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {images.map((item, index) => {
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
        </Surface>
    )

};
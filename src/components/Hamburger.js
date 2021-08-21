import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { IconButton } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
import Menu from '@material-ui/icons/Menu';

const Hamburger = ({ bcolor, textcolor, hcolor, titlecolor }) => {
    const [isopen, setIsOpen] = useState(false)
    console.log(isopen)
    const props = useSpring({
        to: { opacity: isopen ? 1 : 1, width: isopen ? '400px' : '0px', height: isopen ? '300px' : '0px', backgroundColor: bcolor },
        from: {
            opacity: isopen ? 1 : 1,
            position: 'absolute', zIndex: 1,
            width: isopen ? '0px' : '400px',
            backgroundColor: 'rgb(255, 255, 255,0)',
            height: isopen ? '0px' : '300px', borderTopRightRadius: '130px', borderBottomRightRadius: '160px', borderBottomLeftRadius: '180px'
        },
        delay: 200,
    })

    const props2 = useSpring({
        delay: isopen ? 300 : 0,
        from: {
            opacity: isopen ? 0 : 1
        },
        to: {
            opacity: isopen ? 1 : 0
        }
    })

    const props3 = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 10
    })

    function hoverTextEnter(e) {
        e.target.style.color = titlecolor;
    }
    function hoverTextLeave(e) {
        if (hcolor) {
            e.target.style.color = hcolor;

        } else {
            e.target.style.color = textcolor;
        }
    }

    return (
        <animated.div style={props3}>
            <animated.div style={props} onMouseLeave={() => setIsOpen(false)}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <IconButton onClick={() => setIsOpen(!isopen)} aria-label="delete">
                            {isopen ?
                                <Menu style={{ color: titlecolor, fontSize: '50px', }} />
                                : <Menu style={{ color: textcolor, fontSize: '50px', }} />}
                        </IconButton>
                        {isopen ?
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <h1 style={{ color: titlecolor }}>EXP|CON</h1>
                            </Link>
                            : <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <h1 style={{ color: textcolor }}>EXP|CON</h1>
                            </Link>
                        }
                    </div>
                    <animated.div style={props2}>
                        <a onClick={console.log('yo')} onMouseEnter={hoverTextEnter} onMouseLeave={hoverTextLeave}>
                            <h1 style={{ margin: '5px', color: hcolor ? hcolor : textcolor, cursor: 'pointer' }}>WHAT IS IT</h1>
                        </a>
                    </animated.div>
                    <animated.div style={props2} >
                        <a onMouseEnter={hoverTextEnter} onMouseLeave={hoverTextLeave}>

                            <h1 style={{ margin: '5px', color: hcolor ? hcolor : textcolor, cursor: 'pointer' }}>PERKS</h1>
                        </a>
                    </animated.div>
                    <animated.div style={props2} >
                        <Link to='/pricing' style={{ textDecoration: 'none' }}>
                            <a onMouseEnter={hoverTextEnter} onMouseLeave={hoverTextLeave}>
                                <h1 style={{ margin: '5px', color: hcolor ? hcolor : textcolor, cursor: 'pointer' }}>PRICING</h1>
                            </a>
                        </Link>
                    </animated.div>
                </div>
            </animated.div>
        </animated.div>
    );
}

export default Hamburger;
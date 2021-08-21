import React, {useState} from 'react';
import './button.css'

const SecondaryButton = ({width, height, color, text,bcolor}) => {
    const [ishovered, setIsHovered] = useState(color);
    function hoverTextEnter(e) {
        setIsHovered('#fff')
        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }
    function hoverTextLeave(e) {
        setIsHovered(color)

    }

    return (

        <button className="button" onMouseEnter={hoverTextEnter} onMouseLeave={hoverTextLeave} style={{height: height, width: width, backgroundColor: bcolor || 'white'}}>
            <span  style={{color:ishovered}}>{text}</span>
        </button>
    );
}

export default SecondaryButton;
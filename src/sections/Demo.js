import React, { useEffect, useRef } from 'react';
import Hamburger from '../components/Hamburger';
import styled from 'styled-components'
import useWindowSize from '../components/hooks/useWindow'
import SecondaryButton from '../components/SecondaryButton';
import Reveal from '../sections/assets/Reveal.png'
import {
    Link
} from "react-router-dom";
const Demo = (props) => {
    let canvas = useRef(null)
    const size = useWindowSize();


    useEffect(() => {
        console.log('RAN')
        let renderingElement = canvas.current
        let drawingElement = renderingElement.cloneNode();
        let offset = document.documentElement.clientHeight * 2;
        let drawingCtx = drawingElement.getContext('2d');
        let renderingCtx = renderingElement.getContext('2d');

        let lastX
        let lastY


        let moving = false

        renderingCtx.fillStyle = '#FFB33F'
        renderingCtx.fillRect(0, 0, size.width, size.height)

        function drawCircle(obj) {
            obj.ctx.beginPath();
            obj.ctx.arc(obj.x, obj.y, obj.radius, 0, 2 * Math.PI, false);
            if (obj.fill) {
                obj.ctx.fillStyle = obj.fill;
                obj.ctx.fill();
            }
            if (obj.stroke) {
                obj.ctx.lineWidth = obj.strokeWidth;
                obj.ctx.strokeStype = obj.stroke;
                obj.ctx.stroke();
            }
        }
        drawCircle({
            ctx: drawingCtx,
            x: 500,
            y: 300,
            radius: 150,
            fill: "rgba(0,0,0,.2)",
        });
        drawCircle({
            ctx: drawingCtx,
            x: 1350,
            y: 750,
            radius: 250,
            fill: "rgba(0,0,0,.2)",
        });
        drawCircle({
            ctx: drawingCtx,
            x: 400,
            y: 500,
            radius: 160,
            fill: "rgba(0,0,0,.2)",
        });



        renderingElement.addEventListener("mouseover", ev => {
            moving = true
            lastX = ev.pageX - renderingElement.offsetLeft
            lastY = ev.pageY - offset
        })

        renderingElement.addEventListener("click", ev => {
            moving = true
            lastX = ev.pageX - renderingElement.offsetLeft
            lastY = ev.pageY - offset
        })

        renderingElement.addEventListener("mouseup", ev => {
            moving = false
            lastX = ev.pageX - renderingElement.offsetLeft
            lastY = ev.pageY - offset
        })

        renderingElement.addEventListener("mousemove", ev => {
            if (moving) {

                drawingCtx.globalCompositeOperation = "source-over"
                renderingCtx.globalCompositeOperation = "destination-out"
                let currentX = ev.pageX - renderingElement.offsetLeft
                let currentY = ev.pageY - offset
                console.log(currentY)
                drawingCtx.lineJoin = "round"
                drawingCtx.moveTo(lastX, lastY)
                drawingCtx.lineTo(currentX, currentY)
                drawingCtx.closePath()
                drawingCtx.lineWidth = 220
                drawingCtx.stroke()
                lastX = currentX
                lastY = currentY
                renderingCtx.drawImage(drawingElement, 0, 0)
            }
        })

    }, [canvas])

    function hoverTextEnter(e) {
        e.target.style.backgroundColor = '#f5f5f5'
        

    }
    function hoverTextLeave(e) {
        e.target.style.backgroundColor = 'white'

    }

    const img = Reveal

    return (
        <div style={{ height: '100vh', backgroundColor: '#FFB33F' }}>
                <Hamburger textcolor={'#fff'} bcolor={'black'} titlecolor={'#FFB33F'} />
                <div style={{marginLeft:'85%',paddingTop:'20px'}}>
                <Link to={'/pricing'} style={{textDecoration:'none'}}>
                <SecondaryButton height={'40px'} width={'200px'} color={'#FFB33F'} text={'TRY IT NOW'}/>
                </Link>
                </div>

            <Banner>
                <Image>
                    <img src={img} height={size.height} width={size.width} style={{objectFit:'cover', objectPosition:'right bottom'}} />
                </Image>
                <Canvas ref={canvas} height={size.height} width={size.width} />
                <BannerTitle>
                    <Headline>FRONT ROW SEATS</Headline>
                    <SubHeadline>Experience concerts up close and personal</SubHeadline>
                    <button onMouseEnter={hoverTextEnter} onMouseLeave={hoverTextLeave} style={{marginRight:'500px', color:'#FFB33F',backgroundColor:'#fff',border:'none',width:'200px',height:'60px', borderRadius:'40px',fontSize:'1.5rem', marginTop:'10px', cursor:'pointer'}}>SEE DEMO</button>

                </BannerTitle>
            </Banner>


        </div>
    );
}

const Banner = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;

`
const Image = styled.div`
    height: 100vh;
    width: 100%;
    img {
        object-fit: center
    }

`
const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`
const BannerTitle = styled.h1`
    position: absolute;
    bottom: 50vh;
    left 45vw;
    width: 700px;
   

`
const Headline = styled.span`
    display: block;
    font-size: 4rem;
    font-weight: 600;
    line-height: .76;
    color: white;
    text-align: start;
   

`
const SubHeadline = styled.span`
    display: block;
    font-size: 4rem;
    font-weight: 300;
    line-height: .76;
    color: black;
    width: 600px;
    text-align: start;

   

`

export default Demo;
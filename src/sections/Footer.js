import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
const Footer = (props) => {
    return (
        <div style={{height:'40vh',backgroundColor:'#5E33D1',display:'flex',flexDirection:'column',justifyContent:'flex-end',paddingLeft:'50px',alignItems: 'center',}}>
            <div style={{display:'flex', alignItems: 'center',width:'100%'}}>
            <MailIcon style={{color:'white',paddingRight:'10px'}}/> 
            <p style={{color:'white',textAlign:'initial'}}>support@experienceconcerts.com</p>
            </div>
            <h1 style={{color:'white'}}>EXP|CON</h1>
            <p style={{color:'white'}}> 2019 © All Rights Reserved | Speer Technologies Incorporated</p>
            
        </div>
    );
}

export default Footer;
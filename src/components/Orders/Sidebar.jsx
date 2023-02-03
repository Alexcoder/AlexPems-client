import React from 'react';
import "./Orders.css";
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => { 
    const homePage = () =>{
        navigate("/")
    }
    
    const navigate = useNavigate();
  return (
    <div className="order-side-bar-container">
        <div className="order-side-bar">
            <div className='order-sidebar-icon' onClick={homePage} ><HomeIcon sx={{fontSize:"2rem"}}/> <div style={{fontSize:"0.63rem"}}>Home</div></div>
            <div className='order-sidebar-icon' onClick={homePage} ><LocalShippingIcon sx={{fontSize:"2rem"}}/> <div style={{fontSize:"0.63rem"}}>Cargo <br/> Manifest</div></div>
            <div className='order-sidebar-icon' onClick={homePage} ><BuildIcon sx={{fontSize:"2rem"}}/> <div style={{fontSize:"0.63rem"}}>Equipment<br/>& Tools</div></div>
        </div>
    </div>
  )
}

export default Sidebar
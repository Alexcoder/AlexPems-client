import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"15rem"}} className="order-nav-bar">
        <div >My-Pems</div>
        <div>PERSONNEL & EQUIPMENT MANAGEMENT SYSTEM (PEMS)</div>
        <div style={{justifyContent:"flex-end", display:"flex", gap:"1rem"}}>
          <div>Geople<span style={{color:"red"}}>x</span></div>
          <div>ALEX AGBO</div>
          <div><KeyboardArrowDownIcon/></div>
        </div>
    </div>
  )
}

export default Navbar
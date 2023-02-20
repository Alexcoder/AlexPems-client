import React from 'react';
import Category from './Category';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dummyApi } from '../Orders/mainObject';
import "../AllCss/Home.css";

import { useGlobalState } from '../../state/Context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { menuClicked, setMenuClicked } = useGlobalState();
  const navigate = useNavigate();
  console.log(menuClicked);

  return (
    <div className='home-container' onClick={()=> setMenuClicked(menuClicked==="open"? "close": "open")}>
            <div style={{display:"flex",}}>
            <div className="home-top-menu" onClick={()=> setMenuClicked("open")} >
               <div><MailOutlineIcon/><span style={{background:"green", color:"white", borderRadius:"50%", padding:"0.1rem 0.5rem 0.2rem 0.5rem", position:"absolute",fontSize:"0.8rem", margin:"-0.7rem 0rem 0rem -0.5rem"}}>6</span></div>
               <div className='home-my-pems'>
                 My-pem<span style={{color:"red"}}>s</span>
               </div>
               <div style={{display:"flex", gap:"0.2rem"}}>
                   ALEX IFEANYI 
                  <div className='mui-arrow-down'>
                    <KeyboardArrowDownIcon />
                  </div>
              </div>
            </div>
            {menuClicked==="open"
            ?
            <div className='home-drop-down-list'>
               <div>Self Service Portal</div>
               <div>Change Password</div>
               <div>PEMS Videos</div>
               <div>IT Helpdesk</div>
               <div>IT Helpdesk</div>
               <div>Logout </div>
            </div>
            : null
            }
            </div>

            <div style={{margin:"3rem 0rem 4rem 0rem"}}>
               <div className="home-geoplex-text">Geople<span style={{color:"red"}}>x</span></div>
            </div>
            <div className="home-personnel" >
                PERSONNEL & EQUIPMENT MANAGEMENT SYSTEM <br/> 
               <span className="home-mpems" style={{fontSize:"1.3rem", fontWeight:"400"}}>(MPEMS)</span>
            </div>

            <div className="home-tabs">
              <div onClick={()=> navigate("/orders")} style={{background:"green", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={dummyApi.length} type={"Request And Orders"} delivered={21} ICON={<ShoppingCartIcon sx={{fontSize:"3rem"}}/>} /></div> 
              <div style={{background:"brown", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={276} type={"Cargo Manifest"} delivered={28} ICON={<LocalShippingIcon sx={{fontSize:"3rem"}}/>} /></div> 
              <div style={{background:"yellow", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={79} type={"Facility"} delivered={21} /></div> 
              <div style={{background:"orange", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={95} type={"Fund Retirement"} delivered={90} /></div> 
              <div style={{background:"purple", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={1367} type={"Incident Reporting/AAR"} delivered={74} /></div> 
              <div style={{background:"gray", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={976} type={"Jobs"} delivered={7} /></div> 
              <div style={{background:"pink", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={26} type={"Kpi Summary"} delivered={21} /></div> 
              <div style={{background:"violet", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={654} type={"Logistics"} delivered={21} /></div> 
              <div style={{background:"skyblue", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={986} type={"Meeting Records"} delivered={21} /></div> 
              <div style={{background:"blue", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={975} type={"Online Academy"} delivered={21} /></div> 
              <div style={{background:"green", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={8954} type={"Personnel Records"} delivered={21} /></div> 
              <div style={{background:"green", borderRadius:"0.2rem", border:"0.1px solid white"}}><Category total={435} type={"QMS Documentations"} delivered={21} /></div> 
            </div>

    </div>
  )
}

export default Home
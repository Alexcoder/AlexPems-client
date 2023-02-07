import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import "../AllCss/MainPage.css";



const MiniNav = () => {
  return (
    <div>
          <section className='mini-nav'>
             <div>My Request & Orders</div>
             <div>All Request & Orders</div>
             <div>Add New Orders</div>
             <div>Material Request Search</div>
             <div>Cash Request Search</div>
             <div>Finance Summary</div>
             <div style={{display:"flex"}}><HomeIcon/> <div>Dashboard</div></div>
          </section>
          <hr style={{border:"0.5px solid lightgray"}}/>

    </div>
  )
}

export default MiniNav;
import React from 'react'
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import Navbar from './Navbar';
import MiniNav from './MiniNav';
import "../AllCss/Orders.css";

const Orders = () => {

  return (
    <div className='orders-container'>
      <div style={{display:"flex"}}>
         <Sidebar/>
          <div style={{display: "flex", flexDirection:"column"}}>
            <Navbar/>
            <MiniNav/>
            <MainPage/>
          </div>
      </div>
    </div>
  )
}

export default Orders;
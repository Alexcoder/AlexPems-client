import React from 'react'
// import Sidebar from './Sidebar';
import MainPage from './MainPage';
// import Navbar from './Navbar';
import MiniNav from './MiniNav';
import "../AllCss/Orders.css";

const Orders = () => {

  return (
    <div className='orders-container'>
            <MiniNav/>
            <MainPage/>
    </div>
  )
}

export default Orders;
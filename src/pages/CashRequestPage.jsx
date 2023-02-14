import Sidebar from '../components/Orders/Sidebar';
import Navbar from '../components/Orders/Navbar';
import CashRequest from '../components/CashRequest/CashRequest';
import MiniNav from '../components/Orders/MiniNav';
import "../components/AllCss/Orders.css";

const CashRequestPage = () => {
  return (
    <div className='orders-container'>
      <div style={{display:"flex"}}>
         <Sidebar/>
          <div style={{display: "flex", flexDirection:"column"}}>
            <Navbar/>
            <MiniNav/>
            <CashRequest/>
          </div>
      </div>
    </div>
  )
}

export default CashRequestPage;
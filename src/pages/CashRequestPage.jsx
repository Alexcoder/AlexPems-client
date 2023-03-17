import Sidebar from '../components/Orders/Sidebar';
import Navbar from '../components/Orders/Navbar';
import CashRequest from '../components/CashRequest/CashRequest';
import MiniNav from '../components/Orders/MiniNav';
import "../components/AllCss/Orders.css";

const CashRequestPage = () => {
  return (
    <div className='orders-container'>
          <div style={{}}>
            <Navbar/>
            <MiniNav/>
            <CashRequest/>
          </div>
         <Sidebar/>
    </div>
  )
}

export default CashRequestPage;
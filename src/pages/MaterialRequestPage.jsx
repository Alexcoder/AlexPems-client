import Navbar from '../components/Orders/Navbar';
import MaterialRequest from '../components/MaterialRequest/MaterialRequest';
import MiniNav from '../components/Orders/MiniNav';
import "../components/AllCss/Orders.css";

const MaterialRequestPage = () => {
  return (
    <div className='orders-container'>
            <Navbar/>
            <MiniNav/>
            <MaterialRequest/>
    </div>
  )
}

export default MaterialRequestPage;
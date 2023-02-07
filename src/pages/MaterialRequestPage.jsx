import Sidebar from '../components/Orders/Sidebar';
import Navbar from '../components/Orders/Navbar';
import MaterialRequest from '../components/MaterialRequest/MaterialRequest';
import MiniNav from '../components/Orders/MiniNav';
import "../components/AllCss/Orders.css";

const MaterialRequestPage = () => {
  return (
    <div className='orders-container'>
      <div style={{display:"flex"}}>
         <Sidebar/>
          <div style={{display: "flex", flexDirection:"column"}}>
            <Navbar/>
            <MiniNav/>
            <MaterialRequest/>
          </div>
      </div>
    </div>
  )
}

export default MaterialRequestPage;
import { Route, Routes, useLocation} from "react-router-dom";
// import { useGlobalState } from "./state/Context";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Sidebar from "./components/Orders/Sidebar";
import MaterialRequestPage from "./pages/MaterialRequestPage";
import CashRequestPage from "./pages/CashRequestPage";

import './App.css';
import Navbar from "./components/Orders/Navbar";

function App() { 
  // const { setMenuClicked } =useGlobalState()
  const location = useLocation()
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/material-request" element={<MaterialRequestPage/>}/>
        <Route path="/cash-request" element={<CashRequestPage/>}/>
      </Routes>
     {location.pathname!=="/" && <Navbar/>}
     { location.pathname!=="/" && <Sidebar/>} 
    </div>
  );
}

export default App;

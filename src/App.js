import { Route, Routes } from "react-router-dom";
// import { useGlobalState } from "./state/Context";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import MaterialRequestPage from "./pages/MaterialRequestPage";

import './App.css';

function App() {
  // const { setMenuClicked } =useGlobalState()
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/request" element={<MaterialRequestPage/>}/>
      </Routes>

    </div>
  );
}

export default App;

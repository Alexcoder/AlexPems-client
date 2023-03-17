import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../AllCss/Navbar.css"

const Navbar = () => {
  return (
    <div  className="order-nav-bar">
        <div >My-Pems</div>
        <div>PERSONNEL & EQUIPMENT MANAGEMENT SYSTEM (PEMS)</div>
        <div style={{justifyContent:"flex-end", display:"flex", gap:"1rem"}}>
          <div>Geople<span style={{color:"red"}}>x</span></div>
          <div>ALEX AGBO</div>
          <div><KeyboardArrowDownIcon/></div>
        </div>
    </div>
  )
}

export default Navbar
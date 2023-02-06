import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import { dummyApi } from './mainObject';

import "./MainPage.css";


const MainPage = () => {
  return (
    <main>
       <div>
          <section className='main-title'>
             <div>My Request & Orders</div>
             <div>All Request & Orders</div>
             <div>Add New Orders</div>
             <div>Material Request Search</div>
             <div>Cash Request Search</div>
             <div>Finance Summary</div>
             <div style={{display:"flex"}}><HomeIcon/> <div>Dashboard</div></div>
          </section>
          <hr/>
          <section style={{border:"0.5px solid lightgray",margin:"0rem 1.5rem", padding:"1rem 1rem 1rem 1rem", }}>
             <div style={{fontSize:"1.2rem", marginBottom:"1rem"}}>Requests & Orders Summary</div>
             <hr style={{border:"1.3px solid lightgray", marginBottom:"1rem"}}/> 
             <div style={{display:"flex", gap:"1rem", justifyContent:"center", color:"white"}}>
                <div className="main-click-button-group bg-blue"><AddIcon sx={{fontWeight:"700"}}/><div>Add New Material Request</div></div>
                <div className="main-click-button-group bg-skyblue" ><AddIcon sx={{fontWeight:"700"}}/><div>Add New Cash Request</div></div>
                <div className="main-click-button-group bg-orange"><AddIcon sx={{fontWeight:"700"}}/><div>Add Equipment Fuel Request</div></div>
                <div className="main-click-button-group bg-red" ><AddIcon sx={{fontWeight:"700"}}/><div>Add Vehicle Fuel Request</div></div>            
             </div>
          <section style={{display:"flex", justifyContent:"space-between", margin:"1rem 0rem 0.5rem 0rem"}}>
             <div style={{border:"0.5px solid lightgray", padding:"0.3rem 1rem", borderRadius:"0.2rem",color:"gray"}}>Excel</div>
             <div><span>Search</span>: <input style={{border:"2px solid gray", padding:"0.3rem",}}/></div>
          </section>
          <section >
             <div style={{maxWidth:"69rem",overflow:"auto", fontSize:"0.9rem"}}>
               <div style={{display:"flex", color:"blue", fontWeight:"600"}}>
                <div className="main-req-header1" style={{minWidth:"1rem"}} >#</div>
                <div className="main-req-header1">Job Details</div>
                <div className="main-req-header1" style={{minWidth:"8rem"}}>Request ID</div>
                <div className="main-req-header1">Request Date</div>
                <div className="main-req-header1">Requestor</div>
                <div className="main-req-header1">Description</div>
                <div className="main-req-header1">Department</div>
                <div className="main-req-header1">Amount</div>
                <div className="main-req-header1">HOD Request Approval</div>
                <div className="main-req-header1">Store Availability</div>
                <div className="main-req-header1">Procurement Update</div>
                <div className="main-req-header1">HOD Pricing Approval</div>
                <div className="main-req-header1">GMO Approval</div>
                <div className="main-req-header1">BU Head Approval</div>
                <div className="main-req-header1">Director Approval</div>
                <div className="main-req-header1">Payment Status</div>
                <div className="main-req-header1">Status</div>
             </div>
             <section>
             {
              dummyApi.map((item)=>
              
             <div key={item.id} style={{display:"flex"}}>
                <div className="main-req-header-1rem bg-orange">{item.number}</div>
                <div className="main-req-header-5rem bg-orange">{item.jobDetail}</div>
                <div className="main-req-header-8rem bg-orange">{item.requestId}</div>
                <div className="main-req-header-5rem bg-orange">{item.requestDate}</div>
                <div className="main-req-header-5rem bg-orange">{item.requestor}</div>
                <div className="main-req-header-5rem bg-orange swire-start">{item.description}<br/>
                    <button className='main-detail-button'>
                      Details
                    </button>
                </div>
                <div className="main-req-header-5rem bg-orange">{item.department}</div>
                <div className="main-req-header-5rem bg-orange">{item.amount}</div>
                <div className="main-req-header-5rem bg-orange">{item.hodApproval} <br/> by <br/>{item.hodName} <br/> on {item.hodApprovalDate} <br/>
                <button className='main-detail-button'>
                      Aprove
                </button>
                </div>
                <div className="main-req-header-5rem bg-orange">{item.storeAvailability} <br/> by <br/> {item.storeKeeper} <br/> on <br/>{item.storeVerificationDate} <br/>
                <button className='main-detail-button'>
                      Verify
                </button>
                </div>
                <div className="main-req-header-5rem bg-orange">{item.procurementUpdate}<br/>
                <button className='main-detail-button'>
                      Update
                </button>
                </div>
                <div className="main-req-header-5rem bg-orange">{item.hodPricingApproval}</div>
                <div className="main-req-header-5rem bg-orange">{item.gmoApproval}</div>
                <div className="main-req-header-5rem bg-orange">{item.buHeadApproval}</div>
                <div className="main-req-header-5rem bg-orange">{item.directorApproval}</div>
                <div className="main-req-header-5rem bg-orange">{item.paymentStatus}</div>
                <div className="main-req-header-5rem bg-orange">{item.status}</div>
             </div>
            )
          }
          </section>
            
             </div>
          </section>
          </section>
       </div>
    </main>
  )
}

export default MainPage
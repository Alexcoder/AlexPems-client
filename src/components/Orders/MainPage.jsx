import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { dummyApi } from './mainObject';
import Pagination from '../Pagination/Pagination';
import { useGlobalState } from '../../state/Context';
import { useNavigate } from 'react-router-dom';

import "../AllCss/MainPage.css";


const MainPage = () => {
   const navigate = useNavigate();
   const {setSelected, search, setSearch}= useGlobalState();
   const [currentPage, setCurrentPage]= useState(1)
   const postsPerPage = 5;

   const filtereddummyApi = dummyApi.filter((item)=>
    Object.entries(search).every(([key,value])=>
      item[key].includes(value) || item[key].toLowerCase().includes(value)
   ))

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentdummyApi = filtereddummyApi.slice( indexOfFirstPost, indexOfLastPost );
   const myTotalPage = Math.ceil(filtereddummyApi.length/postsPerPage);

   // Change Page
   const paginate = (number)=> setCurrentPage(number)

   const handleChange =(e)=>{
      const name= e.target.name;
      const value= e.target.value;
      setSearch( {...search, [name] : value } )
   }

   const handleNext=()=>{
      if(currentPage< myTotalPage){
         setCurrentPage(currentPage+1)
         setSelected(currentPage)
      }else{
         // setCurrentPage(1)
         // setSelected(0)
         setCurrentPage(myTotalPage) //Remains At Last Page
         setSelected(myTotalPage-1)
      }
   }

   const handlePrevious=()=>{
      if(currentPage> 1){
         setCurrentPage(currentPage-1)
         setSelected(currentPage-2)
      }else{
         // setCurrentPage(myTotalPage)
         setCurrentPage(1) //Remains At First Page
         setSelected(0)
      }
   }

   

   return (
    <main>
      <div>
          <section style={{border:"0.5px solid lightgray",margin:"0rem 1.5rem", padding:"1rem 1rem 1rem 1rem", }}>
             <div style={{fontSize:"1.2rem", marginBottom:"1rem"}}>Requests & Orders Summary</div>
             <hr style={{border:"1.3px solid lightgray", marginBottom:"1rem"}}/> 
             <div style={{display:"flex", gap:"1rem", justifyContent:"center", color:"white"}}>
                <div onClick={()=> navigate("/request")} className="main-click-button-group bg-blue"><AddIcon sx={{fontWeight:"700"}}/><div>Add New Material Request</div></div>
                <div className="main-click-button-group bg-skyblue" ><AddIcon sx={{fontWeight:"700"}}/><div>Add New Cash Request</div></div>
                <div className="main-click-button-group bg-orange"><AddIcon sx={{fontWeight:"700"}}/><div>Add Equipment Fuel Request</div></div>
                <div className="main-click-button-group bg-red" ><AddIcon sx={{fontWeight:"700"}}/><div>Add Vehicle Fuel Request</div></div>            
             </div>
          <section style={{display:"flex", justifyContent:"space-between", margin:"1rem 0rem 0.5rem 0rem"}}>
             <div style={{border:"0.5px solid lightgray", padding:"0.3rem 1rem", borderRadius:"0.2rem",color:"gray"}}>Excel</div>
             <div><span>Search</span>: <input name="description" value={search.description} onChange={handleChange} style={{border:"2px solid gray", padding:"0.3rem",}}/></div>
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
              currentdummyApi.map((item)=>
              
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
          <div style={{margin:"1rem", display:"flex", alignItems:"center", gap:"1rem", cursor:"pointer"}}>
            <div onClick={handlePrevious}>Previous</div>
           <Pagination 
             postsPerPage={postsPerPage} 
             totalPosts={filtereddummyApi.length}
             paginate={paginate}
             />
             <div onClick={handleNext}>Next</div>
          </div>

            
             </div>
          </section>
          </section>
       </div>
    </main>
  )
}

export default MainPage
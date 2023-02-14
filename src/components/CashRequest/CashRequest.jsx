import React, {useState} from 'react';
import CloseIcon from "@mui/icons-material/Close"
import {SelectProp, InputProp,TextAreaProp, TextProp} from './Sub/props';
import { OrderCategory, Department, FundingStatus } from './Sub/utils';
import FillOutForm from './Sub/FillOutForm';
import "../AllCss/MaterialRequest.css";

const CashRequest = () => {
    const inputInitial={
        desc:"",
        part:"",
        oem:"",
        justification:"",
        quantity:"",
        oldQuote:"",
        quote1:"",
        quote2:"",
        quote3:"",
        accCriteria:"",
      }

    const [inputArray, setInputArray] = useState([inputInitial]);

    const [all, setAll] = useState({
        category:"",
        orderType:"",
        jobDetail:"",
        requestId: localStorage.getItem("user")?._id || "",
        requestor: localStorage.getItem("user")?.name || "",
        amount:"",
        
        orders:"",
        department:"",
        description:"",
        fundingStatus:"",
        requestDate: "",
    })
      const handleChange = (e) =>{ setAll({...all, [e.target.name]: e.target.value}) }

      const handleCount =()=> setInputArray([...inputArray, inputInitial ])


      const handleTotal =()=>{
        const total = inputArray.reduce((acc, curr)=> Number(acc) + (Number(curr.desc) *Number(curr.oem)),0)
        return total
      }
  
  
console.log(inputArray)



  return (
    <div className="MR-container">
        <div className="MR-paper-wrap">
            <div style={{float:"right", color:"gray"}}><CloseIcon/></div>
            <section style={{padding:"0.7rem"}}>
             <div style={{fontSize:"1.5rem"}}>Add New Cash Request</div>
             <hr style={{margin:"1rem 0rem", border:"1.3px solid lightgray"}}/>
            <div className="MR-paper-content">
                <InputProp  
                  title={"Order Request Title"} 
                  instruction="Enter the Title for this order" 
                  name="description" 
                  value={all.description} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Orders Category"} 
                  instruction="Select from dropdown"
                  itemMap={OrderCategory} 
                  name="orders" 
                  value={all.orders}  
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Department"} 
                  instruction="Select from dropdown"
                  itemMap={Department} 
                  name="department" 
                  value={all.department} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Equipment/ Tool Name"} 
                  instruction="Select from dropdown"
                  itemMap={Department} 
                  name="department" 
                  value={all.department} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Material Required Date"} 
                  instruction="Select date material is needed" 
                  name="requestDate" 
                  value={all.requestDate} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Funding Status"} 
                  instruction="Select urgency for material needed"
                  itemMap={FundingStatus} 
                  name="fundingStatus" 
                  value={all.fundingStatus} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Serial Number"} 
                  instruction="Select from dropdown"
                  itemMap={Department} 
                  name="department" 
                  value={all.department} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Base Office"} 
                  instruction="Select base of operation" 
                  name="requestDate" 
                  value={all.requestDate} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Job Number"} 
                  instruction="Auto Details" 
                  name="requestDate" 
                  value={all.requestDate} 
                  onChange={handleChange}/>
                <TextAreaProp  
                  title={"Order Justification"} 
                  instruction="Auto Details" 
                  name="requestDate" 
                  value={all.requestDate} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Rig Assignment"} 
                  instruction="Select from dropdown"
                  itemMap={FundingStatus} 
                  name="fundingStatus" 
                  value={all.fundingStatus} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Attach Sourced Quote 1:"} 
                  instruction="" 
                  name="requestDate" 
                  value={all.requestDate} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Attach Sourced Quote 2:"} 
                  instruction="" 
                  name="requestDate" 
                  value={all.requestDate} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Applicable Specifications, Drawings, Process Requirements, Inspection Instructions."} 
                  instruction="Select from dropdown"
                  itemMap={FundingStatus} 
                  name="fundingStatus" 
                  value={all.fundingStatus} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Procedure/Process/Equipment Approval Requirement"} 
                  instruction="Select from dropdown"
                  itemMap={FundingStatus} 
                  name="fundingStatus" 
                  value={all.fundingStatus} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Personnel’s Qualification Requirement"} 
                  instruction="Select from dropdown"
                  itemMap={FundingStatus} 
                  name="fundingStatus" 
                  value={all.fundingStatus} 
                  onChange={handleChange}/>
            </div>
             <section className='mat-req-input-loop' style={{marginTop:"2rem"}}>
             <div style={{display:"flex",paddingLeft:"1rem" }}>
                    <div className="mat-desc">Description</div>
                    <div className='mat-part-no'>Justification</div>
                    <div className='mat-oem'>Unit Cost</div>
                    <div className='mat-justification' >Quantity</div>
                    <div className='mat-quantity' >Amount</div>
                    <div onClick={handleCount}className='mat-btn-add' >+</div>
                  </div>
                { inputArray.map((item,i)=>
                    <div key={i} >
                      <FillOutForm item={item} i={i} inputArray={inputArray} setInputArray={setInputArray}/>
                   </div>                
                )}
                <div style={{width:"100%", display:"grid", placeItems:"center", marginTop:"1rem"}}>
                 <button style={{width:"20%", padding:"0.5rem 0rem"}}>SUBMIT</button>
                 <div>total: {handleTotal()}</div>
                </div>

             </section>
          </section> 

        </div>
    </div>
  )
}

export default CashRequest
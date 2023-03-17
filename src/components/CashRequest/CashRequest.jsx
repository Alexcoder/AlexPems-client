import React, {useState} from 'react';
// import CloseIcon from "@mui/icons-material/Close"
import {SelectProp, InputProp,TextAreaProp, } from './Sub/props';
// TextProp
import { OrderCategory, Department, FundingStatus } from './Sub/utils';
import FillOutForm from './Sub/FillOutForm';
import "./styles/CashRequest.css";

const CashRequest = () => {
    const inputInitial={
        desc: "",
        justification: "",
        unitCost: "",
        quantity: "",
        amount: "",
      }

      
      const [all, setAll] = useState({
        category:"",
        // orderType:"",
        // jobDetail:"",
        requestId: localStorage.getItem("user")?._id || "",
        requestor: localStorage.getItem("user")?.name || "",
        currency:"",
        rigAssignment:"",
        jobNumber:"",
        department:"",
        description:"",
        paymentAccount:"",
        justification:"",
        baseOffice:"",
        requiredDate: "",
        inputArray: [inputInitial],
    })
      const handleChange = (e) =>{ setAll({...all, [e.target.name]: e.target.value}) }

      const handleCount =()=> setAll({...all, inputArray: [...all.inputArray, inputInitial ]})


      const handleTotal =()=>{
        // const total = all.inputArray.reduce((acc, curr)=> Number(acc) + (Number(curr.desc) *Number(curr.oem)),0)
        const total = all.inputArray.reduce((acc, curr)=> Number(acc) + (Number(curr.unitCost *curr.quantity)),0)
        const formatted = Intl.NumberFormat().format(total);
        return formatted   
      }
  



  return (
    <div className="CR-container">
        <div className="CR-paper-wrap">
            {/* <div style={{float:"right", color:"gray"}}><CloseIcon/></div> */}
            <section style={{padding:"0.7rem"}}>
             <div style={{fontSize:"1.5rem"}}>Add New Cash Request</div>
             <hr style={{margin:"1rem 0rem", border:"1.3px solid lightgray"}}/>
            <div className="CR-paper-content">
                <InputProp  
                  title={"Request Title"} 
                  instruction="Enter the Title for this order" 
                  name="description" 
                  value={all.description} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Request Category"} 
                  instruction="Select from dropdown"
                  itemMap={OrderCategory} 
                  name="orders" 
                  value={all.category}  
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Department"} 
                  instruction="Select from dropdown"
                  itemMap={OrderCategory} 
                  name="orders" 
                  value={all.department}  
                  onChange={handleChange}/>
                <TextAreaProp  
                  title={"Payment Account Details"} 
                  instruction="Enter the name and bank account details to be funded" 
                  name="paymentAccount" 
                  value={all.paymentAccount} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Funds Required Date"} 
                  instruction="Select date fund is needed" 
                  type="date"
                  name="requiredDate" 
                  value={all.requiredDate} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Emergency Request"} 
                  instruction="Select urgency for material needed"
                  itemMap={Department} 
                  name="department" 
                  value={all.department} 
                  onChange={handleChange}/>
                <TextAreaProp  
                  title={"Request Justification"} 
                  instruction="Enter the justification for this request" 
                  name="justification" 
                  value={all.justification} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Base Office"} 
                  instruction="Select base of operation"
                  itemMap={FundingStatus} 
                  name="baseOffice" 
                  value={all.baseOffice} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Job Number"} 
                  instruction="Auto Details"
                  itemMap={Department} 
                  name="jobNumber" 
                  value={all.jobNumber} 
                  onChange={handleChange}/>                 
{/* PUT ATTACHMENT HERE */}
                 <SelectProp 
                  title={"Currency"} 
                  instruction="Select from dropdown"
                  itemMap={FundingStatus} 
                  name="currency" 
                  value={all.currency} 
                  onChange={handleChange}/>
                 <SelectProp 
                  title={"Rig Assignment"} 
                  instruction="Select from dropdown"
                  itemMap={FundingStatus} 
                  name="rigAssignment" 
                  value={all.rigAssignment} 
                  onChange={handleChange}/>

                {/* <SelectProp 
                  title={"Department"} 
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
                  onChange={handleChange}/> */}
            </div>
             <section className='cash-req-input-loop' style={{marginTop:"2rem"}}>
             <div style={{display:"flex",paddingLeft:"1rem" }}>
                    <div className="cash-desc">Description</div>
                    <div className='cash-justification' >Justification</div>
                    <div className='cash-cost'>Unit Cost</div>
                    <div className='cash-quantity' >Quantity</div>
                    <div className='cash-amount'>Amount</div>
                    <div onClick={handleCount}className='cash-btn-add' >+</div>
                  </div>
                { all.inputArray.map((item,i)=>
                    <div key={i} >
                      <FillOutForm item={item} i={i} all={all} setAll={setAll}/>
                   </div>                
                )}
                <div style={{width:"100%", display:"grid", placeItems:"center", marginTop:"1rem"}}>
                 <button style={{width:"20%", padding:"0.5rem 0rem"}}>SUBMIT</button>
                 <div style={{color:"gray",}}>Total cost: <span style={{color:"black", fontWeight:"600"}}>&#x20A6;{handleTotal()}:00</span></div>
                </div>

             </section>
          </section> 

        </div>
    </div>
  )
}

export default CashRequest
import React, {useState} from 'react';
import CloseIcon from "@mui/icons-material/Close"
import {SelectProp, InputProp,TextAreaProp, TextProp} from './Sub/props';
import { OrderCategory, Department, FundingStatus, Equipment, SerialNumber, JobNumber, BaseOffice,
        PersonnelQualification, RigAssignment, QMS} from './Sub/utils';
import FillOutForm from './Sub/FillOutForm';
import "../AllCss/MaterialRequest.css";

const MaterialRequest = () => {
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
      
      const [all, setAll] = useState({
        requestId: localStorage.getItem("user")?._id || "",
        requestor: localStorage.getItem("user")?.name || "",
        
        title:"",
        category:"",
        department:"",
        fundingStatus:"",
        requestDate: "",
        equipment: "",
        serialNumber: "",
        base: "",
        jobNumber: "",
        justification: "",
        rigassignment: "",
        qms: "",
        personnelQualification:"",
        personnelQualification2:"",
        inputArray:[inputInitial],
      })
      const handleChange = (e) =>{ setAll({...all, [e.target.name]: e.target.value}) }
      
      const handleCount =()=> setAll({...all, inputArray: [...all.inputArray, inputInitial] })
        
  
console.log(all)



  return (
    <div className="MR-container">
        <div className="MR-paper-wrap">
            <div style={{float:"right", color:"gray"}}><CloseIcon/></div>
            <section style={{padding:"0.7rem"}}>
             <div style={{fontSize:"1.5rem"}}>Materials Order</div>
             <hr style={{margin:"1rem 0rem", border:"1.3px solid lightgray"}}/>
            <div className="MR-paper-content">
                <InputProp  
                  title={"Order Request Title"} 
                  instruction="Enter the Title for this order" 
                  name="title" 
                  value={all.title} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Orders Category"} 
                  instruction="Select from dropdown"
                  itemMap={OrderCategory} 
                  name="category" 
                  value={all.category}  
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
                  itemMap={Equipment} 
                  name="equipment" 
                  value={all.equipment} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Material Required Date"} 
                  instruction="Select date material is needed" 
                  name="requestDate" 
                  type="Date"
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
                  itemMap={SerialNumber} 
                  name="serialNumber" 
                  value={all.serialNumber} 
                  onChange={handleChange}/>
                <SelectProp  
                  title={"Base Office"} 
                  instruction="Select base of operation" 
                  itemMap={BaseOffice}
                  name="base" 
                  value={all.base} 
                  onChange={handleChange}/>
                <SelectProp  
                  title={"Job Number"} 
                  itemMap={JobNumber}
                  instruction="Auto Details" 
                  name="jobNumber" 
                  value={all.jobNumber} 
                  onChange={handleChange}/>
                <TextAreaProp  
                  title={"Order Justification"} 
                  instruction="Auto Details" 
                  name="justification" 
                  value={all.justification} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Rig Assignment"} 
                  instruction="Select from dropdown"
                  itemMap={RigAssignment} 
                  name="rigassignment" 
                  value={all.rigassignment} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Attach Sourced Quote 1:"} 
                  instruction="" 
                  name="requestDate" 
                  // value={all.requestDate} 
                  onChange={handleChange}/>
                <InputProp  
                  title={"Attach Sourced Quote 2:"} 
                  instruction="" 
                  name="requestDate" 
                  type="Date"
                  // value={all.requestDate} 
                  onChange={handleChange}/>
                <SelectProp 
                  title={"Procedure/Process/Equipment Approval Requirement"} 
                  instruction="Select from dropdown"
                  itemMap={FundingStatus} 
                  name="fundingStatus" 
                  value={all.fundingStatus} 
                  onChange={handleChange}/>
                <TextProp 
                  instruction1={"Applicable Specifications, Drawings, Process Requirements, Inspection Instructions."}
                  instruction2={"Select from dropdown"}
                  instruction3={"If above is Others, please specify"}
                  instruction4={"Enter remark if Quality Management System Requirement is Others"}
                  itemMap={FundingStatus} 
                  selectName="fundingStatus" 
                  selectValue={all.fundingStatus} 
                  inputName={all.fundingStatus} 
                  inputValue={all.fundingStatus} 
                  onChange={handleChange}/>
                <TextProp 
                  instruction1={"Personnel’s Qualification Requirement"}
                  instruction2={"Select from dropdown"}
                  instruction3={"If above is Others, please specify"}
                  instruction4={"Enter remark if Quality Management System Requirement is Others"}
                  itemMap={PersonnelQualification} 
                  selectName="personnelQualification" 
                  selectValue={all.personnelQualification} 
                  inputName={"personnelQualification2"} 
                  inputValue={all.personnelQualification2} 
                  onChange={handleChange}/>
                <TextProp 
                  instruction1={"Quality Management System Requirement"}
                  instruction2={"Select from dropdown"}
                  instruction3={"If above is Others, please specify"}
                  instruction4={"Enter remark if Quality Management System Requirement is Others"}
                  itemMap={QMS} 
                  selectName="qms" 
                  selectValue={all.qms} 
                  inputName={all.qms} 
                  inputValue={all.qms} 
                  onChange={handleChange}/>
            </div>
             <section className='mat-req-input-loop' style={{marginTop:"2rem"}}>
             <div style={{display:"flex",paddingLeft:"1rem" }}>
                    <div className="mat-desc">Description</div>
                    <div className='mat-part-no'>	Part <br/> Number</div>
                    <div className='mat-oem'>	OEM</div>
                    <div className='mat-justification' >Justification</div>
                    <div className='mat-quantity' >Quantity</div>
                    <div className='mat-quote'>Old <br/> Quote</div>
                    <div className='mat-quote'>Quote <br/> 1</div>
                    <div className='mat-quote'>Quote <br/> 2</div>
                    <div className='mat-quote'>Quote <br/> 3</div>
                    <div className='mat-acc-criteria' >Acceptance <br/> Criteria</div>
                    <div onClick={handleCount} className='mat-btn-add' >+</div>
                  </div>
                { all.inputArray.map((item,i)=>
                    <div key={i} >
                      <FillOutForm item={item} i={i} all={all} setAll={setAll}/>
                   </div>                
                )}
                <div style={{width:"100%", display:"grid", placeItems:"center", marginTop:"1rem"}}>
                 <button style={{width:"20%", padding:"0.5rem 0rem"}}>SUBMIT</button>
                </div>

             </section>
          </section> 

        </div>
    </div>
  )
}

export default MaterialRequest
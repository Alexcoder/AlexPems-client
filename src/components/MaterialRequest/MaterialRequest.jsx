import React, {useState} from 'react';
import CloseIcon from "@mui/icons-material/Close"
import {SelectProp, InputProp} from './props';
import { OrderCategory, Department, FundingStatus } from './utils';
import "../AllCss/MaterialRequest.css";

const MaterialRequest = () => {
    const [count, setCount] = useState(1);
    const [selected, setSelected] = useState();
    const [inputArray, setInputArray] = useState([]);

    const [all, setAll] = useState({
        category:"",
        orderType:"",
        jobDetail:"",
        requestId: localStorage.getItem("user")?._id || "",
        requestDate: "",
        requestor: localStorage.getItem("user")?.name || "",
        amount:"",
        
        orders:"",
        department:"",
        description:"",
        fundingStatus:""
    })
      const handleChange = (e) =>{ setAll({...all, [e.target.name]: e.target.value}) }
      const handleCount =()=> setCount(prev=> prev+1)
      const handleDelete =()=> setCount(prev=> prev-1)
  
      console.log(all);
  
 const InputArray =[];
//  const [inputArray, setInputArray] =useState([...inputArray, InputArray]);
 
 for(let i=1; i<=count; i++){
    // setInputArray((prev)=> [...prev, i])
     InputArray.push(i);
    };
 const handleFilter =(number)=> {
    setSelected(number);
    const deleteIndex = InputArray.findIndex((p)=> p===number)
    InputArray.splice(deleteIndex, 1);
    console.log({"number":number, "deleteIndex": deleteIndex})
}
console.log(InputArray)



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
    

                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Serial Number</div>
                    <select style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from drop down</div>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Base Office</div>
                    <input style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select base of operation</div>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Job Number</div>
                    <input style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Auto Details</div>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Order Justification</div>
                    <textarea style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Enter the justification for this order</div>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Rig Assignment</div>
                    <select style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Attach Sourced Quote 1:</div>
                    <input style={{width:"140%", padding:"0.5rem"}}/>
                    {/* <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div> */}
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Attach Sourced Quote 2:</div>
                    <input style={{width:"140%", padding:"0.5rem"}}/>
                    {/* <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div> */}
                </div>
                <div style={{width:"90%",  border:"0.5px solid lightgray", borderRadius:"0.2rem"}}>
                    <section style={{width:"100%", textAlign:"center", }}>
                    <div style={{marginBottom:"0.3rem",color:"blue", textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>Quality Management System Requirement</div>
                    <select style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                    </section>
                    <section style={{width:"100%", textAlign:"center", marginTop:"1rem" }}>
                    <div style={{marginBottom:"0.3rem",color:"blue",textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>If above is "Others", please specify</div>
                    <input style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Enter remark if Quality Management System Requirement is Others</div>
                    </section>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Applicable Specifications, Drawings, Process Requirements, Inspection Instructions.</div>
                    <select style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Procedure/Process/Equipment Approval Requirement</div>
                    <select style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                </div>
                <div style={{width:"60%", textAlign:"start"}}>
                    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>Personnel’s Qualification Requirement</div>
                    <select style={{width:"140%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                </div>
                <div style={{width:"90%",  border:"0.5px solid lightgray", borderRadius:"0.2rem"}}>
                    <section style={{width:"100%", textAlign:"center", }}>
                    <div style={{marginBottom:"0.3rem",color:"blue", textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>Applicable Specifications, Drawings, Process Requirements, Inspection Instructions.</div>
                    <select style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                    </section>
                    <section style={{width:"100%", textAlign:"center", marginTop:"1rem" }}>
                    <div style={{marginBottom:"0.3rem",color:"blue",textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>If above is "Others", please specify</div>
                    <input style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Enter remark if Quality Management System Requirement is Others</div>
                    </section>
                </div>
                <div style={{width:"90%",  border:"0.5px solid lightgray", borderRadius:"0.2rem"}}>
                    <section style={{width:"100%", textAlign:"center", }}>
                    <div style={{marginBottom:"0.3rem",color:"blue", textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>Procedure/Process/Equipment Approval Requirement</div>
                    <select style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                    </section>
                    <section style={{width:"100%", textAlign:"center", marginTop:"1rem" }}>
                    <div style={{marginBottom:"0.3rem",color:"blue",textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>If above is "Others", please specify</div>
                    <input style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Enter remark if Quality Management System Requirement is Others</div>
                    </section>
                </div>
                <div style={{width:"90%",  border:"0.5px solid lightgray", borderRadius:"0.2rem"}}>
                    <section style={{width:"100%", textAlign:"center", }}>
                    <div style={{marginBottom:"0.3rem",color:"blue", textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>Personnel’s Qualification Requirement</div>
                    <select style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Select from dropdown</div>
                    </section>
                    <section style={{width:"100%", textAlign:"center", marginTop:"1rem" }}>
                    <div style={{marginBottom:"0.3rem",color:"blue",textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>If above is "Others", please specify</div>
                    <select style={{width:"85%", padding:"0.5rem"}}/>
                    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Enter remark if Quality Management System Requirement is Others</div>
                    </section>
                </div>


            </div>
             <section className='mat-req-input-loop' style={{marginTop:"2rem"}}>
             <div style={{display:"flex",paddingLeft:"1rem" }}>
                    <div className="mat-desc">Description</div>
                    <div className='mat-part-no' >	Part <br/> Number</div>
                    <div className='mat-oem' >	OEM</div>
                    <div className='mat-justification' >Justification</div>
                    <div className='mat-quantity' >Quantity</div>
                    <div className='mat-quote' >Old <br/> Quote</div>
                    <div className='mat-quote' >Quote <br/> 1</div>
                    <div className='mat-quote' >Quote <br/> 2</div>
                    <div className='mat-quote' >Quote <br/> 3</div>
                    <div className='mat-acc-criteria' >Acceptance <br/> Criteria</div>
                    <div onClick={handleCount}className='mat-btn-add' >A</div>
                  </div>
                { InputArray.map((item,i)=>
                  <div key={i} style={{display:"flex",paddingLeft:"1rem" }}>
                    <div className='mat-desc1' ><input style={{width:"90%", height:"2rem"}}/></div>
                    <div className='mat-part-no1' ><input style={{width:"3rem", height:"2rem"}}/></div>
                    <div className='mat-oem1'><input style={{width:"3rem", height:"2rem"}}/></div>
                    <div className='mat-justification1'><textarea /></div>
                    <div className='mat-quantity1'><input style={{width:"3rem", height:"2rem"}}/></div>
                    <div className='mat-quote1'><input style={{width:"2rem", height:"2rem"}}/></div>
                    <div className='mat-quote1'><input style={{width:"2rem", height:"2rem"}}/></div>
                    <div className='mat-quote1'><input style={{width:"2rem", height:"2rem"}}/></div>
                    <div className='mat-quote1' ><input style={{width:"2rem", height:"2rem"}} /></div>
                    <div className='mat-acc-criteria1'><input style={{width:"3rem", height:"2rem"}}/></div>
                    <div onClick={()=> handleFilter(item)} className='mat-btn-delete'>M</div>
                  </div>
                
                )}

             </section>
          </section> 

        </div>
    </div>
  )
}

export default MaterialRequest
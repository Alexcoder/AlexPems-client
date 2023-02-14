import React from 'react'

const FillOutForm = ({item, i, inputArray, setInputArray}) => {

    const handleFilter =(index)=> {
        const data=[...inputArray];
        data.splice(index, 1);
        setInputArray(data)
      }
    
    const handleInputChange = (e,i) =>{ 
        const {name, value} = e.target;
        let list =[...inputArray];
        list[i][name]= value;
        setInputArray(list);
      }

  

  return (
    <div style={{display:"flex",paddingLeft:"1rem" }}>
       <div className='mat-desc1' ><input name="desc" value={item.desc} onChange={(e)=> handleInputChange(e,i)} style={{width:"90%", height:"2rem"}}/></div>
       <div className='mat-part-no1' ><input name="part" value={item.part} onChange={(e)=> handleInputChange(e,i)} style={{width:"3rem", height:"2rem"}}/></div>
       <div className='mat-oem1'><input name="oem" value={item.oem} onChange={(e)=> handleInputChange(e,i)} style={{width:"3rem", height:"2rem"}}/></div>
       <div className='mat-justification1'><textarea rows="3" value={item.justification} name="justification" onChange={(e)=> handleInputChange(e,i)} /></div>
       <div className='mat-quantity1'><input name="quantity" type="number" value={item.quantity} onChange={(e)=> handleInputChange(e,i)} style={{width:"3rem", height:"2rem"}}/></div>
       {/* <div className='mat-quote1'><input name="oldQuote" type="number" value={item.oldQuote} onChange={(e)=> handleInputChange(e,i)} style={{width:"2rem", height:"2rem"}}/></div>
       <div className='mat-quote1'><input name="quote1" type="number" value={item.quote1} onChange={(e)=> handleInputChange(e,i)} style={{width:"2rem", height:"2rem"}}/></div>
       <div className='mat-quote1'><input name="quote2" type="number" value={item.quote2} onChange={(e)=> handleInputChange(e,i)} style={{width:"2rem", height:"2rem"}}/></div>
       <div className='mat-quote1' ><input name="quote3" type="number" value={item.quote3} onChange={(e)=> handleInputChange(e,i)} style={{width:"2rem", height:"2rem"}} /></div>
       <div className='mat-acc-criteria1'><input name="accCriteria" value={item.accCriteria} onChange={(e)=> handleInputChange(e,i)} style={{width:"3rem", height:"2rem"}}/></div> */}
       <div onClick={()=> handleFilter(i)} className='mat-btn-delete'>-</div>
  </div>


  )
}

export default FillOutForm
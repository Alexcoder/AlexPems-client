import React from 'react';
import "../styles/CashRequest.css";

const FillOutForm = ({item, i, all, setAll}) => {

    const handleFilter =(index)=> {
        const data=[...all.inputArray];
        data.splice(index, 1);
        setAll({...all, inputArray: data})
      }
    
    const handleInputChange = (e,i) =>{ 
        const {name, value} = e.target;
        let list =[...all.inputArray];
        list[i][name]= value;
        setAll({...all, inputArray: list});
      }

  console.log(all.inputArray);

  return (
    <div style={{display:"flex",paddingLeft:"1rem" }}>
       <div className='cash-desc1' ><input name="desc" value={item.desc} onChange={(e)=> handleInputChange(e,i)} style={{width:"90%", height:"2rem", border:"0.5px solid lightgray"}}/></div>
       <div className='cash-justification1' ><textarea name="justification" rows="3" value={item.justification} onChange={(e)=> handleInputChange(e,i)} style={{width:"", height:"", border:"0.5px solid lightgray"}}/></div>
       <div className='cash-cost1'><input name="unitCost" type="number"  value={item.unitCost} onChange={(e)=> handleInputChange(e,i)} style={{width:"5rem", height:"2rem", border:"0.5px solid lightgray"}}/></div>
       <div className='cash-quantity1'><input name="quantity" type="number" value={item.quantity}  onChange={(e)=> handleInputChange(e,i) } style={{width:"5rem", height:"2rem", border:"0.5px solid lightgray"}} /></div>
       <div className='cash-amount1'><input disabled name="amount" type="number" value={item.unitCost * item.quantity} onChange={(e)=> handleInputChange(e,i)} style={{width:"5rem", height:"2rem", border:"0.5px solid lightgray"}}/></div>
       <div onClick={()=> handleFilter(i)} className='cash-btn-delete'>-</div>
  </div>


  )
}

export default FillOutForm
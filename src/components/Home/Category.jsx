import React from 'react';

const Category = ({total, type, delivered, ICON}) => {
    
  return (
    // <div>
        <div 
          style={{display:"flex", 
                  gap:"2rem", 
                  padding:"0.5rem",
                  borderRadius:"0.5rem", 
                  height:"fit-content",
                  justifyContent:"space-between",
                  }}>
            <div style={{textAlign:"start"}}>
              <div style={{fontWeight:"600",fontSize:"2rem", marginBottom:"1rem"}}>{total}</div>
              <div style={{fontSize:"1.3rem"}}>{type}</div>
              <div>{delivered} Delivered</div>
            </div>
            <div style={{textAlign:"end"}}>
               <div>{ICON}</div>
            </div>
        </div>
    // </div>
  )
}

export default Category;
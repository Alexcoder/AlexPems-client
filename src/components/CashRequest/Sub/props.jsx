import React from 'react'

export const SelectProp = ({title, itemMap, name, value, onChange, instruction}) => {
  return (
<div style={{width:"60%", textAlign:"start"}}>
    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>{title}</div>
    <select name={name} value={value} onChange={onChange} style={{width:"140%", padding:"0.5rem", color:"gray", border:"0.5px solid lightgray"}}>{itemMap.map(p=><option key={p}>{p}</option>)}</select>
    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>{instruction}</div>
</div>

  )
}

export const InputProp = ({title, name, value, onChange, instruction, type}) => {
  return (
<div style={{width:"50%", textAlign:"start"}}>
    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>{title}</div>
    <input min="1" type={type} name={name} value={value} onChange={onChange} style={{width:"140%", padding:"0.5rem", color:"gray", border:"0.5px solid lightgray"}}/>
    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>{instruction}</div>
</div>
  )
}

export const TextAreaProp = ({title, name, value, onChange, }) => {
  return (
    <div style={{width:"50%", textAlign:"start"}}>
    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>{title}</div>
    <textarea rows="5" name={name} value={value} onChange={onChange} style={{width:"155%", padding:"0.5rem", border:"0.5px solid lightgray"}}/>
    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>Enter the justification for this order</div>
</div>
  )
}

export const TextProp = ({itemMap, inputName, selectName, inputValue, selectValue, onChange, instruction1, instruction2, instruction3, instruction4}) => {
  return (
    <div style={{width:"50%",  border:"0.5px solid lightgray", borderRadius:"0.2rem"}}>
       <section style={{width:"100%", textAlign:"center", }}>
         <div style={{marginBottom:"0.3rem",color:"blue", textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>{instruction1}</div>
           <select name={selectName} value={selectValue} onChange={onChange} style={{width:"85%", padding:"0.5rem",}}>{itemMap.map(p=><option key={p}>{p}</option>)}</select>

            <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>{instruction2}</div>
           </section>
       <section style={{width:"100%", textAlign:"center", marginTop:"1rem" }}>
         <div style={{marginBottom:"0.3rem",color:"blue",textAlign:"start", fontWeight:"650", fontSize:"0.9rem"}}>{instruction3}</div>
          <input name={inputName} value={inputValue} onChange={onChange} style={{width:"85%", padding:"0.5rem"}}/>
         <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>{instruction4}</div>
      </section>
</div>

  )
}


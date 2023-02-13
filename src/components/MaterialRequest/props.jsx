import React from 'react'

export const SelectProp = ({title, itemMap, name, value, onChange, instruction}) => {

  return (
<div style={{width:"70%", textAlign:"start"}}>
    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>{title}</div>
    <select name={name} value={value} onChange={onChange} style={{width:"140%", padding:"0.5rem", color:"gray"}}>{itemMap.map(p=><option key={p}>{p}</option>)}</select>
    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>{instruction}</div>
</div>

  )
}

export const InputProp = ({title, name, value, onChange, instruction}) => {

  return (
<div style={{width:"65%", textAlign:"start"}}>
    <div style={{marginBottom:"0.3rem",color:"blue", fontWeight:"650", fontSize:"0.9rem"}}>{title}</div>
    <input name={name} value={value} onChange={onChange} style={{width:"140%", padding:"0.5rem", color:"gray"}}/>
    <div style={{marginBottom:"0.3rem",color:"gray", fontSize:"0.9rem"}}>{instruction}</div>
</div>

  )
}


// import {useState} from 'react';
import { useGlobalState } from '../../state/Context';

const Pagination = ({postsPerPage, totalPosts, paginate, }) => {
    const {selected, setSelected}= useGlobalState()
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
       pageNumbers.push(i)
}


  return (
    <nav style={{display:"flex", gap:"0.2rem"}}>
        {
            pageNumbers.map((number, i)=>
              <div key={i} >
                 <div onClick={()=> {paginate(number); setSelected(i)}} style={{border:"1px solid lightgray", textAlign:"center", padding:"0.5rem 1rem", background: selected===i ? "gray" :"" }}>
                    {number}
                 </div>
              </div>
            )
        }
    </nav>
  )
}

export default Pagination
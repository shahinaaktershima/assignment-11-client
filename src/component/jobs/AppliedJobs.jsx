import { useEffect, useState } from "react";
import Apply from "./Apply";


const AppliedJobs = () => {
    const [applied,setApplied]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/applied')
        .then(res=>res.json())
        .then(data=>setApplied(data))
    },[])
 
  
  

    return (
      
        <div className="my-10 space-y-4">
          
            <div className="overflow-x-auto  grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
       
         

       {
           applied.map(apply=><Apply key={apply._id} apply={apply} setApplied={setApplied}></Apply>
              )
       }
         
      
      </div>
        </div>
    );
};

export default AppliedJobs;
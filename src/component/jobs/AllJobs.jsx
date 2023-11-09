import { useEffect, useState } from "react";
import All from "./All";


const AllJobs = () => {
    const [applied,setApplied]=useState([]);
    useEffect(()=>{
        fetch('https://job-project-server.vercel.app/applied')
        .then(res=>res.json())
        .then(data=>setApplied(data))
    },[])
    return (
        <div className="md:overflow-x-auto w-full mx-auto  my-10">
        <table className="table">
         {/* head */}
         <thead >
           <tr className=" md:text-2xl font-bold">
             <th>Name</th>
             <th>title</th>       
             <th>Salary</th>
             <th>Posting date</th>
             <th>Deadline</th>
             
            
           </tr>
         </thead>
         <tbody>

       {
           applied.map(job=><All  key={job._id} job={job}></All>
              )
       }
          </tbody>
       </table>
      </div>
    );
};

export default AllJobs;
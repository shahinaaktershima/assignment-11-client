import { useContext, useEffect, useState } from "react";
import MyJob from "./MyJob";
import Swal from "sweetalert2";
import { AuthContext } from "../usersetup/AuthProvider";


const MyJobs = () => {
  const {user}=useContext(AuthContext)
    const [myJobs,setMyjobs]=useState([]);
    useEffect(()=>{
        fetch('https://job-project-server.vercel.app/createdJobs')
        .then(res=>res.json())
        .then(data=>setMyjobs(data))
    },[])
    const handleDelete=id=>{
       
        
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          
            fetch(`http://localhost:5000/createdJobs/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){

                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining=myJobs.filter(jobs=>jobs._id!==id)
                          setMyjobs(remaining)
                        }
                      });
                   
                }
            })
        }
    
    return (
        <div className="md:overflow-x-auto w-full mx-auto my-10">
        <table className="table">
         {/* head */}
         <thead >
           <tr className=" md:text-2xl font-bold">
             <th>Name</th>
             <th>Job</th>
             <th>Salary</th>
             <th>Deadline</th>
             <th>Update</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>

       {
           myJobs.map(job=><MyJob handleDelete={handleDelete} key={job._id} job={job}></MyJob>
              )
       }
          </tbody>
       </table>
      </div>
    );
};

export default MyJobs;
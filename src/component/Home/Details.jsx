import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../usersetup/AuthProvider";


const Details = () => {
    const {user}=useContext(AuthContext)
    const jobs=useLoaderData();
    const location=useLocation();
    const navigate=useNavigate();
    const {image,_id,name,title,postingDate,deadline,salaryRange,applicants,type}=jobs;
    const handleApply=e=>{
       e.preventDefault();
       const name=e.target.name.value;
       const email=e.target.email.value;
       const resume=e.target.resume.value;
       const apply={
        name,email,resume,postingDate,image,title,type,deadline,salaryRange
       }

       fetch('http://localhost:5000/applied',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(apply)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.insertedId){
            navigate(location?.state?location?.state:'/')  
        }
       })
    }
    return (
        <div className="my-10">
          <div className="card card-compact max-h-[500px]  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Title:{title}</h2>
    <p className="font-bold">salary:{salaryRange}</p>
    <p>Number of applicants:{applicants}</p>
    <div className="card-actions justify-end">
      
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Apply now</button>
<dialog id="my_modal_1" className="modal">
<div className="modal-box">
    <h2 className="font-bold">Fill up this form</h2>
    <div className="modal-action">
      <form onSubmit={handleApply} className="border  space-y-2"  method="dialog">
      <input className="border border-black p-2 w-full rounded-lg" type="text" name="name" defaultValue={user?.displayName} /> <br />
    <input className="border border-black p-2 w-full rounded-lg" type="email" defaultValue={user?.email} name="email" placeholder="email" id="" /><br />
    <input className="border border-black p-2 w-full rounded-lg" type="url" name="resume" placeholder="resume link" id="" />
        {/* if there is a button in form, it will close the modal */}
       <button className="btn btn-primary" type="submit">submit</button>
      </form>
    </div>
 </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;
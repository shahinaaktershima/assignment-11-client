import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AddAjob = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleJobs=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const title=form.title.value;
        const category=form.category.value;
        const salary=form.salary.value;
        const description=form.description.value;
        const date=form.date.value;
        const deadline=form.deadline.value;
        const image=form.image.value;
        const applicants=form.applicants.value;
        console.log(name,title,category,salary,description,date,deadline,applicants);
        form.reset('')
        const jobs={name,title,category,salary,description,date,deadline,applicants,image}
        fetch('https://job-project-server.vercel.app/createdJobs',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobs)
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'jobs Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                navigate(location?.state?location?.state:'/')  
            }
           })

    
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add jobs</h2>
        <form onSubmit={handleJobs} >
            {/* form name  row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Brand name row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Salary range</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="salary" placeholder="salary" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form price row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">job description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Posting date</span>
                    </label>
                    <label className="input-group">
                    <input type="date" name="date" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="image url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Application deadline</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="deadline" placeholder="deadline" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Applicants Number</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="applicants" placeholder="applicants" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input  type="submit" value="Add jobs" className="btn btn-block" />

        </form>
    </div>
    );
};

export default AddAjob;
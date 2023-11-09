import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const data=useLoaderData();
    const location=useLocation();
    const navigate=useNavigate();
    const {_id,image,name,title,category,salary,description,date,deadline,applicants}=data;
    console.log(_id);
    const handleUpadate=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const title=form.title.value;
        const category=form.category.value;
        const salary=form.salary.value;
        const description=form.description.value;
        const date=form.date.value;
        const deadline=form.deadline.value;
        const applicants=form.applicants.value;
        const image=form.image.value;
        console.log(image,name,title,category,salary,description,date,deadline,applicants);
        form.reset('')
        const jobs={name,title,category,salary,description,date,deadline,applicants,image}

        fetch(`https://job-project-server.vercel.app/createdJobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(jobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate(location?.state?location.state:'/')
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update this jobs</h2>
        <form onSubmit={handleUpadate} >
            {/* form name  row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" defaultValue={name}/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" defaultValue={title}/>
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
                        <input type="text" name="category" placeholder="category" className="input input-bordered w-full" defaultValue={category}/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Salary range</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="salary" placeholder="salary" className="input input-bordered w-full" defaultValue={salary}/>
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
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full" defaultValue={description} />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Posting date</span>
                    </label>
                    <label className="input-group">
                    <input type="date" name="date" className="input input-bordered w-full" defaultValue={date} />
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
                        <input type="text" name="image" placeholder="image url" className="input input-bordered w-full" defaultValue={image}/>
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Application deadline</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="deadline" placeholder="deadline" className="input input-bordered w-full" defaultValue={deadline}/>
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Applicants Number</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="applicants" placeholder="applicants" className="input input-bordered w-full" defaultValue={applicants}/>
                    </label>
                </div>
            </div>
            <input  type="submit" value="update" className="btn btn-block" />

        </form>
    </div>
    );
};

export default Update;
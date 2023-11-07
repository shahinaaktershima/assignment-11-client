import { Link } from "react-router-dom";


const Card = ({job}) => {
    const {image,_id,name,title,postingDate,deadline,salaryRange,applicants,type}=job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl ">
       <figure><img className="h-[200px] w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold">{title}</p>
          <p>Posting Date:{postingDate}</p>
          <p>Deadline:{deadline}</p>
          <p>Salary Range:{salaryRange}</p>
          <p>Applicants:{applicants}</p>
          <p className="font-bold">Type:{type}</p>
          <div className="card-actions justify-center">
           < Link to={`/details/${_id}`}><button className="btn btn-primary">View details</button></Link> 
          </div>
        </div>
      </div>
    );
};

export default Card;
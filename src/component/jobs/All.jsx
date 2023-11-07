import { Link } from "react-router-dom";


const All = ({job}) => {
    const {_id,name,email,resume,postingDate,image,title,type,deadline,salaryRange}=job;
    return (
        <tr className="">
              
        <td>{name}</td>
        <td>{title}</td>
        <td>{salaryRange}</td>
        <td>{postingDate}</td>
        <td>{deadline}</td>
        <td><Link to={`/details/${_id}`}><button className="btn">details</button></Link></td>
       
        
        
      </tr>
    );
};

export default All;
import { Link } from "react-router-dom";


const MyJob = ({job,handleDelete}) => {
    const {_id,name,title,category,salary,description,date,deadline,applicants}=job;
   
    return (
        <tr className="">
              
        <td>{name}</td>
        <td>{title}</td>
        <td>{salary}</td>
        <td>{deadline}</td>
        <td><Link to={`/update/${_id}`}><button className="btn btn-primary ">update</button></Link></td>
        <td><button onClick={()=>handleDelete(_id)} className="btn">X</button></td>
        
        
      </tr>
     
    );
};

export default MyJob;
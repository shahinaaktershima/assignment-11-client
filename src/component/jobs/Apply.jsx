

const Apply = ({apply}) => {
    const{
        name,email,resume,postingDate,image,title,type
       }=apply;
    return (
        
       
          
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img className="h-[200px] w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{title}</h2>
          <h2 className="card-title">Type:{type}</h2>
          <h2 className="card-title">resume link:{resume}</h2>
          <p>posting date:{postingDate}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">details</button>
          </div>
        </div>
      </div>
           
       
     
    );
};

export default Apply;
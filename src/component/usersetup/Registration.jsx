import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Registration = () => {
    const {Register,setUser}=useContext(AuthContext);
    const [error,setError]=useState();
    const location=useLocation()
    const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photoUrl=form.photoUrl.value;

        console.log(name,password,email,photoUrl);
        // const user={name,password,email,photoUrl}
    Register(email,password)
    .then(res=>{  
        console.log(res.user)
        navigate(location?.state?location?.state:'/')
    }
    )
    .catch(err=>{
 setError(err.message)
    })
    
    }
    return (
       <div>
         <p className="text-2xl font-bold text-blue-600">{error}</p>
        <div className="hero min-h-screen bg-base-200">
          
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4 text-center">
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="photo url" name="photoUrl" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary"><input type="submit" value="sign up" /></button>
              </div>
            </form>
            <p>Already have an account? <Link className='text-blue-600 text-xl font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Registration;
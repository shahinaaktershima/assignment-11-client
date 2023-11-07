import { useContext, useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {
    const {Login,google}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate()
    const[error,setError]=useState()
    const handleLogin=e=>{
        e.preventDefault();
        
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(password,email);
        Login(email,password)
        .then(res=>{
            console.log(res.user);
             navigate(location?.state?location?.state:'/')
        })
        .catch(err=>{
            console.log(err);
            setError(err.message)
        })
    }
const handleGoogle=()=>{
    google()
    .then(res=>{
        console.log(res.user);
        navigate(location?.state?location?.state:'/')
    })
    .catch(err=>{
        console.log(err.message);
        setError(err.message)
    })
}

    return (
      <div>
        <p className="text-blue-600">{error}</p>
          <div className="hero min-h-screen bg-base-200">
          
          <div className="hero-content flex-col lg:flex-row">
          
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4 text-center">
              <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                  <button  className="btn btn-primary text-lg font-bold"><input type="submit" value="login" /></button>
                </div>
              </form>
              <p>Don't have an account to job space ? Please go to <Link className='text-blue-600 text-xl font-bold' to='/register'>Register</Link></p>
              <button onClick={handleGoogle} className="btn my-2 bg-blue-600 text-white w-3/4 mx-auto">Log in with google</button>
            </div>
            
          </div>
         
        </div>
      </div>
    );
};

export default Login;
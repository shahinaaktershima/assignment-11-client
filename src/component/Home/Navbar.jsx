import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../usersetup/AuthProvider";


const Navbar = () => {
    const{user,LogOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        LogOut()
        .then()
        .catch()
    }
    const navlinks=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allJobs'>All Jobs</NavLink></li>
    <li><NavLink to='/appliedjobs'>Applied Jobs</NavLink></li>
    <li><NavLink to='/addajob'>Add a jobs</NavLink></li>
    <li><NavLink to='/myjobs'>My Jobs</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
    
    </>
    return (
        <div className="my-6">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navlinks
       }
      </ul>
    </div>
   <div className="flex items-center"> <div className="flex-1 "><img className="rounded-full h-[80px] w-[80px]" src="https://i.postimg.cc/ncKGvhpy/front-view-young-beautiful-lady-white-shirt-black-jacket-using-her-laptop-front-table-smiling-showin.jpg" alt="" /></div>
    <a className="btn btn-ghost normal-case text-xl">Job Space</a></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navlinks
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
        user?<div className="flex items-center gap-1"><img className="h-10 w-10 rounded-full" src={user.photoURL
        } alt="" />
        <Link onClick={handleLogOut} ><button className="btn">log out</button></Link></div>:
        <Link to='/login'><button className="btn">log in</button></Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;
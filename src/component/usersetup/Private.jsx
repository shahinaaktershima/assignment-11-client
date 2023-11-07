import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Private = ({children}) => {
    const location=useLocation();
    console.log(location.pathname);
    const{user,loading}=useContext(AuthContext);
    if(loading){
        return <progress className="progress progress-secondary w-56" ></progress>
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login' replace></Navigate>
    );
};

export default Private;
import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Footer from "../Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;
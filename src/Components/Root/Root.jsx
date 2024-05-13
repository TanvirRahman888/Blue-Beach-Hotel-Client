import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Root = () => {
    return (
        <div className="px-[10%] mx-auto bg-gradient-to-r from-blue-400 to-blue-300">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;
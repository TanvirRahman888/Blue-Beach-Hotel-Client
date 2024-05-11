import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Root = () => {
    return (
        <div className="container px-2 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;
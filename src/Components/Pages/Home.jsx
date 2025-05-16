import { useContext } from "react";

import MyMap from "../Root/MyMap";
import Slider from "../Root/Slider";
import FeatureRooms from "./FeatureRooms/FeatureRooms";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import AboutUs from "../Root/AboutUs";
import ContactUs from "./FeatureRooms/ContactUs";
import Review from "../Root/Review";

const Home = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex gap-3 items-center justify-center min-h-screen">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    }
    return (
        <>
            <Helmet><title>Blue Beach Hotel</title></Helmet>
            <Slider></Slider>
            <FeatureRooms></FeatureRooms>
            <AboutUs></AboutUs>
            <Review></Review>
            <MyMap></MyMap>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;
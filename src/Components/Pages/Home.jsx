import { useContext } from "react";

import MyMap from "../Root/MyMap";
import Slider from "../Root/Slider";
import FeatureRooms from "./FeatureRooms/FeatureRooms";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
    const {loading}=useContext(AuthContext)
    if (loading) {
        return  <div className="flex gap-3 items-center justify-center min-h-screen">
              <span className="loading loading-ball loading-xs"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
          </div>
      }
    return (
        <>
            <Slider></Slider>
            <FeatureRooms></FeatureRooms>
            <MyMap></MyMap>
        </>
    );
};

export default Home;
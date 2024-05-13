import Map from "../Root/Map";
import MyMap from "../Root/MyMap";
import Slider from "../Root/Slider";
import FeatureRooms from "./FeatureRooms/FeatureRooms";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Map></Map>
            <FeatureRooms></FeatureRooms>
            <MyMap></MyMap>
        </>
    );
};

export default Home;
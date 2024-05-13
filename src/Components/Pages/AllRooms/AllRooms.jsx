import { useLoaderData } from "react-router-dom";
import Room from "../FeatureRooms/Room";


const AllRooms = () => {
    const allRooms = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 bg-blue-100 rounded-2xl">
                {
                    allRooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default AllRooms;
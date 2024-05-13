import { useLoaderData } from "react-router-dom";
import Room from "../FeatureRooms/Room";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const AllRooms = () => {
    const {loading}=useContext(AuthContext)
    const allRooms = useLoaderData()
    if (loading) {
        return  <div className="flex gap-3 items-center justify-center min-h-screen">
              <span className="loading loading-ball loading-xs"></span>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
          </div>
      }
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
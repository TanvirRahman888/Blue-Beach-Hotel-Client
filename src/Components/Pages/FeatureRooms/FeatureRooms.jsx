import { useContext, useEffect, useState } from "react";
import Room from "./Room";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const FeatureRooms = () => {
    
    const {apiLink,loading}=useContext(AuthContext)
    const [featuresRooms, setFeatureRooms]=useState([])
    useEffect(()=>{
        fetch(`${apiLink}/allrooms`)
        .then(res=>res.json())
        .then(data=>setFeatureRooms(data))
    },[apiLink])
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
            <h2 className="text-2xl font-semibold">Features Rooms {featuresRooms.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 bg-blue-100 rounded-2xl">
            {
                featuresRooms.slice(0,3).map(room=><Room key={room._id} room={room}></Room>)
            }
            </div>
        </div>
    );
};

export default FeatureRooms;
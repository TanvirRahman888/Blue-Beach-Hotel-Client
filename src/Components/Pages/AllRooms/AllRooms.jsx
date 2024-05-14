import { useLoaderData } from "react-router-dom";
import Room from "../FeatureRooms/Room";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";


const AllRooms = () => {
    const { loading, apiLink } = useContext(AuthContext);
    const allRooms = useLoaderData();
    const [sortRoom, setSortRoom] = useState([]);

    const [sort, setSort] = useState(true)

    const handelSortRoom = () => {
        setSort(!sort)
    }
    useEffect(() => {
        fetch(`${apiLink}/allroomsbysort`)
            .then(res => res.json())
            .then(data => setSortRoom(data))
    }, [apiLink])

    if (loading) {
        return <div className="flex gap-3 items-center justify-center min-h-screen">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    }
    return (
        <div className="bg-blue-100 rounded-2xl ">
            <Helmet><title>Travel with Tanvir | All Room</title></Helmet>
            <div className="flex justify-end">
            <button onClick={handelSortRoom} className="btn btn-outline m-4">{sort? "Sort by Cost":"Default"}</button>
            </div>
            {
                sort ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
                        {
                            allRooms.map(room => <Room key={room._id} room={room}></Room>)
                        }
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
                        {
                            sortRoom.map(room => <Room key={room._id} room={room}></Room>)
                        }
                    </div>
            }
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
                {
                    allRooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
                {
                    allRooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div> */}
        </div>
    );
};

export default AllRooms;
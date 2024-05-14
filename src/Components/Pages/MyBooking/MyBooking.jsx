import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const MyBooking = () => {
    const loadedList = useLoaderData();
    const [myBooking, setMyBooking] = useState(loadedList)
    const { apiLink } = useContext(AuthContext);
    
    console.log(myBooking);
    const handelCancelBooking = (_id) => {
        console.log("Handel Cancel ID", _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${apiLink}/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setMyBooking(prevBooking => prevBooking.filter(item => item._id !== _id));

                            Swal.fire({
                                title: "Cancel!",
                                text: "Your Booking Room is Canceled.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handelConfirmBooking = (id) => {
        console.log("Handel Confirm ID", id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${apiLink}/bookings/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify({status: 'confirm'})
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            // const remaining=myBooking.filter((item => item._id !== id));
                            // const confirmed=myBooking.find((item => item._id === id));
                            // confirmed.status="Confirmed";
                            // const newMyBookings=[confirmed, ...remaining ]
                            // setMyBooking(newMyBookings)


                            Swal.fire({
                                title: "Confirm!",
                                text: "Your Booking Room is Confirm.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <Helmet><title>Travel with Tanvir | My Booking</title></Helmet>
            <h2>MyBooking {myBooking.length}</h2>
            <div className="overflow-x-auto">
                <table className="table border-2">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-black text-center">
                            <th>Description</th>
                            <th>Adult</th>
                            <th>Child</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Cost Per Night</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBooking.map(list => <tr key={list._id} className="text-center">
                                <td><div className="font-bold">{list.roomDescription}</div></td>
                                <td><div className="font-bold">{list.adult}</div></td>
                                <td><div className="font-bold">{list.child}</div></td>
                                <td><div className="font-bold">{list.from}</div></td>
                                <td><div className="font-bold">{list.to}</div></td>
                                <td><div className="font-bold">{list.pricePerNight}</div></td>
                                <td className="space-x-2">
                                    <button onClick={() => handelCancelBooking(list._id)} className="btn btn-sm btn-outline">Cancel Booking</button>
                                    <button onClick={() => handelConfirmBooking(list._id)} className="btn btn-sm btn-outline">Confirm Booking</button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBooking;
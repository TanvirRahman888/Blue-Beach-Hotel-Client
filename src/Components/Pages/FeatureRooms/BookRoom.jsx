import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const BookRoom = () => {
    const {apiLink}=useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const bookRoom = useLoaderData()
    const navigate = useNavigate();

    // console.log(bookRoom);
    const handelBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const from = form.startDate.value;
        const to = form.toDate.value;
        const adult = form.numOfAdult.value;
        const child = form.numOfChild.value;
        const roomID = bookRoom?._id;
        const roomDescription = bookRoom?.description;
        const pricePerNight = bookRoom?.pricePerNight;
        const images = bookRoom?.images[0];
        const bookingInfo = {
            guestName:name,
            email,
            from,
            to,
            adult,
            child,
            roomID,
            roomDescription,
            pricePerNight,
            images

        }

        fetch(`${apiLink}/bookings`,{
            method:"POST",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(bookingInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.insertedId);
            if (data.insertedId) {
                // Swal.fire({
                //     position: "top",
                //     icon: "success",
                //     title: "Your Rooming is Listed in My Booking page.",
                //     text: "Please Confirm your booking",
                //     showConfirmButton: false,
                //     timer: 1500
                //   });   
                  fetch(`${apiLink}/bookings/${data.insertedId}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: 'confirm' })
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount > 0) {
                            
                            fetch(`${apiLink}/confirmbooking/${roomID}`)
                                .then(res => res.json())
                                .then(data => {
                                    const newId = data._id
                                    // console.log(data._id)
                                    fetch(`${apiLink}/confirmbooking/${newId}`, {
                                        method: 'PATCH',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify({ availability: false })
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            form.reset();
                                            navigate('/allrooms')
                                            Swal.fire({
                                                title: "Confirmed!",
                                                text: "Booking Confirmed.",
                                                timer: 4000,
                                                icon: "success"
                                            });
                                        })
                                });
                        }
                    })  
                  
            
            }

            
        })
    }
    return (
        <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">
            <Helmet><title>Travel with Tanvir | Book Room</title></Helmet>
            <form onSubmit={handelBook} className="card-body grid grid-cols-1 md:grid-cols-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" defaultValue={user?.displayName} name="name" disabled className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" defaultValue={user?.email} name="email" disabled className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stay From</span>
                    </label>
                    <input type="date" placeholder="Stay From" name="startDate" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stay To</span>
                    </label>
                    <input type="date" placeholder="Stay To" name="toDate" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of Adult Guest</span>
                    </label>
                    <input type="number" placeholder="Number of Adult Guest" name="numOfAdult" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of Child Guest</span>
                    </label>
                    <input type="number" placeholder="Number of Child Guest" name="numOfChild" defaultValue={0} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6 col-span-full">
                    <button className="btn btn-primary">Want to Book This Room</button>
                </div>
            </form>
        </div>
    );
};

export default BookRoom;
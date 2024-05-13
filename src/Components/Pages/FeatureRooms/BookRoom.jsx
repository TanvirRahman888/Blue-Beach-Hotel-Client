import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const BookRoom = () => {
    const {apiLink}=useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const bookRoom = useLoaderData()
    console.log(bookRoom);
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
            console.log(data);
        })
    }
    return (
        <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">
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
                    <button className="btn btn-primary">Book This Room</button>
                </div>
            </form>
        </div>
    );
};

export default BookRoom;
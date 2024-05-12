import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const BookRoom = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="card shrink-0 w-full shadow-2xl bg-base-100 ">
            <form className="card-body grid grid-cols-1 md:grid-cols-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" defaultValue={user.displayName} disabled className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" defaultValue={user.email} disabled className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stay From</span>
                    </label>
                    <input type="date" placeholder="Stay From" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stay To</span>
                    </label>
                    <input type="date" placeholder="Stay To" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of Adult Guest</span>
                    </label>
                    <input type="number" placeholder="Number of Adult Guest" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of Child Guest</span>
                    </label>
                    <input type="number" placeholder="Number of Child Guest" defaultValue={0} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6 col-span-full">
                    <button className="btn btn-primary">Book This Room</button>
                </div>
            </form>
        </div>
    );
};

export default BookRoom;
import { useLoaderData } from "react-router-dom";

const MyBooking = () => {
    const myBooking = useLoaderData();
    //  const {roomDescription, from, pricePerNight, to, child, adult}=myBooking;
    console.log(myBooking);
    return (
        <div>
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
                        {/* row 1 */}
                        {/* <tr>
                            <td><div className="font-bold">{roomDescription}</div></td>
                            <td><div className="font-bold">{adult}</div></td>
                            <td><div className="font-bold">{child}</div></td>
                            <td><div className="font-bold">{from}</div></td>
                            <td><div className="font-bold">{to}</div></td>
                            <td><div className="font-bold">{pricePerNight}</div></td>
                            <td>
                                <button className="btn btn-ghost">Edit Booking</button>
                                <button className="btn btn-ghost">Cancel Booking</button>
                            </td>
                        </tr> */}
                        {/* row 2 */}
                        {
                            myBooking.map(list=><tr key={list._id} className="text-center">
                                <td><div className="font-bold">{list.roomDescription}</div></td>
                                <td><div className="font-bold">{list.adult}</div></td>
                                <td><div className="font-bold">{list.child}</div></td>
                                <td><div className="font-bold">{list.from}</div></td>
                                <td><div className="font-bold">{list.to}</div></td>
                                <td><div className="font-bold">{list.pricePerNight}</div></td>
                                <td className="space-x-3">
                                    <button className="btn btn-outline">Edit Booking</button>
                                    <button className="btn btn-outline">Cancel Booking</button>
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
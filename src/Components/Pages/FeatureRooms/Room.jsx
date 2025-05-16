import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Room = ({ room }) => {

    console.log(room);
    const { availability, description, images, pricePerNight, reviews, roomSize, specialOffers, _id } = room;
    return (
        
        <div className="flex flex-col gap-2 border p-5 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-blue-300 hover:to-cyan-300" data-aos="zoom-in-up">
            <h1 className="text-2xl font-bold">{description}</h1>
            <img src={images[0]} alt="" className=" flex-grow focus:touch-pan-x h-full"  />
            <div className="flex justify-between"><p><span className="font-bold">Cost:</span> ${pricePerNight}</p> <p><span className="font-bold">Room Size:</span> {roomSize}</p></div>
            <p><span className="font-bold">Offers:</span> {specialOffers || "N/A"} </p>
            <div className="flex justify-between">
            <p><span className="font-bold">Availability:</span> {
                availability ?
                    "Available"
                    :
                    "Not Available"
            }</p>
           
            {
                Array.isArray(reviews)?<p>{reviews.length} reviews</p> : <p>No Review</p>
            }
            </div>
            <Link to={`/roomdetails/${_id}`}><button className="btn btn-outline bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue-300 hover:to-blue-400">View Details</button></Link>
        </div>
        
    );
};

export default Room;
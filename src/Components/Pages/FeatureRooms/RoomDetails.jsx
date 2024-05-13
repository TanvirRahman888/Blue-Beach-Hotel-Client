import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const roomDetails = useLoaderData()
    const { availability, description, images, pricePerNight, roomSize, specialOffers, _id, reviews } = roomDetails;


    return (
        <div className="card md:w-2/3 my-7 bg-base-100 shadow-xl mx-auto">
            <Helmet><title>Travel with Tanvir | Room Details</title></Helmet>
            <figure><Carousel
                autoPlay={true}
                stopOnHover={true}
                infiniteLoop={true}
            >
                {
                    images.map((room, idx) => <img key={idx} src={room} />)

                }
            </Carousel></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {description}
                    <div className="badge badge-secondary">{availability ? "Available" : "Not Available"}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex justify-between"><p><span className="font-bold">Cost:</span> ${pricePerNight}</p> <p><span className="font-bold">Room Size:</span> {roomSize}</p></div>
                <p><span className="font-bold">Offers:</span> {specialOffers || "N/A"} </p>
                {
                    availability ?
                        <Link to={`/bookroom/${_id}`}><button className="btn btn-outline bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue-300 hover:to-blue-400">Book Room</button></Link>
                        :
                        <Link to={"/"}><button className="btn btn-outline bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue-300 hover:to-blue-400">All</button></Link>
                }

            </div>
        </div>
    );
};

export default RoomDetails;
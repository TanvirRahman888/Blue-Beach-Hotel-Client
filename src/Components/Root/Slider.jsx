import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <Carousel 
        autoPlay={true}
        stopOnHover={true}
        infiniteLoop={true}
        >
                <div>
                    <img src="https://intermetal.com/wp-content/uploads/2018/06/Hotel-Room-Banner.jpg" className="max-h-[260px] md:max-h-[560px]"/>
                     <p className="legend font-bold">Business Class Rooms</p>

                </div>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/038/988/112/non_2x/ai-generated-modern-luxury-bedroom-hotel-interior-design-concept-background-banner-template-photo.jpg" className="max-h-[260px] md:max-h-[560px]"/>
                     <p className="legend font-bold">Economy Class Rooms</p>
                </div>
                <div>
                    <img src="https://intermetal.com/wp-content/uploads/2018/06/Hotel-Room-Banner.jpg" className="max-h-[260px] md:max-h-[560px]"/>
                     <p className="legend font-bold">Budget Friendly Rooms</p>

                </div>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/038/988/112/non_2x/ai-generated-modern-luxury-bedroom-hotel-interior-design-concept-background-banner-template-photo.jpg" className="max-h-[260px] md:max-h-[560px]"/>
                     <p className="legend font-bold">Family Rooms</p>
                </div>
                
            </Carousel>
    );
};

export default Slider;
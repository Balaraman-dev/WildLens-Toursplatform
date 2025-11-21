import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BgImage from "@/components/BgImage";
import CardGrp from "./CardGrp";
import Header from "@/components/Header";
import home from "@/assets/bg/home.png";

const Home = ( {tours} ) => {
    return ( 
        <div className="md:p-8 md:mt-4 p-5">
            <BgImage picture={home}>

            </BgImage>

            <div className="sm:w-1/2 w-full flex flex-col sm:mt-4">
                    <Header/>
                <div className="mt-5 h-[250px] w-full ">
                    { (tours && tours.length != 0) ? <CardGrp tours={tours}></CardGrp> : <div>Loading...</div>}
                </div>

                <div className="sm:mt-8 md:text-xl text-md">
                    <p>At wildLens, we believe in creating unforgettable experiences that connect you with the heart and soul of every destination. With expertly crafted itineraries, local guides, and unparalleled customer service, we make your dream vacations come true.</p>
                </div>

                <p className="sm:mt-8 md:text-xl text-md  text-cyan-800">Your Adventure Awaits : Explore, Dream, Discover</p>
                <Link to="/tours" className="bg-blue-600 sm:w-1/4 mt-4 sm:mt-8 text-white font-semibold py-2 px-4 sm:px-2 text-center rounded-4xl m-auto">Start Your Journey</Link>
            </div>
        </div>
     );
}
 
export default Home;

Home.propTypes = {
    tours: PropTypes.array
}
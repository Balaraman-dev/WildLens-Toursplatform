import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import star from "@/assets/icons/star.svg"

const Card = ({ tour, className = '' }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tours/${tour["_id"]}`, { state:{ tour } } );
  }

  const rating = parseInt(((Math.random()) * 10) % 5 + 1 );

  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`} onClick={handleClick}>
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <img src={`${config.API_URI}${tour.image}`} alt="image" className="w-full h-32 sm:h-48 object-cover" />
        {/* <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
          {tour.offer}% off
        </div> */}
      </div>
      <div className="p-3 border-x border-b border-gray-300 rounded-b-2xl">
        <h4 className="text-base font-bold line-clamp-1">{tour.name}</h4>
        <h5 className="text-sm text-gray-600 line-clamp-2 mt-1">{tour.description}</h5>
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-1">
            {Array.from({ length: rating }, (_, ind) => (
              <img key={ind} width="16px" src={star} alt="Rating Star" />
            ))}
          </div>
          <h4 className="text-base font-bold text-blue-600">₹{tour.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  tour: PropTypes.object.isRequired,
  className: PropTypes.string
}

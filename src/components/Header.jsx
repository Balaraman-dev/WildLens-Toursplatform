import PropTypes from "prop-types";

const Header = ({ className = '' }) => {
    return (
        <div className='w-full'>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-2 ">Discover the World's Wonder With</h2>
            <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 ">WildLens Tours</h3>
        </div>
    );
};

export default Header;

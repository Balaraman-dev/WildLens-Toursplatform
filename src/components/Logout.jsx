import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    }

    return ( 
        <button className="absolute top-15 right-4 sm:top-12 sm:right-16 bg-red-600 text-white px-4 py-2 w-max font-bold text-sm sm:text-xl rounded-lg no-underline hover:bg-red-700 hover:scale-105 origin-center shadow-md transition-all duration-200 mx-auto mt-4" onClick={handleClick}>Logout</button>
     );
}
 
export default Logout;
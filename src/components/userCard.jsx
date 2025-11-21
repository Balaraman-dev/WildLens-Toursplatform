import { useState, useEffect } from "react";
import Profile from '@/assets/icons/profile.svg';
import axiosInstance from "@/axiosInstance";
import { PropTypes } from "prop-types";

const UserCard = ({ className, ...props }) => {

    const [ user, setUser ] = useState( {} );
    const [ logIn, setLogin ] = useState( false );

    useEffect( () => {
        let getData = async() => {
            const resp = await axiosInstance.get('/users/profile');
            setUser( resp["data"] );
        }
        
        getData();

    }, []);

    useEffect( () => {
        if( localStorage.getItem('authToken')) {
            setLogin( true );
        }

    }, [logIn])

    if( logIn ) {

        return (
            <div className={`user_img_tags w-[25%] flex items-center mt-8 ${className ? className : ''}`} {...props}>
                <img src={Profile} alt=""  className='img sm:w-1/4 w-3/4' />
                <div className="user_det">
                    <h3 className='sm:text-3xl font-bold'>{user.fullName}</h3>
                    <h3 className='sm:text-2xl'>{user.email}</h3>
                </div>
            </div>
       );
    } else {
        return (<div className={`${className ? className : ''}`} {...props}>
            <button className="absolute top-24 right-40 scale-150 bg-red-600 text-white px-4 py-2 w-max font-bold text-sm md:text-xl rounded-lg no-underline hover:bg-red-700 hover:scale-[160%] origin-center shadow-md transition-all duration-200 mx-auto mt-4" >LogIn</button>
        </div>);
    }
}

export default UserCard;

UserCard.propTypes = {
    className: PropTypes.string
}
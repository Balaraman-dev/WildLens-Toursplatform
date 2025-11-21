import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import axiosInstance from '@/axiosInstance';
import BookingRows from './BookingRows.jsx';
import BgImage from '@/components/BgImage';
import Logout from '@/components/Logout';
import UserCard from '@/components/userCard';

const User = () => {

    const [ bookings, setBookings ] = useState( [] )
    const [trigger, setTrigger] = useState( true );
    const navigate = useNavigate();

    useEffect( () => {
        if( !localStorage.getItem( 'authToken' ) ) {
            navigate("/auth")
        }
    }, [navigate])

    useEffect( () => {

        let getData = async() => {
            const book_resp = await axiosInstance.get('/bookings/user');
            setBookings( Object.values(book_resp["data"]) ) ;
        }

        getData();
    }, [trigger]);

    return (
        <div className="sm:p-8 p-4 relative w-full min-h-screen">
            <BgImage />
            <Logout />

            <Header />
            <UserCard />
            <div className="p-4 md:p-8 w-full">
                <div className="max-w-6xl mx-auto">
                    <h2 className='text-xl md:text-3xl font-bold mb-4'>Your Bookings</h2>
                    <div className="overflow-x-auto">
                        <table className='w-full bg-white bg-opacity-25 border-collapse'>
                            <thead className='font-bold bg-blue-600 text-white'>
                                <tr className="">
                                    <th className="p-2 text-sm sm:text-lg text-center">Tour</th>
                                    <th className="p-2 text-sm sm:text-lg text-center">Booking date</th>
                                    <th className="p-2 text-sm sm:text-lg text-center">Status</th>
                                    <th className="p-2 text-sm sm:text-lg text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map( x => (
                                    <BookingRows key={x["_id"]} booking={x} trigger={setTrigger}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;

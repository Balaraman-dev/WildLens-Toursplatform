import { PropTypes } from "prop-types";
import axiosInstance from "@/axiosInstance";

const BookingRows = ( {booking, trigger} ) => {

    const handleClick = async () => {
        let resp = await axiosInstance.delete(`/bookings/${booking["_id"]}`);
        if( resp["data"].ok ) {
            window.alert("Booking Removed Successfully");
            trigger(x => !x);
        }
    }

    return (
        <tr className="shadow-sm">
            <td className="text-center sm:text-lg text-xs px-3 py-2">{booking.tourId.name}</td>
            <td className="text-center sm:text-lg text-xs px-3 py-2">{new Date(booking.bookingDate).toISOString().split("T")[0]}</td>
            <td className="text-center sm:text-lg text-xs px-3 py-2">{booking.status}</td>
            <td className="text-center px-3 py-2">
                <button
                    onClick={handleClick}
                    className="w-24 h-8 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-md transition-colors duration-200 transform hover:scale-105"
                >
                    cancel
                </button>
            </td>
        </tr>
    );
}

export default BookingRows;

BookingRows.propTypes = {
    booking: PropTypes.object,
    trigger: PropTypes.func
}
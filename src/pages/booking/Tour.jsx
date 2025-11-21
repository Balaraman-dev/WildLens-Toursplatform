import Header from "@/components/Header";
import config from "@/config";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Tour = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { tour } = location.state || {} ;

    const [ tourDate, setDate ] = useState( tour.schedule.start );

    const handleClick = () => {
        navigate( `/tours/book/${tour["_id"]}`, { state: { tour }})
    }

    return ( 
        <div className="w-[100vw] flex items-center justify-center flex-col py-4">
        <div className=" flex sm:flex-row flex-col justify-center items-center p-4 sm:p-12">

            <div className="w-full sm:w-1/2 flex-shrink-0 flex flex-col justify-center items-center gap-4 sm:p-4">
                <Header className="self-start"/>
               
                <div className="p-1 sm:p-4 w-full">
                    <p className="sm:text-3xl text-lg font-bold">{tour.name} Package</p>
                    <p className="text-pretty mt-6 text-md sm:text-xl text-justify">{tour.description}</p>
                </div>

            </div>
            
            <div className="sm:w-1/2 w-full flex-shrink-0 flex flex-col justify-center gap-8">
                <img src={ `${config.API_URI}${tour.image}` } alt="Tour Image" className="w-full sm:w-8/12 sm:h-[45vh] overflow-y-hidden object-cover object-center mx-auto sm:rounded-tl-xl sm:rounded-br-xl sm:rounded-tr-[161px] sm:rounded-bl-[161px] rounded-2xl" />

            
                <ul className="sm:text-2xl flex flex-col justify-center items-center gap-4 mt-4">

                    <li className="flex list-disc w-3/4 m-auto sm:w-1/2">
                    <p className="font-bold w-1/3 m-auto">Dates : </p>
            
                        <select name="tour-date" className="bg-white border rounded-xl sm:border-2 px-2 py-1 sm:px-4 sm:py-2 sm:text-xl w-2/3 flex-shrink-0 overflow-x-visible" value={tourDate} onChange={ e => setDate( e.target.value )}>
                            <option value=""></option>
                            <option value={tour.schedule.start}>{ new Date(tour.schedule.start).toISOString().split("T")[0] } - { new Date( tour.schedule.end).toISOString().split("T")[0] }</option>
                        </select>
                    </li>


                    <li className="flex list-disc w-3/4 m-auto sm:w-1/2">
                        <p className="font-bold w-1/3">Price : </p>
                        
                        <p className=" w-2/3">₹ {tour.price} /Person</p>
                    </li>

                    <li className="flex list-disc w-3/4 m-auto sm:w-1/2">
                        <p className="font-bold w-1/3">Slots : </p>
                
                        <p className=" w-2/3">{tourDate ? tour.availableSlots : 0}</p>
                    </li>
                </ul>
            </div>
        </div>
            <button className="bg-[#0094FF]  m-auto text-white px-4 py-2 w-1/2 sm:w-1/8 font-bold text-xl rounded-lg no-underline hover:bg-[#3268de] hover:scale-105 origin-center shadow-md transition-all duration-200 mx-auto mt-4" onClick={handleClick}>Book Now</button>

        </div>

     );
}
 
export default Tour;
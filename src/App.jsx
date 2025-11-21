import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

import Home from "@/pages/home/Home.jsx";
import Tours from "./pages/tours/Tours.jsx";
import Auth from "./pages/auth/auth.jsx";
import Tour from "./pages/booking/Tour.jsx";
import BookTour from "./pages/booking/BookTour.jsx"
import User from "./pages/user/User.jsx";
import history from "./history";


const App = () => {

  const [ tours, setTours ] = useState( [] );

    useEffect( () => {
        let getData = async () => {
            let resp = await axios.get(`${config.API_URI}/tours/`);

            setTours( Object.values(resp["data"]) );
        }
        getData();
    }, [])

  return ( 
    <div className="overflow-x-hidden">
      <Router history={history}>
        <Routes>
          <Route path="/" element={ <Home tours={tours}/>} />
          <Route path="/auth/*" element={ <Auth />} />
          <Route path="/tours" element={ <Tours tours={tours}/> } />
          <Route path="/tours/:id" element={ <Tour /> } />
          <Route path="/tours/book/:id" element={ <BookTour /> } />
          <Route path="/user" element={ <User /> } />
        </Routes>
      </Router>
    </div>
   );
}
 
export default App;
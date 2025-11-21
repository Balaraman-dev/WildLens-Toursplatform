import { PropTypes } from "prop-types";

import Card from "@/components/Card";

const CardGrp = ( { tours } ) => {
    return (    
        <div className="flex md:-my-12 -my-4  sm:-ml-20 gap-2 sm:scale-[70%] scale-60 justify-center items-center">

            <Card tour={tours[1]} className="w-4/12 z-10 -rotate-[10deg] scale-[85%] hover:z-50 hover:-rotate-[5deg] hover:scale-100 origin-bottom-right"></Card>
            <Card tour={tours[0]} className="w-4/12 z-20 hover:z-50 hover:scale-105"></Card>
            <Card tour={tours[2]} className="w-4/12 z-10 rotate-[10deg] scale-[85%] hover:z-50 hover:rotate-[5deg] hover:scale-100 origin-bottom-left"></Card>

        </div>
     );
}
 
export default CardGrp;


CardGrp.propTypes = {
    tours: PropTypes.array.isRequired,
}
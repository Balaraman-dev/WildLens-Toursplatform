import { PropTypes } from "prop-types";
import Card from "@/components/Card";

const Category = ( { cat, trips } ) => {

    return ( 
         
        <div className="flex flex-col gap-2 p-2 pb-0 w-full mt-4">
            <p className="text-start text-lg sm:text-3xl font-bold w-max">{cat} </p> 
            <div className="flex gap-12 overflow-x-scroll p-8 pb-8 w-full transition-all duration-300">
                {trips.map( x => (
                    <Card key={x.id} tour={x} className="sm:w-1/6 w-1/3 shrink-0 hover:scale-105 transition-all duration-300"></Card>
                ))}
            </div>
        </div> 
     );
}
 
export default Category;

Category.propTypes = {
    cat: PropTypes.string,
    trips: PropTypes.array
}


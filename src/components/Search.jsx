import { PropTypes } from "prop-types";
import searchIcon from "@/assets/icons/search.svg";

const Search = ( { className, search, setSearch, ...props} ) => {

    return ( 
        <div className={`${ className ? className : ''} relative sm:w-2/5 w-4/5 rounded-2xl mt-4 sm:mt-0`}>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center w-12 justify-center hover:bg-[#2893F6] bg-[#808080] rounded-l-2xl">
                <img src={searchIcon} alt="Search Icon" className="w-2/5"/>
            </div>
            <input type="text" className={`w-full px-4 block rounded-2xl py-1 sm:py-2 pl-16 pr-20 text-lg text-gray-900 placeholder:text-gray-400`} value={search} onChange={ e => setSearch( e.target.value )} {...props}/>
        </div>
     );
}
 
export default Search;

Search.propTypes = {
    className: PropTypes.string,
    search: PropTypes.string,
    setSearch: PropTypes.func
}
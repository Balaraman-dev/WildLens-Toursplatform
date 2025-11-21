import { PropTypes } from "prop-types";

const BgImage = ( {picture, children} ) => {
    return ( 
        <div className="hidden absolute md:flex flex-col left-[47%] bottom-[30%] w-[70vw] h-[90vh] bg-[#d6eeff] rounded-tl-[20%] rounded-tr-[0%] rounded-br-[50%] rounded-bl-[100%] -rotate-[35.2deg] -z-50">

            { picture ? <img className="relative   md:w-5/12 rotate-[35.2deg] left-[15%] top-[12%]" src={picture} alt="Image" /> : <></> }
            { children ? children : <></> }
        </div>
     );
}
 
export default BgImage;

BgImage.propTypes = {
    picture: PropTypes.string,
    children: PropTypes.Node
}
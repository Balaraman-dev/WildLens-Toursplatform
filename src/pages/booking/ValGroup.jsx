import { PropTypes } from "prop-types";

const ValGroup = ( {val, change, className} ) => {

    let handleChange = (e) => {
        try {
            let value = e.target.value;

            if( value == '' ) {
                change("1");
                return;
            }

            if( value.match(/^\d*\.?\d*$/)){
                if (parseInt(value) >= 1 || value === '') {
                    change(value);
                }
            }
        } catch ( err ) {
            console.log( err );
        }
    }

    let handleClick = ( i ) => {
        change(x => {
            const newValue = parseInt(x) + i;
            return newValue >= 1 ? `${newValue}` : "1";
        });
    }

    let handleBlur = ( ) => {
        if( val == '' || val == '-')
            change( "1" );
        else 
        change( x => `${parseInt(x)}`);
    }

    return (
        <div className={`${className ? className : ''} flex sm:w-4/6 rounded-xl bg-white border items-center justify-center`}>
            <button onClick={ () => handleClick(-1)} className="w-1/4 py-1 bg-[#0094FF] text-white text-xl hover:bg-[#3268de] transition-all duration-150 rounded-l-xl disabled:bg-gray-300">-</button>
            <input onChange={handleChange} onBlur={handleBlur} type="text" className="w-2/4 text-black text-xl text-center outline-none" value={val}/>
            <button onClick={ () => handleClick(1)} className="w-1/4 py-1 bg-[#0094FF] text-white text-xl hover:bg-[#3268de] transition-all duration-150 rounded-r-xl disabled:bg-gray-300">+</button>
        </div>
    )
}

export default ValGroup;


ValGroup.propTypes = {
    val: PropTypes.string,
    change: PropTypes.func,
    className: PropTypes.string
}
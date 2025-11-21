import Header from '@/components/Header';
import axios from 'axios';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import auth from "@/assets/bg/auth.png"

const Register = () => {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[isValid,setIsValid]=useState(true)
    const[validPass,setValidPass]=useState(true)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex=/^[a-zA-z0-9@_]{8,16}$/;
    const navigate = useNavigate();

    let passtip = "Password Must contain 8 - 16 characters\nIt can include Alphabets, digits, @ and _";

    const handlepass = (e) => {
        const pass=e.target.value;
        setPassword(pass);
        setValidPass(passRegex.test(pass));
      };

    const handleChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        setIsValid(emailRegex.test(emailInput));
      };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let body = {
        email: email,
        password: password,
        fullName: name
       }
  
      try {
        const res = await axios.post(`${config.API_URI}/auth/register`,body, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if( !res.error ){
          window.alert( res["data"]["message"] );
          navigate("/auth/");
        }
        else{
          window.alert(res["data"]["error"])
        }
      } catch (err) {
        console.log(err);
      }
    };
     
  
    return (
      <div className='w-full h-full flex flex-col sm:flex-row justify-center sm:justify-between items-center '>
        <div className="w-full sm:w-auto min-w-[250px] md:ml-32 md:my-32 flex flex-col md:gap-12 gap-4 items-center py-4 md:py-8 px-4 sm:px-0">

            <Header />
            <img src={auth} alt="image" className='w-11/12 sm:hidden' />
            
            <form className="w-full h-[200px]  flex flex-col justify-center items-center gap-3  sm:gap-6" onSubmit={handleSubmit}>
              <input 
                type="text" 
                onChange={(e)=>setName(e.target.value)} 
                placeholder='Name' 
                className='md:w-4/5 w-full px-2 py-2 rounded-2xl border-2 border-gray-500 outline-none focus:border-blue-500 transition-colors'
              />
              <input 
                type="text" 
                className={`md:w-4/5 w-full px-2 py-2 rounded-2xl border-2 outline-none transition-colors ${isValid ? 'border-gray-500 focus:border-blue-500' : 'border-red-500 text-red-600'}`}
                onChange={handleChange} 
                placeholder='Email' 
              />
              <input 
                type="password" 
                title={passtip} 
                className={`md:w-4/5 w-full  px-2 py-2 rounded-2xl border-2 outline-none transition-colors ${validPass ? 'border-gray-500 focus:border-blue-500' : 'border-red-500 text-red-600'}`}
                onChange={handlepass} 
                placeholder='Password' 
              />
              <input 
                type='submit' 
                value="Sign Up"
                className='w-2/5 px-4 py-3 border-none outline-none bg-[#2893F6] text-white rounded-[10px] font-semibold cursor-pointer hover:bg-[#0582f7] transition-colors'
              /> 
            </form>
          <h3 className="text-sm sm:text-base">Already Have An Account?<Link to="/auth/" className='ml-3 text-[#2571ff] hover:text-[#0582f7] hover:underline hover:decoration-[#0582f7] hover:underline-offset-4 transition-all duration-150 inline'>Login</Link></h3>
  
        </div>
    </div>
    )
}

export default Register

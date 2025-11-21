import axios from 'axios';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import config from '@/config';
import auth from "@/assets/bg/auth.png"

const Register = () => {

    const navigate = useNavigate();

    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[isValid,setIsValid]=useState(true)
    const[validPass,setValidPass]=useState(true)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex=/^[a-zA-z0-9@_]{8,16}$/;

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
        
    const handlelog = async (e) => {
      e.preventDefault();

      let body = {
        email: email,
        password: password,
       }
  
      try {
        let res = await axios.post(`${config.API_URI}/auth/login`,body, {
          headers: {
            'Content-Type': 'application/json'
          } 
        });
        res = res["data"];
        if( !res.error ){
           const token=res.token;
           localStorage.setItem( 'authToken', token );
           window.alert("Logged In")
           navigate("/tours");
        }
        else{
          window.alert(res.error )   
        }
      } catch (err) {
        console.log(err);
      }
     }
  
    return (
      <div className='w-full flex  sm:w-2/3 lg:w-[30vw] h-screen md:flex md:flex-col justify-center items-center '>
        <div className="w-full max-w-sm gap-[4px] p-4">
          <Header />
          <img src={auth} alt="image" className='w-11/12 sm:hidden' />
            <form className=" sm:h-[300px] flex flex-col mt-4  sm:justify-center gap-8 items-center" onSubmit={handlelog}>
              <input 
                type="email"  
                className={`w-11/12 sm:w-4/5 py-2 px-2 sm:px-4 rounded-2xl border-2 outline-none transition-colors ${isValid ? 'border-gray-500 focus:border-blue-500' : 'border-red-500 text-red-600'}`} 
                onChange={handleChange} 
                placeholder='Email' 
              />
              <input 
                type="password" 
                title={passtip} 
                className={`w-11/12 sm:w-4/5 py-2 px-2 sm:px-4  rounded-2xl border-2 outline-none transition-colors ${validPass ? 'border-gray-500 focus:border-blue-500' : 'border-red-500 text-red-600'}`}
                onChange={handlepass} 
                placeholder='Password' 
              />
              <input 
                type='submit' 
                value='Login'
                className='w-2/5 px-4 py-2 border-none outline-none bg-[#2893F6] text-white rounded-[10px] font-semibold cursor-pointer hover:bg-[#0582f7] transition-colors'
              />
            </form>
          <h3 className=" w-full text-center mt-4 sm:mt-0 text-sm sm:text-lg text-md  ">Create an account?<Link to="/auth/register" className='ml-3 text-[#2571ff] hover:text-[#0582f7] hover:underline hover:decoration-[#0582f7] hover:underline-offset-4 transition-all duration-150 inline m-auto'>register</Link></h3>
        </div>
    </div>
    )
}

export default Register

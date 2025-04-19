import React, { useState } from 'react'
import bg from '../assets/bg.jpg';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../assets/Netflix-logo.png';
const Modalsignin = () => {
    const {type}=useParams();
    const [inpval, setInput] = useState("");
    const navigate = useNavigate();
    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };
    function gotosignup() {
        navigate('/modal/signup')

    }
    function gotohome(){
        const obj={[inpval]:true};
        localStorage.setItem("id",JSON.stringify(obj) )
        if(!validateEmail(inpval))
            alert("Not valid Email")
        else
        navigate('/home')
    }
    return (
        <div className="">
            <div className="bg-black relative w-screen min-h-screen bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${bg})` }}>
               
                <div className='w-32 md:w-60 ml-10 md:ml-40'>
                    <img  src={`${logo}`} />
                </div>

                <div className='h-[100%] w-full  flex justify-center'>
                    <div className='bg-black text-white bg-opacity-70 w-[80%] mt-20 md:w-[30%]'>
                      <div className="lg:py-28 lg:px-20 py-16 px-8">
                            <p className='font-bold  text-5xl md:text-7xl mb-10 md:mb-20' >{type=="signin"?"Sign in":"Sign up"} </p>
                            {type=="signup"&&(
                                <input type='text' placeholder='Username' className='placeholder:text-3xl md:text-4xl md:placeholder:text-4xl text-white p-4 md:p-8 text-3xl w-[100%] mb-10 bg-black/30 border border-gray-400 '/>
                            )}
                            <input type='email' placeholder='Email address' className='placeholder:text-3xl md:text-4xl md:placeholder:text-4xl md:p-8 text-white  p-4 text-3xl w-[100%]  bg-black/30 border border-gray-400  ' onChange={(e) => { setInput(e.target.value) }}/>
                            <input type='Password' placeholder='Password' className='placeholder:text-3xl text-white p-4 text-3xl md:text-4xl md:p-8 md:placeholder:text-4xl w-[100%] mt-10 bg-black/30 border border-gray-400 '/>
                            <button className='rounded-md bg-red-600 text-white mt-10 md:h-28 md:text-[39px] w-[100%] text-[30px] font-bold p-4' onClick={gotohome}>{type=="signin"?"Sign in":"Sign up"}</button>
                            {type=="signin"&&(
                                <div>
                                   <p className='text-2xl md:text-4xl mt-6 md:mt-10'>New to Netflix?</p>
                                   <div className='pt-2 md:pt-10 md:text-4xl text-2xl underline' onClick={gotosignup}>  Sign up now</div>
                                </div>
                            )}
                            <p className='pt-5 md:pt-10 text-gray-400 text-xl md:text-3xl line-clamp-2 md:line-clamp-none'>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot.</p>
                            <p className='text-blue-400 underline pt-5 md:pt-10 text-xl md:text-3xl'>Learn more</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modalsignin

import React, { useState } from 'react'
import bg from '../assets/bg.jpg';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Netflix-logo.png';
const Modalsignin = () => {
    const [inpval, setInput] = useState("");
    const navigate = useNavigate();
    // const validateEmail = (email) => {
    //     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return pattern.test(email);
    // };
    function gotofirst() {
        // if (!validateEmail(inpval))
        //     alert("not valid")
        // else {
            navigate('/')
        

    }
    return (
        <div>
            <div className=" relative m-0 p-0 h-[120vh] bg-no-repeat bg-cover " style={{ backgroundImage: `url(${bg})` }}>\
                <div >
                    <img className='h-[300ox] w-[300px] ml-[400px] ' src={`${logo}`} />
                </div>
                <div className='h-[100%] flex justify-center'>
                    <div className='bg-black text-white bg-opacity-70 h-[75%] w-[30%] mt-20'>
                        <div className='mt-32 ml-32 mr-32'>
                            <p className='font-bold  text-7xl ' >Sign in </p>
                            <input type='email' placeholder='Email address' className='placeholder:text-4xl text-white pt-8 pb-8 pl-8 text-5xl w-[100%] mt-20 bg-black/30 border border-gray-400 ' onChange={(e) => { setInput(e.target.value) }}></input>
                            <input type='Password' placeholder='Password' className='placeholder:text-4xl text-white pt-8 pb-8 pl-8 text-5xl w-[100%] mt-10 bg-black/30 border border-gray-400 '></input>
                            <button className='rounded-md bg-red-600 text-white mt-10 h-28 w-[100%] text-[30px] font-bold  mr-[400px] pl-4 pr-4' >Sign in</button>
                            <p className='text-4xl mt-10'>New to Netflix?</p>
                            <div className='pt-10 text-4xl underline' onClick={gotofirst}>  Sign up now</div>
                            <p className='pt-10 text-gray-400 text-3xl'>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot.</p>
                            <p className='text-blue-400 underline pt-10 text-3xl'>Learn more</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Modalsignin

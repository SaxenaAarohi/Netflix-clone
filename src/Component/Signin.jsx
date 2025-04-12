import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/Netflix-logo.png';
import Footer from './Footer';
const Signin = () => {
  const navigate = useNavigate();
  const { mailid } = useParams();
  function tomodal() {
    navigate('/modal')
  }
  function tohome() {
    navigate('/home')
  }
  return (

    <div >
      <div className='flex   justify-between'>
        <div className='h-[300ox] w-[300px] ml-[100px] '>
          <img src={`${logo}`} />
        </div>
        <div className=' flex text-white  text-4xl gap-10  mt-7  '>
          <button className='rounded-md  text-black h-20 w-50 text-[40px] font-bold  mr-[100px] pl-4 pr-4' onClick={tomodal}>Sign in</button>
        </div>
      </div>
      <div className=' flex justify-center items-center h-screen'>
      <div>
        <p className='text-8xl font-bold text-start'>Welcome back!<br />
          Joining Netflix is easy.</p>
        <p className='text-5xl mt-10'>Enter your password and you'll be watching in no <br /> time.</p>
        <p className='text-5xl mt-20'>Email</p>
        <p className='text-4xl font-bold mt-2'>{mailid}</p>
        <input type='password' placeholder='Enter your Password ' className='border border-gray-500 mt-10 w-[100%] p-10 text-4xl'></input>
        <button className='bg-red-500 w-[100%] text-white  text-5xl p-10  mt-10 ' onClick={tohome}>Sign in</button>
      </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Signin

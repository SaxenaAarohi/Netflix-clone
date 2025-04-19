import React, { useState } from 'react'
import search from '../assets/search.png';
import logo from '../assets/Netflix-Logo.png';

import { useNavigate } from 'react-router-dom';
const Navbar = ({color}) => {
  const [isopen,setOopen]=useState(false);
  const navigate = useNavigate();

  return (
    <div >
      <div className='flex   justify-between'>
        <div className='md:h-[200ox] mt-3 md:w-[200px] md:ml-20 h-[100px] w-[100px] ml-4'>
          <img src={`${logo}`} />
        </div>

<div
onClick={()=>setOopen(!isopen)}
className={`md:hidden text-4xl text-${color} mt-4`}
>
☰
</div>
        <div className={`flex ml-[240px] md:ml-0 flex-col md:flex-row md:space-x-10 text-white absolute md:static top-10  w-[20%] md:w-auto bg-gray-800/40 md:bg-transparent p-4 md:p-0 z-10 transition-all ease-in-out duration-300 ${
          isopen ? 'block' : 'hidden'
        } md:flex text-xl md:text-4xl md:mt-7`}>
          <p onClick={() => { navigate('/') }}> Home  </p>
          <p onClick={()=>{navigate('/tvshow')}}>TV Shows</p>
          <p onClick={() => { navigate('/home') }}> Movies</p>
          <p onClick={()=>{navigate('/getfav')}}>My List</p>
        </div>

        <div className='flex text-white text-xl md:text-4xl mr-4  mt-5 gap-6 md:gap-10 md:mr-20'>
          <img onClick={()=>{
            navigate('/search')}} className='md:h-[60px] h-[30px] w-[30px] md:w-[60px]' src={`${search}`}></img>
          {/* <p>Details</p>
          <p>bell icon</p> */}

        </div>
      </div>

    </div>
  )
}

export default Navbar

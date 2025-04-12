import React from 'react'
import search from '../assets/search.png';
import logo from '../assets/Netflix-logo.png';
const Navbar = () => {
  return (
    <div >
        <div className='flex   justify-between'>
          <div className='h-[200ox] w-[200px] ml-20'>
            <img src={`${logo}`}/>
          </div>
          <div className=' flex text-white  text-4xl gap-10  mt-7  '>
            <p> Home  </p>
           <p>TV Shows</p> 
           <p> Movies</p>
           <p> News&Popular</p>
           <p>My List</p>
            <p>Browse my languguge</p>
            
          </div>
          <div className='flex text-white text-4xl  mt-7 gap-10 mr-20'>
          <img className='h-[50px] w-[50px]' src={`${search}`}></img>
           <p>Details</p>
           <p>bell icon</p>
           
          </div>
        </div>
   
    </div>
  )
}

export default Navbar

import React from 'react'
import Popular from './Popular';
import Navbar from './Navbar';
import Details from './Details';
import { useState } from 'react';
import Footer from './Footer';
import friend from '../assets/friends.png';
import name from '../assets/friends logo.png';
import Tvdetails from './Tvdetails';
const Tvshows = () => {
    const [type,setType]=useState("tv");
      const [isclick, setClick] = useState(false);
      function closemodal(){
        setClick(false);
      }
  return (
    <>
       <div
   className="relative w-full h-[25.8vh] md:h-[105vh] bg-no-repeat bg-contain md:bg-cover"
  style={{ backgroundImage: `url(${friend})` }}
>
  <Navbar color={"black"}/>
      <div className="absolute top-1/2 ml-[20px] md:ml-[200px] text-white ">
        <img src={name}  className="h-[40px] w-[100px] md:h-[300px] md:w-[500px] mb-2" />
        <p className="text-sm md:text-4xl line-clamp-1 md:line-clamp-none">
        Follow the lives of six reckless adults living in Manhattan, as they indulge <br/>in adventures which make their lives both troublesome and happening.
        </p>
      </div>
      <div className="absolute  ml-[20px] md:ml-[200px] -bottom-1 md:bottom-56 flex flex-wrap gap-6">
    <button onClick={()=>{setClick(true)}}
    className="bg-white h-[30px] w-[80px] md:h-[70px] md:w-[190px] text-black text-7 md:text-3xl flex items-center justify-center shadow-md rounded-lg">
      <img
        className="h-[10px] w-[10px] mr-3"
        src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png"
        alt="Play"
      />
      <p >Play</p>
    </button>

    <button className="bg-gray-600/30 h-[30px] w-[80px] md:h-[70px] md:w-[190px] text-white text-7 md:text-3xl flex items-center justify-center shadow-md rounded-lg">
      <p>More info</p>
    </button>
  </div>
  {isclick && <Tvdetails  id={1668} closemodal={closemodal}/>}
</div>
<div className='text-white bg-black'>
 
 <div >
 <p className='text-2xl px-3 pt-8 pb-3 md:p-10  md:text-5xl font-bold mb-3 md:mb-10'>Popular</p>
  <Popular url={'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'} type={type}/>
 </div>
 <div>
  <p className='text-2xl p-3 md:p-10  md:text-5xl font-bold mb-3 md:mb-10'>Top-Rated</p>
   <Popular url={'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'} type={type} />
 </div>
 <div>
  <p className='text-2xl p-3 md:p-10  md:text-5xl font-bold mb-3 md:mb-10'>Latest</p>
  <Popular url={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'} type={type}/>
 </div>
 <div>
  <p className='text-2xl p-3 md:p-10  md:text-5xl font-bold mb-3 md:mb-10'>Upcoming</p>
  <Popular url={'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'} type={type}/>
 </div>
</div>

 <Footer/>

    </>
  )
}

export default Tvshows

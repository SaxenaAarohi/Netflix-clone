import React, { useState } from 'react'
import Navbar from './Navbar'
import Popular from './Popular'
import Footer from './Footer'
import Details from './Details'
import iron from '../assets/spider.webp';
import name from '../assets/logospider.png';

const Home = () => {
  const [type,setType]=useState("movie");
    const [isclick,setClick]=useState(false);
    function closemodal() {
      setClick(false);
    }
  return (
    <>
      <div
        className="relative w-full h-[26vh] md:h-[105vh] bg-no-repeat bg-contain md:bg-cover"
        style={{ backgroundImage: `url(${iron})` }}
      >
        <Navbar color={"black"}/>
        <div className="absolute top-1/2 ml-[20px] md:ml-[200px] text-white">
          <img src={name} className="h-[40px] w-[100px] md:h-[300px] md:w-[600px] mb-2" />
          <p className="text-sm md:text-4xl md:w-full line-clamp-1 w-[80%] text-white md:line-clamp-none">
          Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental<br/> monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow <br/> hero with mysterious origins.
          </p>
        </div>
        <div className="absolute ml-[20px] md:ml-[200px] -bottom-1 md:bottom-56 flex flex-wrap gap-6">
          <button
          onClick={()=>setClick(true)}
            className="bg-white h-[30px] w-[80px] md:h-[70px] md:w-[190px] text-black text-7 md:text-3xl flex items-center justify-center shadow-md rounded-lg"
          >
            <img
              className="h-[10px] w-[10px] mr-3"
              src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png"
              alt="Play"
            />
            <p>Play</p>
          </button>

          <button className="bg-gray-600/30 h-[30px] w-[80px] md:h-[70px] md:w-[190px] text-white text-7 md:text-3xl flex items-center justify-center shadow-md rounded-lg">
            <p>More info</p>
          </button>
        </div>
         {isclick && <Details  id={ 429617} closemodal={closemodal} />} 
      </div>

      <div className='text-white bg-black'>
        <div>
          <p className='text-2xl px-3 pt-8 pb-3 md:p-10 md:text-5xl font-bold mb-3 md:mb-10'>Popular on Netflix</p>
          <Popular
            url={'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'} type={type}
            // setClick={setClick}
            // closemodal={closemodal}
            // isclick={isclick}
          />
        </div>

        <div>
          <p className='text-2xl p-3 md:p-10 md:text-5xl font-bold mb-3 md:mb-10'>Blockbuster Movies</p>
          <Popular
            url={'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'} type={type}
          />
        </div>

        <div>
          <p className='text-2xl p-3 md:p-10 md:text-5xl font-bold mb-3 md:mb-10'>Currently in Theaters</p>
          <Popular
            url={'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'} type={type}
          />
        </div>

        <div>
          <p className='text-2xl p-3 md:p-10 md:text-5xl font-bold mb-3 md:mb-10'>Upcoming</p>
          <Popular
            url={'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'} type={type}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

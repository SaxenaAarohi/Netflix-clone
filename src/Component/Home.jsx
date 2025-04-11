import React from 'react'
import Navbar from './Navbar'
import Popular from './Popular'
import Footer from './Footer'
import Blockbuster from './Blockbuster'
import Currentely from './Currentely'

const Home = () => {
  return (
    <>
    <div className="relative m-0 p-0 h-screen bg-no-repeat bg-cover bg-[url('https://wallpapercave.com/wp/wjT4RUv.jpg')]">
    <Navbar/>
    </div>
    <div className='mb-20'>
    <button className='absolute bg-white h-[70px] w-[190px] ml-[700px] text-black text-3xl  flex' >
       <img className='h-[40px] w-[40px] p-[10px] mt-[15px] ml-[20px]' src='https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png'/> 
       <p className='mt-[15px] ml-[10px] text-center'>Play</p>
    </button>
    <button className='absolute bg-gray-400/30 h-[70px]  ml-[900px] w-[190px] '>
   <p className='text-white text-3xl'>More info</p>
    </button>
    </div>
     <div>
      <p className='text-5xl p-10 font-bold mb-10'>Popular on Netflix</p>
      <Popular/>
     </div>
     <div>
      <p className='text-5xl p-10 mb-10 font-bold'>Blockbuster Movies</p>
      <Blockbuster/>
     </div>
     <div>
      <p className='text-5xl p-10 font-bold mb-10'>Currentely in Threaters</p>
      <Currentely/>
     </div>
     <Footer/>
    </>
  )
}

export default Home

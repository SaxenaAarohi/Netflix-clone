import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaSearch } from 'react-icons/fa'
import Display from './Display'
import Griddisplay from './Griddisplay'
import { useEffect } from 'react'

const Searchmovie = () => {
    const [input,setInp]=useState("");
  const [array,setArr]=useState([]);
    async function search(){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjEyODMxODM2YmY5YTQ2ZTJmOGRkOTMyMWE4MjJmOCIsIm5iZiI6MTc0MzM1NzMwNy4yNCwic3ViIjoiNjdlOTg1N2I0Zjc0MWM3NWJiYzZiMGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.021MDxrw7rgVapf---1tXpmbafXG3yUGEZxW5tW7Vvw'
        }
      };

        const url = `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=false&language=en-US&page=1`;
        const response = await fetch(url,options);
        const val = await response.json();
        setArr(val.results) ;
 
    }
useEffect(()=>{
  const time=setTimeout(() => {
    search();
  }, 3000);
},[input])
  return (
    <div className='bg-black h-screen'>
        <Navbar color={"white"}/>
        <div className='flex justify-center items-center h-[30%]'>
        <input type='text' placeholder='Search' onKeyDown={(e)=>{
          if(e.key=='Enter')
            search();
        }} className='text-2xl p-3 md:h-[90px] h-[51px] w-[300px] md:w-[800px]  ' onChange={(e)=>{setInp(e.target.value)}}/>
        <FaSearch  className='bg-red-600 md:h-[90px] w-[50px] h-[51px] md:w-[100px]' onClick={search}/>
        </div>
        <Griddisplay newarray={array}/>
    </div>
  )
}

export default Searchmovie

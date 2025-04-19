import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Display from './Display';
import { useState } from 'react';
import Griddisplay from './Griddisplay'
import { useFetcher } from 'react-router-dom';
const Getfav = () => {
      const [array,setArr]=useState([]);
    async function getfav() {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjEyODMxODM2YmY5YTQ2ZTJmOGRkOTMyMWE4MjJmOCIsIm5iZiI6MTc0MzM1NzMwNy4yNCwic3ViIjoiNjdlOTg1N2I0Zjc0MWM3NWJiYzZiMGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.021MDxrw7rgVapf---1tXpmbafXG3yUGEZxW5tW7Vvw' // Replace with your actual token
          }
        };
          const resp = await fetch('https://api.themoviedb.org/3/account/21916125/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options);
          const data = await resp.json();
         setArr (data.results);
      }
      useEffect(()=>{
getfav();
      },[])
  return (
    <div className='bg-black h-screen'>
      <Navbar color={"white"}/>
      <p className='text-white text-3xl md:text-5xl text-center p-12 font-bold md:mb-10'>Yours Favourite</p>
      <Griddisplay newarray={array}/>
    </div>
  )
}

export default Getfav

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Details from './Details';

const griddisplay = ({newarray}) => {
 const [id,setID]=useState("");
  const [isclick, setClick] = useState(false);
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(newarray);
  }, [newarray])
  function closemodal(){
    setClick(false);
  }
  return (
 <div className='w-full text-white'>
        <div className='flex flex-wrap h-auto  bg-black space-x-7 mb-[50px] '>
          {arr && arr.length > 0 ? (
            arr.map((ele) => (
              <div onClick={() => { setClick(true) ,setID(ele.id)}} className='relative ml-7 md:w-[500px]  w-[150px] shrink-0  mb-[40px] hover:-translate-y-[40px] transition-transform duration-200 '>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
                  className='  w-full h-[100px] md:h-[450px] object-cover' />
                <p className='whitespace-normal line-clamp-2 md:line-clamp-none text-white absolute bottom-3 md:text-4xl text-xl left-3 w-full' >{ele.title || ele.name} </p>
              </div>
            ))
          ) : (
            <div className='flex w-full justify-center flex-center'>
              <div className='text-4xl font-bold '>
              No movies found.
              </div>
          
              </div>
          )}
        </div>
        {isclick && <Details id={id} closemodal={closemodal}/>}
      
      <div>
      
      </div>
    </div>
  )
}

export default griddisplay

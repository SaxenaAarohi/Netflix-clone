import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Display = ({newarray}) => {
  // const navigate=useNavigate();
  // const gotodetail=()=>{
  //   navigate('/Detail')
  // }
    const [arr, setArr] = useState([]);
    useEffect(()=>{
        setArr(newarray);
    },[newarray])
   
  return (
    <div className='w-screen'>
        <div className="overflow-x-auto hide-scrollbar">
      <div className='flex space-x-7 mb-[50px] '>
        {arr.length > 0 ? (
          arr.map((ele) => (
            <Link to={`/Detail/${ele.id}`} className='relative w-[600px] shrink-0  hover:-translate-y-[40px] transition-transform duration-200 '>
              <img
                src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
              className='  w-full h-[500px] object-cover'  />
              <p className='absolute bottom-3 text-4xl left-3' >{ele.title||ele.name} </p>
            </Link>

          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
      </div>
    </div>
  )
}

export default Display

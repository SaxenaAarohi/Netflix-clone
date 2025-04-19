import React, { useEffect, useState } from 'react';
import Details from './Details';
import Tvdetails from './Tvdetails';

const Display = ({ newarray,type }) => {
  const [arr, setArr] = useState([]);
  const [isclick,setClick]=useState(false);
  const [id,setId]=useState("");
  function closemodal() {
    setClick(false);
  }
  useEffect(() => {
    setArr(newarray);
  }, [newarray]);

  return (
    <div className='w-full text-white'>
      <div className="overflow-x-auto hide-scrollbar">
        <div className='flex gap-3 md:space-x-7 md:mb-[50px] mb-[20px]'>
          {arr && arr.length > 0 ? (
            arr.map((ele) => (
              <div
              onClick={()=>{setClick(true),setId(ele.id)}}
                key={ele.id}
                className='relative w-[100px] md:w-[500px] shrink-0 hover:-translate-y-[40px] transition-transform duration-200'
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
                  className='w-full md:h-[500px] h-[150px] object-cover'
                  alt={ele.title || ele.name}
                />
                <p className='whitespace-normal line-clamp-2 md:line-clamp-none text-white absolute bottom-3 md:text-4xl text-xl left-3 w-full'>
                  {ele.title || ele.name}
                </p>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
          {isclick && (type=="movie"?<Details id={id} closemodal={closemodal}/> :  <Tvdetails id={id} closemodal={closemodal}/>) }
       
        </div>
      </div>
    </div>
  );
};

export default Display;

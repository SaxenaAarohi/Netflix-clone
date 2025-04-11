import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
  const {id}=useParams();
  const [apidata,setData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  async function getdetails(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjEyODMxODM2YmY5YTQ2ZTJmOGRkOTMyMWE4MjJmOCIsIm5iZiI6MTc0MzM1NzMwNy4yNCwic3ViIjoiNjdlOTg1N2I0Zjc0MWM3NWJiYzZiMGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.021MDxrw7rgVapf---1tXpmbafXG3yUGEZxW5tW7Vvw'
      }
    };
 
    const res=await  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
    const data=await res.json();
 setData(data.results[0]);
  }
  getdetails();
const navigate=useNavigate();
function goback(){
    navigate(-1);
}

  return (
    <div className='text-white text-5xl h-screen'>
       <button onClick={goback}>
        Back
       </button>
       <iframe className='w-full h-full' width="560" height="315" 
       src={`https://www.youtube.com/embed/${apidata.key}` }
       title="YouTube video player" ></iframe>
    </div>
  )
}

export default Details

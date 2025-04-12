import React, { useEffect } from 'react'
import Display from './Display';
import { useState } from 'react';

const Popular = ({url}) => {
    const [array, setArray] = useState([]);
    async function getpopular(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjEyODMxODM2YmY5YTQ2ZTJmOGRkOTMyMWE4MjJmOCIsIm5iZiI6MTc0MzM1NzMwNy4yNCwic3ViIjoiNjdlOTg1N2I0Zjc0MWM3NWJiYzZiMGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.021MDxrw7rgVapf---1tXpmbafXG3yUGEZxW5tW7Vvw'
            }
          };
          try {
            const res = await fetch(url, options);
            const data = await res.json();
            setArray(data.results); 
          } catch (err) {
            console.error("Fetching failed:", err);
          }
    }
    useEffect(()=>{
        getpopular();
    },[]);
 
  return (
    <div>
      <Display newarray={array}/>
    </div>
  )
}

export default Popular

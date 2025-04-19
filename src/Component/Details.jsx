import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = ({ id , closemodal }) => {
  const [apidata, setData] = useState(null);
  const navigate = useNavigate();
  async function addfav() {
    const options = {
      method: 'POST',
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjEyODMxODM2YmY5YTQ2ZTJmOGRkOTMyMWE4MjJmOCIsIm5iZiI6MTc0MzM1NzMwNy4yNCwic3ViIjoiNjdlOTg1N2I0Zjc0MWM3NWJiYzZiMGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.021MDxrw7rgVapf---1tXpmbafXG3yUGEZxW5tW7Vvw',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        media_type: 'movie',
        media_id: id,
        favorite: true
      })

    };

    const res = await fetch(`https://api.themoviedb.org/3/account/21916125/favorite?`, options);
    alert("added");
  }


  async function getdetails() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjEyODMxODM2YmY5YTQ2ZTJmOGRkOTMyMWE4MjJmOCIsIm5iZiI6MTc0MzM1NzMwNy4yNCwic3ViIjoiNjdlOTg1N2I0Zjc0MWM3NWJiYzZiMGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.021MDxrw7rgVapf---1tXpmbafXG3yUGEZxW5tW7Vvw'
      }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
    const data = await res.json();
    const trailer = data.results.find(
      video => video.type === "Trailer" && video.site === "YouTube"
    );
    setData(trailer);

  }


  useEffect(() => {
    getdetails();
  }, [id]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50"  style={{ marginLeft: 0 }} onClick={closemodal} >
      <div className='relative text-black bg-white rounded-2xl h-[47%] w-[90%] md:h-[80%] md:w-[80%] '>
        <button className='absolute -top-4 md:-top-8 md:text-6xl text-2xl -right-3 md:-right-9 text-white' onClick={closemodal}>X</button>
        {apidata && apidata.key ? (
          <div className=" w-full h-[80%] ">
            <iframe
              className=" w-full h-full rounded-2xl shadow-2xl transform scale-100 transition-transform duration-500 ease-in-out"
              src={`https://www.youtube.com/embed/${apidata.key}`}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <div className='pl-2 md:pl-8'>
              <h1 className='line-clamp-1 md:line-clamp-none text-2xl md:text-4xl font-bold pt-2 md:pt-8'>
                {apidata.name}
              </h1>
              <button className="md:px-8 px-4 py-0 md:py-7  bg-red-600 hover:bg-red-700 rounded-lg text-white text-sm md:text-3xl md:mt-8" onClick={addfav}>Add to favorite</button>
            </div>
          </div>

        ) : (
          <p className="text-2xl md:text-4xl text-center">Loading trailer...</p>
        )}
      </div>


    </div>
  );

};

export default Details;

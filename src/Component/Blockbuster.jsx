import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Display from './Display';

const Blockbuster = () => {
    const [array, setArray] = useState([]);
    async function getbuster() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjEyODMxODM2YmY5YTQ2ZTJmOGRkOTMyMWE4MjJmOCIsIm5iZiI6MTc0MzM1NzMwNy4yNCwic3ViIjoiNjdlOTg1N2I0Zjc0MWM3NWJiYzZiMGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.021MDxrw7rgVapf---1tXpmbafXG3yUGEZxW5tW7Vvw'
            }
        };
        try {
            const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
            const data = await res.json();
            setArray(data.results);
        }
        catch (err) {
            console.error("Fetching failed:", err);
        }
    }
    useEffect(() => {
        getbuster();
    }, []);
    return (
        <div>
            <Display newarray={array} />
        </div>
    )
}

export default Blockbuster

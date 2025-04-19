import { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Component/Details';
import First from './Component/First';
import Modalsignin from './Component/Modalsignin';
import Searchmovie from './Component/Searchmovie';
import Getfav from './Component/Getfav';
import Tvshows from './Component/Tvshows';

function App() {
  return (
    <div className='select-none cursor-default'>
     <Router>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/home" element={<Home />}></Route>
           <Route path="/modal/:type" element={<Modalsignin />}></Route>
          {/* <Route path="/Detail/:id" element={<Details />}></Route> */}
          <Route path='/search' element={<Searchmovie/>}></Route>
          <Route path='/getfav' element={<Getfav/>}></Route>
          <Route path='/tvshow' element={<Tvshows/>}></Route>
        </Routes>
      </Router> 

    </div>
  )
}

export default App

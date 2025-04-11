import { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Component/Details';
function App() {
  return (
    <>
     {/* <Home/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Detail/:id" element={<Details/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

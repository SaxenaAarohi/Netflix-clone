import { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Component/Details';
import First from './Component/First';
import Signin from './Component/Signin';
import Modalsignin from './Component/Modalsignin';
function App() {
  return (
    <>


     <Router>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/signin/:mailid" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
           <Route path="/modal" element={<Modalsignin />}></Route>
          <Route path="/Detail/:id" element={<Details />}></Route>
        </Routes>
      </Router> 
      {/* <Modalsignin/> */}
    </>
  )
}

export default App

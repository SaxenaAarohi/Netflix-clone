import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import First from './Component/First';
import Modalsignin from './Component/Modalsignin';
import Searchmovie from './Component/Searchmovie';
import Getfav from './Component/Getfav';

// Lazy load Tvshows
const Tvshows = lazy(() => import('./Component/Tvshows'));

function App() {
  return (
    <div className="select-none cursor-default">
      <Router>
       
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/home" element={<Home />} />
            <Route path="/modal/:type" element={<Modalsignin />} />
            <Route path="/search" element={<Searchmovie />} />
            <Route path="/getfav" element={<Getfav />} />
            {/* Use lazy-loaded Tvshows component here */}
            <Route path="/tvshow" element={<Tvshows />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

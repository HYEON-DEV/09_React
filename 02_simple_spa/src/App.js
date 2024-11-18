import React from "react";

import {Link, Routes, Route} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div>
      <h1> 02_simple_spa </h1>

      <nav>
        <Link to="/"> [Home] </Link>
        <Link to="/about"> [About] </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} exact={true} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;

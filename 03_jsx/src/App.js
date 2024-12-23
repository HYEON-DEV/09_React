import React from "react";

import {Link, Routes, Route} from 'react-router-dom';

import Expr from './expr';

import If1 from './if1';
import If2 from './if2';
import If3 from './if3';
import If4 from './if4';

import Loop1 from './loop1';
import Loop2 from './loop2';
import Loop3 from './loop3';


const App = () => {
  return (
    <div>
      <h1> 03_jsx </h1>

      <nav>
        <Link to="/expr"> [Expr] </Link>
        
        <Link to="/if1"> [If1] </Link>
        <Link to="/if2"> [If2] </Link>
        <Link to="/if3"> [If3] </Link>
        <Link to="/if4"> [If4] </Link>

        <Link to="/loop1"> [Loop1] </Link>
        <Link to="/loop2"> [Loop2] </Link>
        <Link to="/loop3"> [Loop3] </Link>
      </nav>
      <hr/>

      <Routes>
        <Route path="/expr" element={<Expr/>} />

        <Route path="/if1" element={<If1/>} />
        <Route path="/if2" element={<If2/>} />
        <Route path="/if3" element={<If3/>} />
        <Route path="/if4" element={<If4/>} />

        <Route path="/loop1" element={<Loop1/>} />
        <Route path="/loop2" element={<Loop2/>} />
        <Route path="/loop3" element={<Loop3/>} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";

import {Link, Routes, Route} from 'react-router-dom';

import Ex from './ex';


const App = () => {
  return (
    <div>
      <h1> 주간날씨 </h1>
      <br/>
      <hr/>

      <nav>
        <Link to="/weather/mon"> 월 </Link> &nbsp; | &nbsp;
        <Link to="/weather/tue"> 화 </Link> &nbsp; | &nbsp;
        <Link to="/weather/wed"> 수 </Link> &nbsp; | &nbsp;
        <Link to="/weather/thu"> 목 </Link> &nbsp; | &nbsp;
        <Link to="/weather/fri"> 금 </Link> &nbsp; | &nbsp;
        <Link to="/weather/sat"> 토 </Link> &nbsp; | &nbsp;
        <Link to="/weather/sun"> 일 </Link>
      </nav>

      <br />

      <Routes>
        <Route path="/weather/mon" element={<Ex/>} />
        <Route path="/weather/tue" element={<Ex/>} />
        <Route path="/weather/wed" element={<Ex/>} />
        <Route path="/weather/thu" element={<Ex/>} />
        <Route path="/weather/fri" element={<Ex/>} />
        <Route path="/weather/sat" element={<Ex/>} />
        <Route path="/weather/sun" element={<Ex/>} />
      </Routes>
      
    </div>
  );
};

export default App;

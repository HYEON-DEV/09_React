/**
 * 리액트 전체 페이지를 구성하는 컴포넌트
 */

import React from "react";

// 링크 페이지 구성에 필요한 컴포넌트 참조
import {Link, Routes, Route} from "react-router-dom";

// 하위 페이지를 담당하는 컴포넌트(직접제작)들 참조
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div>
      <h1> 02_simple_spa </h1>
      <hr />

      {/* ---- 링크 구성 부분 ---- */}

      <nav>
        <Link to="/"> [Home] </Link>
        <Link to="/about"> [About] </Link>
      </nav>
      
      <a href="/about"> 일반링크 </a>

      {/* ---- 페이지 역할을 할 컴포넌트 명시하기 ---- */}
      <Routes>
        {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시한다 */}
        {/* 첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
        <Route path="/" element={<Home/>} exact={true} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;

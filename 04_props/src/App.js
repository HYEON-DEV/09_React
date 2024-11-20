import React from 'react';
import {Link, Routes, Route } from 'react-router-dom';

import Meta from './components/Meta';

import MyProps from './pages/my_props';
import MyPropTypes from './pages/my_prop_types';
import MyChildren from './pages/my_children';
import GradeTable from './pages/grade_table';

const App = () => {
    return (
      <>
        {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다 */}
        <Meta />
        
        <h1> 04_props </h1>

        <nav>
          <Link to="/myprops"> MyProps </Link> &nbsp; | &nbsp;
          <Link to="/myproptypes"> MyPropTypes </Link> &nbsp; | &nbsp;
          <Link to="/mychildren"> MyChildren </Link> &nbsp; | &nbsp;
          <Link to="/grade_table"> GradeTable(demo) </Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/myprops" element={<MyProps/>} />
          <Route path="/myproptypes" element={<MyPropTypes/>} />
          <Route path="/mychildren" element={<MyChildren/>} />
          <Route path="/grade_table" element={<GradeTable/>} />
        </Routes>
      </>
    );
};

export default App;

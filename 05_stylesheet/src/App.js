import React from "react";
import styled from 'styled-components';

// Link 대신 NavLink를 import
import { NavLink, Routes, Route } from 'react-router-dom';
import Meta from './components/Meta';

// 전역 SCSS 적용을 위한 StyledComponent
import GlobalStyles from "./components/GlobalStyles";

// 페이지를 구성할 컴포넌트
import InlineCss from './pages/inline_css';
import CssClass from './pages/css_class';
import CssModule from './pages/css_module';
import StyledComponent from './pages/styled_component';
import Responsive from './pages/responsive';
import News from './pages/news';

// 메뉴링크 컨테이너용
const MenuBar = styled.nav`
  .menu-item {
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;
    
    &:hover {
      color: #22b8cf;
    }

    &:after {
      content: '|';
      display: inline-block;
      padding: 0 7px;
      color: #ccc;
    }

    &:last-child {
      &:after {
        content: none;
      }
    }

    /* URL이 현재 메뉴 가리키는 경우 활성 메뉴에 적용되는 기본 클래스 이름이 active 이다 */
    &.active {
      text-decoration: underline;
      color: #22b8cf;
    }
  }
`

const App = () => {
  return(
    <>
      <Meta />
      <GlobalStyles />

      <h1> 05_stylesheet </h1>

      <MenuBar>
        <NavLink className="menu-item" to="/inline_css"> InlineCss </NavLink>
        <NavLink className="menu-item" to="/css_class"> CssClass </NavLink>
        <NavLink className="menu-item" to="/css_module"> CssModule </NavLink>
        <NavLink className="menu-item" to="/styled_component"> StyledComponent </NavLink>
        <NavLink className="menu-item" to="/responsive"> Responsive </NavLink>
        <NavLink className="menu-item" to="/news"> News(Demo) </NavLink>
      </MenuBar>

      <hr />

      <Routes>
        <Route path="/inline_css" element={<InlineCss/>} />
        <Route path="/css_class" element={<CssClass/>} />
        <Route path="/css_module" element={<CssModule/>} />
        <Route path="/styled_component" element={<StyledComponent/>} />
        <Route path="/responsive" element={<Responsive/>} />
        <Route path="/news/*" element={<News/>} />
      </Routes>
    </>
  );
};

export default App;

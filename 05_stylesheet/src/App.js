import React from "react";
import {Link,Routes,Route} from 'react-router-dom';
import Meta from './components/Meta';

import InlineCss from './pages/inline_css';
import CssClass from './pages/css_class';
import CssModule from './pages/css_module';
import StyledComponent from './pages/styled_component';
import Responsive from './pages/responsive';
import News from './pages/news';

const App = () => {
  return(
    <>
      <Meta />

      <h1> 05_stylesheet </h1>

      <nav>
        <Link to="/inline_css"> InlineCss </Link>
        <Link to="/css_class"> CssClass </Link>
        <Link to="/css_module"> CssModule </Link>
        <Link to="/styled_component"> StyledComponent </Link>
        <Link to="/responsive"> Responsive </Link>
        <Link to="/news"> News(Demo) </Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/inline_css" element={<InlineCss/>} />
        <Route path="/css_class" element={<CssClass/>} />
        <Route path="/css_module" element={<CssModule/>} />
        <Route path="/styled_component" element={<StyledComponent/>} />
        <Route path="/responsive" element={<Responsive/>} />
        <Route path="/news" element={<News/>} />
      </Routes>
    </>
  );
};

export default App;

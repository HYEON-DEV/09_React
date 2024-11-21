import React from "react";
import { Link, Routes, Route } from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsList from './NewsList';
import NewsData from '../../data/NewsData';
import Meta from "../../components/Meta";

const News = () => {
    return (
        <div>
            <h2> News </h2>

            <nav>
                <Link to='news_card'> 카드형 </Link> &nbsp; | &nbsp;
                <Link to='news_list'> 리스트형 </Link>
            </nav>

            <br/>

            <Routes>
                <Route path='news_card' element={ <NewsCard news={NewsData}/> } />
                <Route path='news_list' element={ <NewsList news={NewsData}/> } />
            </Routes>
        </div>
    );
};

export default News;

import React, {useState, useEffect} from "react";
import {Link, Routes, Route} from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsList from './NewsList';
import axiosHelper from '../../helpers/AxiosHelper';


const News = () => {
    const [newsData, setNewsData] = useState([]);

    // 페이지가 처음 열렸을 때 실행할 hook
    // hook에 전달되는 콜백함수에 직접적으로 async를 적용할 수 없다
    useEffect( () => {
        (async () => {
            let data = null;
            try{
                data = await axiosHelper.get('/news');
            } catch(e) {
                alert(e.message);
                return;
            }
            console.log(data.item);
            // Ajax의 결과에서 화면에 출력할 내용을 상태변수에 적용 => 화면에 자동 갱신
            setNewsData(data.item);
        })();
    }, [] );
    
    return(
        <div>
            <h1> News </h1>

            <nav>
                <Link to='/news/card'> 카드형 </Link> &nbsp; | &nbsp;
                <Link to='/news/list'> 리스트형 </Link>
            </nav>

            <Routes>
                <Route path='card' element={<NewsCard news={newsData} /> } />
                <Route path='list' element={<NewsList news={newsData} /> } />
            </Routes>
        </div>
    );
} ;

export default News;
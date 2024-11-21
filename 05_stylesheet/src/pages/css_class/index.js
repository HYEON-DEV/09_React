import React from "react";
import Meta from "../../components/Meta";

// 외부 CSS파일참조 => 참조변수 이름을 지정하지 않는다
import '../../assets/css/mystyle.css';

const CssClass = () => {
    return (
        <div>
            <h2> CssClass </h2>
            <div className='my-css-box' />
        </div>
    );
};

export default CssClass;

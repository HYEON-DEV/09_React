import React from "react";
import Meta from "../../components/Meta";

// 실행시에는 react에 의해 다른 경로로 복사된다 
import sample from '../../assets/img/sample.png';

const InlineCss = () => {

    /** CSS로 사용될 JSON 객체 정의 */

    // CSS 속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정
    const myStyle = {
        backgroundColor: '#f60',
        fontSize: '20px',
        color: '#0f6',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px' 
    };

    return (
        <div>
            <h2> InlineCss </h2>

            <h3> 변수로 정의된 CSS 참조하기 </h3>

            {/* JSON 객체를 style 속성에 적용 */}
            <div style={myStyle}> Hello React CSS (1) </div>


            <h3> 직접 CSS 코딩하기 </h3>
            {/* CSS 직접 코딩 */}
            <div style={{
                backgroundColor: '#f60',
                fontSize: '20px',
                color: '#0f6',
                fontWeight: 'bold',
                padding: '10px 25px',
                marginBottom: '10px' 
            }}> Hello React CSS (2) </div>

            <h3> 이미지 참조하기 </h3>
            {/* 이미지 사용시 alt 속성 지정 안하면 경고 발생했....는데 */}
            <img src={sample} width='240' height='240' alt='샘플이미지' />
            {/* public 폴더에 있는 파일들은 단순 절대경로로 참조 가능 */}
            <img src='/logo192.png' width='240' height='240' alt='react' />
        </div>
    );
};

export default InlineCss;
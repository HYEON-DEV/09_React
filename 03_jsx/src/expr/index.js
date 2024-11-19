import React from 'react';

const Expr = () => {

    // 사용자 정의 변수
    const name = '리액트';
    const age = 19;
    const color = '#f00';
    const message = '리액트는 가장 주목받는 프론트앤드 프레임워크 이다';

    // 개발자가 직접 정의한 함수
    const myEllipsis = (message, len) => {
        let str = message;
        if(str.length > len) {
            str = str.substring(0,len) + '...';
        }
        return str;
    };

    return (
        <div>
            <h1> Expr </h1>

            <h2> jsx 기본 표현식 </h2>

            <h3> {name}님은 {age+1}세 입니다 </h3>
            <p>
                <font color='#00f'> {name} </font> 님은 &nbsp;
                <font color={color}> 리액트 개발자 </font> 입니다
            </p>

            <blockquote> {myEllipsis(message,15)} </blockquote>
        </div>
    );
};

export default Expr;


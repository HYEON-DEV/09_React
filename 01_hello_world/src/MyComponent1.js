import React from 'react';

import MySubComponent from './MySubComponent';

/**
 * 함수형 컴포넌트 정의
 * - 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적
 * - 리액트에서의 소스파일 이름은 대문자로 시작
 */
const MyComponent1 = () => {
    // 리턴은 항상 HTML구조를 의미하는JSX 문법이어야 하고,
    // JSX 구조는 무조건 단 하나의 태그요소만 반환한다
    // => 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다
    return (
        <div>
            <h2> 안녕하세요 리액트 </h2>
            <p> 리액트 컴포넌트 구조 연습 </p>

            <MySubComponent />
            <MySubComponent />
            <MySubComponent />
        </div>
    );
};

export default MyComponent1;
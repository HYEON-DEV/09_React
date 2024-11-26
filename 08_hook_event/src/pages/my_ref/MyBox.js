import React, {forwardRef} from "react";
import styled from 'styled-components';

const MyBoxContainer = styled.div`
    border: 3px solid black;
    color: white;
    text-align: center;
    width: 300px;
`;

// 부모로부터 전달받은 ref 참조변수를 받기 위해 'React.forwardRef' hook에 대한 콜백으로 컴포넌트를 구현한다
// 이렇게 구현된 컴포넌트는 props와 부모로부터 전달받은 ref 참조변수를 파라미터로 주입받는다
const MyBox = forwardRef( ( {a,b}, ref ) => {
    return(
        // 부모로부터 전달받은 참조변수 연결
        <MyBoxContainer>
            <h2 ref = {ref}> MyBox </h2>
            <p> a={a}, b={b} </p>
        </MyBoxContainer>
    );
} );

export default MyBox;
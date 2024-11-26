import React, {memo, useReducer} from "react";
import styled from 'styled-components';

const MyReducerContainer = styled.div`

`;

/**
 * useReducer에 의해 호출될 사용자 정의 함수
 * 
 * @param {int} state - 상태값 (useState의 state 값과 동일) 
 * @param {string} action - 어떤 동작인지에 대한 구분 
 */
function setCounterValue(state, action) {
    console.log('[%o] %o', action, state);

    // actiion값의 상태에 따른 state 값의 가공 처리 분기
    switch (action) {
        case 'HELLO':
            return state+1;
        case 'WORLD':
            return state-1;
        default:
            return 0;
    }
}

const MyReducer = memo( () => {

    const [myCounter, setMyCounter] = useReducer(setCounterValue, 0);

    return(
        <MyReducerContainer>
            <h2> MyReducer </h2>
            <p> 현재 카운트 값 : {myCounter} </p>
            <button type="button" onClick = {e => setMyCounter('HELLO')}> UP </button>
            <button type="button" onClick = {e => setMyCounter('WORLD')}> DOWN </button>
            <button type="button" onClick = {e => setMyCounter('')}> RESET </button>
        </MyReducerContainer>
    );
} );

export default MyReducer;
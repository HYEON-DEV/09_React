/**
 * useCallback
 * 
 * 렌더링 성능 최적화에 사용된다
 * 이벤트 핸들러 함수를 필요한 경우에만 생성할 수 있다
 */

import React, {memo, useState, useCallback} from "react";
import styled from 'styled-components';

const MyCallbackContainer = styled.div`

`;

const MyCallback = memo( () => {
    const [myText, setMyText] = useState('Hello React');

    console.log('MyCallback rendering...');

    /**
     * useCallback은 함수형 컴포넌트가 화면 갱신을 위해 반복실행되는 과정에서 
     * 이벤트 핸들러 함수 정의를 최초 1회만 수행할 수 있게 한다
     * => 결론 : 모든 이벤트 핸들러는 무조건 "useCallback(이벤트핸들러, [])" 안에서 정의
     */

    const onInputChange = useCallback( e => {
        setMyText(e.currentTarget.value);
    }, [] );

    return(
        <MyCallbackContainer>
            <h2> MyCallback </h2>
            <h2> {myText} </h2>
            <input type="text" placeholder="input..." onChange={onInputChange} />
        </MyCallbackContainer>
    );
} );

export default MyCallback;
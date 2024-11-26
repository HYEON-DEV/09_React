/**
 * 직접 Hook 함수 정의하기
 * => 리액트 스타일의 모듈화
 */

import React, {memo} from "react";
import { useMyWidth } from "../../hooks/MyHook";
import styled from 'styled-components';

const MyWidth = memo( () => {

    const myWidth = useMyWidth();

    return(
        <div>
            <h2> MyWidth </h2>
            <h2> windowWidth: {myWidth} </h2>
        </div>
    );
} );

export default MyWidth;

/**
 * 사용자 정의 함수
 * useState와 useEffect를 하나의 함수로 묶는 용도로 정의한다
 */

import React, {useState, useEffect} from "react";

const useMyWidth = () => {
    // 브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMyWidth] = useState(window.innerWidth);

    // 사용자 정의 함수
    // HTML DOM에 연결되는 이벤트가 아니므로 useCallback을 사용할 수 없다
    const onMyResize = () => setMyWidth(window.innerWidth);

    // 페이지 로드시에 이벤트 정의, 페이지 종료시에 이벤트 해제
    useEffect( () => {
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize);
    }, [] );

    return myWidth;
}

export {useMyWidth};
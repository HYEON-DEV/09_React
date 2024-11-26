import React, {memo, useState, useEffect} from "react";
import styled from 'styled-components';
import sample from '../../assets/img/sample.jpg';

const MyEffectContainer = styled.div`

`;

const MyEffect = memo( () => {

    const [myBrightness, setBrightness] = useState(100);

    const [myWidth, setWidth] = useState(window.innerWidth);

    const onMyResize = e => {
        console.log(`창 사이즈 변경됨 >> ${window.innerWidth}`);
        setMyWidth(window.innerWidth);
    }


    /**
     * CASE 1 => 콜백 함수만 파라미터로 전달
     * 
     * 이 컴포넌트가 화면에 막 등장할 때와 state값, props값이 변경될 때마다 매번 실행된다
     * 지나치게 자주 실행되므로 사용하지 않는다
     */

    useEffect( () => {
        console.debug('[Case1] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출된다', new Date() );
    });


    /**
     * CASE 2 => 모니터링 할 상태변수를 두 번째 파라미터로 전달되는 배열에 명시
     * 
     * 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props 값이 변경될 때만 실행된다
     * 특정 상태값이 변경된 후의 후속 처리를 해야할 경우 구현한다
     * 
     * ex) 백엔드로부터 Ajax 로 전송받은 결과값이 저장될 변수를 useState로 정의할 경우 
     *     백엔드로부터 통신이 완료된 직후에 대한 후속 처리를 구현할 수 있다
     */

    useEffect( () => {
        console.warn('[Case2] %s ::: myBrightness값이 변경됨', new Date() );
    }, [myBrightness] );


    /**
     * CASE 3,4 => 두 번째 파라미터로 빈 배열 설정
     * 
     * 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행된다
     * 유일하게 1회만 자동으로 실행시킬 수 있는 방법이므로 매우 자주 실행된다
     * 
     * 페이지가 열리면서 자동으로 처리돼야 하는 기능 구현에 사용된다
     * ex) GET 방식의 Ajax 호출, window 객체에 대한 이벤트정의
     * 
     * 특히 React의 작동 원리상 컴포넌트는 상태값이 변경될 때 마다 매번 렌더링을 갱신하므로 1회만 실행돼야 하는 로직 구현에 필수 적용
     */

    useEffect( () => {
        console.error('[Case3] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리돼야 할 기능', new Date() );

        // window 객체 등과 같이 DOM 이외이 객체에게 이벤트를 적용할 경우 useEffect를 활용해 컴포넌트가 로드될 때 단 1회만 처리하도록 해야 한다
        window.addEventListener('resize', onMyResize);

        // [Case4] 컴포넌트가 화면에서 사라질 때 호출되는 부분
        // 클로저 형태로 정의
        return () => {
            console.log('[Case4] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리돼야 할 기능', new Date() );
            // 이 화면에서 빠져나갈 때 등록된 이벤트를 제거한다
            window.removeEventListener('resize', onMyResize);
        };
    }, [] );


    return(
        <MyEffectContainer>
            <h2> MyEffect </h2>

            <img alt="Hello React" src={sample} width={myWidth*0.3} 
                style={ {
                    filter: "brightness(" + myBrightness + "%)"
                } } 
            />

            <div>
                <input type="range" min={0} max={200} step={1} value={myBrightness}
                    onChange = { e => {
                        setBrightness(e.currentTarget.value);
                    } }
                />
            </div>
        </MyEffectContainer>
    );
} );

export default MyEffect;
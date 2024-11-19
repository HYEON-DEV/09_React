/**
 * jsx 조건분기 (4) - 삼항 연산자를 사용한 조건 분기
 * 
 * {조건? 참인경우 출력할내용 : 그렇지않을경우 출력할내용}
 * 
 * 조건이 거짓인 경우를 사용하지 않고자 한다면 null 사용
 * 
 * ex) {point === 80 ? ... : null}
 */

import React from "react";

const If4 = () => {
    const isLogin = false;

    return (
        <div>
            <h1> If4 </h1>
            
            {isLogin===true ? 
                ( <button type='button'> Logout </button> ) :
                ( <button type='button'> Login </button> )
            }
        </div>
    );
};

export default If4;
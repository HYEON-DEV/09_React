/**
 * JSX 조건분기 (1) - 함수를 통한 리턴값 분기
 */

import React from "react";

const If1 = () => {

    const btnLogin = (isLogin) => {
        if(isLogin===true) {
            return (<button type='button'> Logout </button>);
        } else {
            return (<button type='button'> Login </button>);
        }
    };

    return (
        <div>
            <h1> If1 </h1>
            {btnLogin(true)}
        </div>
    );
};

export default If1;
import React from 'react';
import Meta from '../../components/Meta';

import MyPropTypesSub from './MyPropTypesSub';

const MyPropTypes = () => {
    return (
        <div>
            <h2> MyPropTypes </h2>

            <MyPropTypesSub name='창기' age={30} hobby='사진찍기' />
            <MyPropTypesSub name='민재' age='서른한살' hobby='영화보기' />
            <MyPropTypesSub name='보경' age={22} />

        </div>
    );
};

export default MyPropTypes;

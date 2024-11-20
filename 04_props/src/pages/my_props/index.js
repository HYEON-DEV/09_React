import React from 'react';
import Meta from '../../components/Meta';

import MyPropsSub from './MyPropsSub';

const MyProps = () => {
    return (
        <div>
            <h2> MyProps </h2>

            <MyPropsSub />
            <MyPropsSub name='지환' age='32' />
            <MyPropsSub name='동원' age={33} />

        </div>
    );
};

export default MyProps;

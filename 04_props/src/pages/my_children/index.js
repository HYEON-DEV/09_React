import React from 'react';
import Meta from '../../components/Meta';

import MyChildrenSub from './MyChildrenSub';

const MyChildren = () => {
    return (
        <div>
            <h2> MyChildren </h2>

            <MyChildrenSub width={400} height={100}> <b> Hello World </b> </MyChildrenSub>
            <MyChildrenSub width={300} height={80}> 안녕 리액트 </MyChildrenSub>
            <MyChildrenSub width={200} height={50} />
        </div>
    );
};

export default MyChildren;

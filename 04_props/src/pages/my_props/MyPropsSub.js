import React from "react";

const MyPropsSub = (props) => {

    console.group('MyPropsSub');
    console.log(props);
    console.log('name type : ' + typeof props.name);
    console.log('age type : ' + typeof props.age);
    console.groupEnd();

    return (
        <div>
            <h3> MyPropsSub </h3>

            <p> 제 이름은 {props.name}이고, 나이는 {props.age}세 입니다 </p>
        </div>
    );
};

export default MyPropsSub;
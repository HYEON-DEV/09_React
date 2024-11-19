import React from "react";

const Ex = () => {

    const weather = {
        'mon': ['맑음', '맑음'],
        'tue': ['비', '맑음'],
        'wed': ['맑음', '흐림'],
        'thu': ['맑음', '흐림'],
        'fri': ['흐림', '흐림'],
        'sat': ['비', '맑음'],
        'sun': ['맑음', '맑음'],
    };

    const keys = Object.getOwnPropertyNames(weather);
    
    for (const k of keys) {
        return (
            <div>
                <h2> 오전 </h2>
                <p> {weather[k][0]} </p>
                <h2> 오후 </h2>
                <p> {weather[k][1]} </p>
            </div>
        );
    }

};

export default Ex;
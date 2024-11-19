import React from "react";

const Loop3 = () => {

    const seasons = ['봄','여름','가을','겨울'];

    return (
        <div>
            <h1> Loop3 </h1>
            <table border='1'>
                <tbody>
                    <tr>
                        {seasons.map( (v,i) => <td key={i}> {v} </td> )}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Loop3;
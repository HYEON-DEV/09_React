import React, {memo} from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Graph3Container = styled.div`
    background-color: #fcedd9;
    flex: 1 0 50%;

    .container {
        background-color: #fff;
        margin: 10px;
        height: 50px;
    }
`;

const Graph3 = memo( () => {

    const {item} = useSelector( state => state.TitanicSlice );

    return(
        <Graph3Container>
            <div className="container">

            </div>
        </Graph3Container>
    );
} );

export default Graph3;
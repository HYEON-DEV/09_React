import React, {memo} from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Graph4Container = styled.div`
    background-color: #f0e1fc;
    flex: 1 0 50%;

    .container {
        background-color: #fff;
        margin: 10px;
        height: 50px;
    }
`;

const Graph4 = memo( () => {
    
    const {item} = useSelector( state => state.TitanicSlice );

    return(
        <Graph4Container>
            <div className="container">

            </div>
        </Graph4Container>
    );
} );

export default Graph4;
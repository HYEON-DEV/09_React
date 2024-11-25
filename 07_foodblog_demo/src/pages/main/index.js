import React, {memo} from "react";
import styled from 'styled-components';

import FoodList from "./FoodList";
import AboutMe from "./AboutMe";

const MainContainer = styled.div`
    /* background-color: #f605; */
    padding-top: 60px;

    max-width: 1200px;
    margin: auto;

    .divider {
        margin: 60px 0;
        width: auto;
        border-top: 1px solid #ddd;
        border-bottom: 0;
    }
`;

const Main = memo( () => {
    return(
        <MainContainer>
            
            <FoodList/>

            <hr className="divider" />

            <AboutMe/>

        </MainContainer>
    );
} );

export default Main;
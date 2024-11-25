import React, {memo} from "react";
import styled from 'styled-components';
import mq from '../components/MediaQuery';

const HeaderContainer = styled.div`
    background-color: #fff;

    box-shadow: 0 1px 3px #002;

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9000;

    .container {
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;

        .icon-button {
            font-size: 24px;
            font-weight: 900;
            padding: 16px;

            &:hover {
                background-color: #ddd;
                color: #fff;
            }
        }

        .logo {
            font-size: 26px;
            font-weight: 600;
            display: flex;
            align-items: center;    
        }
    }
`;

const Header = memo( () => {
    return(
        <HeaderContainer>
            <div className="container">
                <a href="#" className="icon-button left">
                    <i className="fa-solid fa-bars"></i>
                </a>
                <h1 className="logo"> My Food </h1>
                <a href="#" className="icon-button right">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>
        </HeaderContainer>
    );
} );

export default Header;

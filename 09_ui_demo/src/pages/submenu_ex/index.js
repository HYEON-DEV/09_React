import React, {memo, useCallback} from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {menuData} from '../../dataset';
import btn from '../../assets/img/btn.png';
import btnOver from '../../assets/img/btn_over.png';


const SubmenuExContainer = styled.div`
    .menu-container {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;

        .menu-item {
            position: relative;

            .sub {
                list-style: none;
                padding: 0;
                margin: 0;

                height: 0;
                overflow: hidden;
                transition: height 180ms ease-out;

                position: absolute;
                z-index: 9999;
                left: 0;
                top: 48px;
            }
        }
        .link {
            background: url(${btn});
            display: flex;
            width: 180px;
            height: 48px;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #cfdfb5;
            text-decoration: none;

            &:hover {
                background: url(${btnOver});
            }
        }
    }
`;

const SubmenuEx = memo( () => {

    const onMenuItemOver = useCallback( e => {
        // 이벤트가 발생한 자신 => 마우스 올라간 1depth <li>
        const current = e.currentTarget;
        // 자신의 자식요소중에서 .sub을 찾는다
        const sub = current.querySelector('.sub');
        // ScrollHeight 는 overflow:hidden 에 의해 잘려진 높이 의미
        sub.style.height = `${sub.scrollHeight}px`;
    }, [] );

    const onMenuItemOut = useCallback( e => {
        e.currentTarget.querySelector('.sub').style.height = '0px';
    }, [] );

    return(
        <SubmenuExContainer>
            <h2> SubmenuEx </h2>
            <ul className = "menu-container">
                {/* 1depth 반복처리 */}
                { menuData.map( (v,i) => {
                    return (
                        <li key={v.id} className="menu-item" onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                            <Link to={v.url} className="link"> {v.label} </Link>
                            {/* 2depth 반복처리 */}
                            {v.children && (  
                                <ul className="sub">
                                    {v.children.map( (v2,i2) => {
                                        return (
                                            <li key={v2.id}>
                                                <Link to={v2.url} className="link"> {v2.label} </Link>
                                            </li>
                                        )
                                    } )}
                                </ul>
                            )}
                        </li>
                    )
                } ) }
            </ul>
            <h2> 리액트 </h2>
        </SubmenuExContainer>
    );
} );

export default SubmenuEx;
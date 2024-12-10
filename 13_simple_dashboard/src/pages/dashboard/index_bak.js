import React, {memo, useEffect, useMemo} from 'react';

import styled from 'styled-components';

import Spinner from '../../components/Spinner';

import {useSelector, useDispatch} from 'react-redux';

import {getList} from '../../slices/TitanicSlice';

import Table from '../../components/Table';

const PagesContainer = styled.div`

`;

const Pages = memo(() => {
    const {loading, status, message, item} = useSelector( state => state.TitanicSlice );

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getList());
    }, [] );

    // 백엔드로부터 데이터 받아온 후 필요한 집계 데이터 생성
    // useMemo( () => {
    //     if (!item) return;

    //     // 전체 탑승객 수
    //     const totalPassenger = item.length;

    //     // 전체 생존자 수

    //     // 전체 사망자 수

    //     // 생존율

    //     return {
    //         totalPassenger,
    //         totalSurvived,
    //         totalDead,
    //         survivalRate
    //     }
    // }, [item] );

    return (
        <PagesContainer>

            <Spinner loading={loading} />

            { status !== 200 && (
                <div className='error-info'>
                    <h1> {status} Error</h1>
                    <p> {message} </p>
                </div>
            ) }

            {/* 데이터 가져왔는지 확인 */}
            { item && (<p> {JSON.stringify(item)} </p>) }

        </PagesContainer>
    );
});

export default Pages;
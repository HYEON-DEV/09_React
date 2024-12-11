import React, {memo, useEffect, useMemo} from 'react';

import styled from 'styled-components';

import Spinner from '../../components/Spinner';

import {useSelector, useDispatch} from 'react-redux';

import {getList} from '../../slices/TitanicSlice';

import CountUp from "react-countup";

import ScoreBoard from './ScoreBoard';
import GraphBoard from './GraphBoard';


const PagesContainer = styled.div`
    
`;

const Pages = memo(() => {
    const {loading, status, message, item} = useSelector( state => state.TitanicSlice );

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getList());
    }, [] );

    

    return (
        <PagesContainer>

            <Spinner loading={loading} />

            { status !== 200 && (
                <div className='error-info'>
                    <h1> {status} Error</h1>
                    <p> {message} </p>
                </div>
            ) }

            <ScoreBoard/>

            <GraphBoard/>

        </PagesContainer>
    );
});

export default Pages;
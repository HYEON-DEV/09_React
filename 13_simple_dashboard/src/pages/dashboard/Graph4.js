import React, {memo, useMemo} from "react";
import styled from 'styled-components';
import mq from '../../components/MediaQuery';
import { useSelector } from "react-redux";

import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from "chart.js";
import {Bar} from "react-chartjs-2";
import { jsx } from "react/jsx-runtime";
Chart.register( CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement );

const Graph4Container = styled.div`
    /* background-color: #f0e1fc; */
    /* flex: 1 0 50%; */
    width: 50%;
    
    ${mq.maxWidth('md')`
        width: 100%;
    `}

    .container {
        /* background-color: #fff; */
        margin: 10px;
        height: 300px;
    }
`;

const Graph4 = memo( () => {
    
    const {item} = useSelector( state => state.TitanicSlice );

    const {survived, dead} = useMemo( () => {
        if(!item) {
            return {survived:[0,0], dead: [0,0]};
        }

        const maleData = item.reduce( (acc,cur) => {
            const idx = cur.sex=='male' ? 0 : 1;
            const key = cur.survived ? 'survived' : 'dead';
            acc[key][idx]++;
            return acc;
        }, {survived:[0,0], dead: [0,0]} );

        // console.group("Graph4");
        // console.log(maleData);
        // console.groupEnd();
        
        return maleData;
    }, [item] );

    return(
        <Graph4Container>
            <div className="container">
                {survived && dead && (
                    <Bar
                        data={{
                            labels:['male','female'],
                            datasets: [
                                {
                                    label: '생존',
                                    data: survived,
                                    backgroundColor: '#d9fcf4',
                                    borderColor: 'rgba(0,0,0,0.4)',
                                    borderWidth: 1
                                }, 
                                {
                                    label: '사망',
                                    data: dead,
                                    backgroundColor: '#f5ebeb',
                                    borderColor: 'rgba(0,0,0,0.4)',
                                    borderWidth: 1
                                }
                            ]
                        }}
                        options = { {
                            responsive: true,
                            maintainAspectRatio: false,
                            indexAxis: 'y',
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                },
                                title: {
                                    display: true,
                                    text: '성별 생존 여부 집계',
                                    font: {
                                        size: 18,
                                        color: '#000'
                                    }
                                }
                            }
                        } }
                    />
                )}
            </div>
        </Graph4Container>
    );
} );

export default Graph4;
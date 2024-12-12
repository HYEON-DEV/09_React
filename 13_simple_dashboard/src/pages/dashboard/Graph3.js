import React, {memo,useMemo} from "react";
import styled from 'styled-components';
import mq from '../../components/MediaQuery';
import { useSelector } from "react-redux";

import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from "chart.js";
import {Bar} from "react-chartjs-2";
Chart.register( CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement );

const Graph3Container = styled.div`
    /* background-color: #fcedd9; */
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

const Graph3 = memo( () => {

    const {item} = useSelector( state => state.TitanicSlice );

    const sex = useMemo( () => {
        if (!item) {
            return [0,0];
        }

        const maleData = item.reduce( (acc,cur) => {
            acc[cur.sex=='male' ? 0 : 1]++;
            return acc;
        }, [0,0] );

        // console.group("Graph3");
        // console.log(maleData);
        // console.groupEnd();

        return maleData;
    }, [item] );

    return(
        <Graph3Container>
            <div className="container">
                {sex && (
                    <Bar
                        data = { {
                            labels: ['male', 'female'],
                            datasets: [
                                {
                                    label: '명',
                                    data: sex,
                                    backgroundColor: ['#f0ffed','#fcedd9'],
                                    borderColor: 'rgba(0,0,0,0.4)',
                                    borderWidth: 1
                                }
                            ]
                        } }
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
                                    text: '성별 탑승객 집계',
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
        </Graph3Container>
    );
} );

export default Graph3;
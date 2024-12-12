import React, {memo, useMemo} from "react";
import styled from 'styled-components';
import mq from '../../components/MediaQuery';

import { useSelector } from "react-redux";

import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from "chart.js";
import {Pie} from "react-chartjs-2";
Chart.register( CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement );

const Graph5Container = styled.div`
    /* background-color: #f0e1fc; */
    /* flex: 1 0 50%; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .container {
        /* background-color: #fff; */
        /* margin: 10px; */
        width: 33.3%;
        height: 400px;

        ${mq.maxWidth('md')`
            width: 100%;
        `}
    }
`;

const Graph5 = memo( () => {

    const {item} = useSelector( state => state.TitanicSlice );

    const {passengers, survived, dead} = useMemo( () => {
        if (!item) {
            return { passengers:[0,0,0], survived:[0,0,0], dead:[0,0,0] };
        }

        const pclassData = item.reduce( (acc,cur) => {
            const pclass = cur.pclass;
            acc.passengers[pclass-1]++;

            if (cur.survived) {
                acc.survived[pclass-1]++;
            } else {
                acc.dead[pclass-1]++;
            }

            return acc;
        }, { passengers:[0,0,0], survived:[0,0,0], dead:[0,0,0] } );

        console.group("Graph5");
        console.log(pclassData);
        console.groupEnd();

        return pclassData;

    }, [item] );

    

    return(
        <Graph5Container>
            <div className="container">
                {passengers && (
                    <Pie
                        data={{
                            labels: ['1등급','2등급','3등급'],
                            datasets: [
                                {
                                    label: '명',
                                    data: passengers,
                                    backgroundColor: [
                                        '#d9ddfc',
                                        '#f0ffed',
                                        '#fcedd9'
                                    ],
                                    borderColor: 'rgba(0,0,0,0.4)',
                                    borderWidth: 1
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                },
                                title: {
                                    display: true,
                                    text: '객실 등급별 탑승객 비율',
                                    font: {
                                        size: 18,
                                        color: '#000'
                                    }
                                }
                            }
                        }}
                    />
                )}
            </div>
            <div className="container">
                {survived && (
                    <Pie
                        data={{
                            labels: ['1등급','2등급','3등급'],
                            datasets: [
                                {
                                    label: '명',
                                    data: survived,
                                    backgroundColor: [
                                        '#d9ddfc',
                                        '#f0ffed',
                                        '#fcedd9'
                                    ],
                                    borderColor: 'rgba(0,0,0,0.4)',
                                    borderWidth: 1
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                },
                                title: {
                                    display: true,
                                    text: '객실 등급별 생존 비율',
                                    font: {
                                        size: 18,
                                        color: '#000'
                                    }
                                }
                            }
                        }}
                    />
                )}
            </div>
            <div className="container">
                {dead && (
                    <Pie
                        data={{
                            labels: ['1등급','2등급','3등급'],
                            datasets: [
                                {
                                    label: '명',
                                    data: dead,
                                    backgroundColor: [
                                        '#d9ddfc',
                                        '#f0ffed',
                                        '#fcedd9'
                                    ],
                                    borderColor: 'rgba(0,0,0,0.4)',
                                    borderWidth: 1
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                },
                                title: {
                                    display: true,
                                    text: '객실 등급별 사망 비율',
                                    font: {
                                        size: 18,
                                        color: '#000'
                                    }
                                }
                            }
                        }}
                    />
                )}
            </div>
        </Graph5Container>
    );
} );

export default Graph5;
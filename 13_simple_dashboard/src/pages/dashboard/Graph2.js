import React, {memo, useMemo} from "react";
import styled from 'styled-components';
import mq from '../../components/MediaQuery';
import { useSelector } from "react-redux";

import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from "chart.js";
import {Bar} from "react-chartjs-2";
Chart.register( CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement );

const Graph2Container = styled.div`
    /* background-color: #d9fcf4; */
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

const Graph2 = memo( () => {
    
    const {item} = useSelector( state => state.TitanicSlice );
    
    const {keys, survived, dead} = useMemo( () => {
        if (!item) {
            return { keys: [], survived: [], dead: [] };
        }

        // console.group("Graph2");

        const ageData = item.reduce( (acc,cur) => {
            const ageLevel = `${ parseInt(cur.age/10) * 10 }대`;

            if ( acc[ageLevel] == undefined ) {
                acc[ageLevel] = { survived: 0, dead: 0 };
            }

            if ( cur.survived ) {
                acc[ageLevel].survived++;
            } else {
                acc[ageLevel].dead++;
            }

            return acc;
        }, {} );

        // console.log(ageData);

        const keys = Object.keys(ageData).sort();
        // console.log(keys);

        const survived = keys.map( (v,i) => ageData[v].survived );
        // console.log(survived);

        const dead = keys.map( (v,i) => ageData[v].dead );
        // console.log(dead);  

        const result = {keys, survived, dead};
        // console.log(result);

        // console.groupEnd();

        return result;
    }, [item] );

    return(
        <Graph2Container>
            <div className="container">
                {keys && survived && dead && (
                    <Bar
                        data = { {
                            labels: keys,
                            datasets: [
                                {
                                    label: "생존",
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
                            ],
                        } }
                        options = { {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'bottom'
                                },
                                title: {
                                    display: true,
                                    text: '연령별 생존 여부 집계',
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
        </Graph2Container>
    );
} );

export default Graph2;
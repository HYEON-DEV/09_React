/**
 * Chartjs 2
 * - Chartjs2는 기본 JavaScript에서 그래프를 표시해 주는 기능을 하는 라이브러리이다
 * - ReactChartjs2라는 Wrapper 라이브러리를 통해 React에서 사용 가능하다
 * 
 * yarn add chart.js react-chartjs-2
 */

import React, {memo, useMemo} from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";

/** chart.js */
// 나머지 공통항목  |  BarElement: 막대그래프
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import {Bar} from 'react-chartjs-2';

// chart.js에서 import한 Chart클래스에 나머지 import 요소들을 등록한다
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

const Graph1Container = styled.div`
    /* background-color: #d9ddfc; */
    flex: 1 0 50%;  // 상황이 되면 커져도 되고 작아지지는 말고 50%로

    .container {
        /* background-color: #fff; */
        margin: 10px;
        /* height: 50px; */
    }
`;

const Graph1 = memo( () => {

    const {item} = useSelector( state => state.TitanicSlice );

    // 연령별 탑승객 현황
    const {keys, values} = useMemo( () => {
        if (!item) {
            return {keys: null, values: null};
        }

        const ageData = item.reduce( (acc,cur) => {
            const ageLevel = `${ parseInt( cur.age/10 ) *10 }대`;

            if (acc[ageLevel]==undefined) {
                acc[ageLevel] = 1;
            } else {
                acc[ageLevel]++;
            }

            return acc;
        }, {} );

        console.log(ageData);

        const keys = Object.keys(ageData).sort();
        console.log(keys);

        const values = keys.map( (v,i) => ageData[v] );
        console.log(values);

        const result = {keys, values};
        console.log(result);

        return result;
    }, [item] );

    return(
        <Graph1Container>
            <div className="container">
                {/* {keys && JSON.stringify(keys)} */}
                {/* <br/> */}
                {/* {values && JSON.stringify(values)} */}

                <Bar 
                data={{ 
                    labels: keys,   // x축
                    datasets: [{
                        label: "명",
                        data: values,
                        backgroundColor: '#d9ddfc',
                        borderColor: 'rgba(0,0,0,0.4)',
                        borderWidth: 1
                    }]
                }}
                options={{
                    reponsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: '연령별 탑승객 집계',
                            font: {
                                size: 18,
                                color: '#000'
                            }
                        }
                    }
                }} />
            </div>
        </Graph1Container>
    );
} );

export default Graph1;
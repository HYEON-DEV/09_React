import React, {memo, useState, useEffect} from "react";
import styled from 'styled-components';
import axiosHelper from '../../helpers/AxiosHelper';
import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import { SexLabel, EmparkedLabel, SurvivedLabel, EmbarkedLabel } from './Labels';

const TitanicContainer = styled.div``;

const Titanic = memo( () => {

    // Ajax 결과를 저장할 상태 변수
    const [titanicData, setTitanicData] = useState([]);

    // 로딩 상태를 처리할 상태변수
    const [loading, setLoading] = useState(false);

    // 컴포넌트 렌더링과 동시에 실행되기 위한 Hook
    useEffect( () => {
        ( async() => {
            setLoading(true);
            
            let data = null;             

            try {
                data = await axiosHelper.get('/titanic');
                console.log(data);
            } catch(e) {
                alert(e.message);
                return;
            }

            setTitanicData(data.item);
            setLoading(false);
        } )();
    }, [] );

    return(
        <TitanicContainer>
            <h2> Titanic </h2>

            <Spinner loading={loading} />

            <Table>
                <thead>
                    <tr>
                        <th>승객번호</th>
                        <th>승객이름</th>
                        <th>성별</th>
                        <th>나이</th>
                        <th>동승자 수</th>
                        <th>객실등급</th>
                        <th>방 호수</th>
                        <th>티켓번호</th>
                        <th>요금</th>
                        <th>탑승지</th>
                        <th>생존여부</th>
                    </tr>
                </thead>
                <tbody>
                    {titanicData.map( (v,i) => {
                        return (
                            <tr key={v.id}>
                                <td> {v.id} </td>
                                <td> {v.name} </td>
                                <td> <SexLabel sex={v.sex} /> </td>
                                <td> {v.age} </td>
                                <td> {v.sibsp + v.parch} </td>
                                <td> {v.pclass}등급 </td>
                                <td> {v.cabin} </td>
                                <td> {v.ticket} </td>
                                <td> {v.fare} </td>
                                <td> <EmbarkedLabel embarked={v.embarked} /> </td>
                                <td> <SurvivedLabel survived={v.survived} /> </td>
                            </tr>
                        )
                    } )}
                </tbody>
            </Table>
        </TitanicContainer>
    );
} );

export default Titanic;
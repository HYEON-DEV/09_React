import React, {memo, useState} from "react";
import styled from 'styled-components';
import dayjs from 'dayjs';


const DateRange1Container = styled.div`

`;

const DateRange1 = memo( () => {

    // dayjs 객체를 리턴 받는다
    const day = dayjs();

    /**
     * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
     * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언
     */
    const [myDate, setMyDate] = useState ( {
        startDate: day.format('YYYY-MM-DD'),
        endDate: day.format('YYYY-MM-DD')
    } );

    return(
        <DateRange1Container>
            <h2> DateRange1 </h2>
            <h3> {myDate.startDate} ~ {myDate.endDate} </h3>
            <div>
                <button type='button' onClick={ e => {
                    // setter 함수를 통해 JSON 형태의 상태값을 갱신할 때는 반드시 원래의 구조와 동일한 객체를 사용해야 한다
                    const newDate = {...myDate};
                    newDate.startDate = day.add(-15,'d').format('YYYY-MM-DD');
                    setMyDate(newDate);
                }}> 
                15일
                </button>
                <button type='button' onClick={ 
                    e => setMyDate( {...myDate, startDate: day.add(-1,'M').format('YYYY-MM-DD')} )} > 1개월 </button>
                <button type='button' onClick={ 
                    e => setMyDate( {...myDate, startDate: day.add(-3,'M').format('YYYY-MM-DD')} )} > 3개월 </button>
                <button type='button' onClick={ 
                    e => setMyDate( {...myDate, startDate: day.add(-6,'M').format('YYYY-MM-DD')} )} > 6개월 </button>
                <button type='button' onClick={ 
                    e => setMyDate( {...myDate, startDate: day.add(-12,'y').format('YYYY-MM-DD')} )} > 1년 </button>
            </div>
        </DateRange1Container>
    );
} );

export default DateRange1;
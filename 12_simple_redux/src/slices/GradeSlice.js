import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosHelper from '../helpers/AxiosHelper';

// 연동할 백엔드 주소 (에러테스트용)
// const API_URL = '/grade123';
// 연동할 백엔드 주소 (정상)
const API_URL = '/grade';


// Ajax 처리를 위한 함수 정의
export const getList = createAsyncThunk( 'GradeSlice/getList', async ( payload, {rejectWithValue} ) => {
    
    let result = null;

    try {
        result = await axiosHelper.get(API_URL);
    } catch(err) {
        result = rejectWithValue(err);
    }

    return result;
} );


// Slice 객체 생성
const GradeSlice = createSlice( {
    name: 'GradeSlice',

    initialState: {
        status: 200,
        message: "OK",
        item: null,
        timestamp: null,
        loading: false
    },  

    // 일반 상태값을 갱신하기 위한 함수들 구현 (여기서는 사용 안함)
    reducers: {},

    // 비동기 상태값을 갱신하기 위한 함수들 구현 (주로 Ajax)
    extraReducers: builder => {
        // 백엔드와 연동 직전에 호출된다 => 로딩중임 표시
        // meta: {arg, reuestId, requestStatus}
        //  => arg: 컴포넌트에서 액션함수를 호출할 때 전달한 파라미터(payload)
        // payload : 백엔드에서 받은 데이터

        builder.addCase(getList.pending, (state, {meta, payload}) => {
            return {...state, loading: true}
        });

        // 백엔드와 연동 성공시 호출된다
        builder.addCase(getList.fulfilled, (state, {meta, payload}) => {
            return {
                status: payload.status,
                message: payload.message,
                item: payload.item,
                timestamp: payload.timestamp,
                loading : false
            }
        });

        // 백엔드와 연동 실패시 호출된다
        builder.addCase(getList.rejected, (state, {meta, payload}) => {
            return {
                ...state, 
                loading: false,
                status: payload.status || 0,
                message: payload.message || 'Unknown Errror'
            }
        });
    }
} );

export default GradeSlice.reducer;

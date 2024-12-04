import React, {memo, useState, useEffect, useCallback} from 'react';
import axiosHelper from '../../helpers/AxiosHelper';
import styled from 'styled-components';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';
import utilHelper from '../../helpers/UtilHelper';
// useNavigate => 페이지 이동을 위한 Hook
// useLocation => 현재 페이지의 URL 정보를 제공하는 Hook : QueryString 취득용도
import {useNavigate, useLocation} from 'react-router-dom';

const DepartmentContainer = styled.div`
    .form-container {
        padding: 10px 0;
        margin: 0;

        input, button {
            margin-right: 15px;
            font-size: 16px;
            padding: 5px 10px;
        }
    }
`;


const Department = memo(() => {

    const [department, setDepartment] = useState([]);

    const [loading, setLoading] = useState(false);

    // 페이지 강제 이동을 위한 객체 생성
    const navigate = useNavigate();

    // 검색어를 저장하기 위한 상태변수 
    // const [keyword, setKeyword] = useState('');

    // QueryString 에 포함된 keyword 값을 취득 
    const {search} = useLocation();
    const {keyword} = utilHelper.getQuery(search);

    useEffect( () => {
        
        ( async() => {
            setLoading(true);

            let data = null;

            const args = {};
            if (keyword) {
                args['dname_like'] = keyword;
            }
            
            try {
                // react router에 정의되지 않고, public 폴더에도 맵핑되는 경로가 없을 경우
                // package.json에 설정된 proxy 경로를 기준으로 ajax 요청을 보낸다
                data = await axiosHelper.get('/department', args);
                console.log(data);
            } catch(e) {
                console.error(e);
                alert(e.message);
                return;
            } finally {
                setLoading(false);
            }

            setDepartment(data.item);
        } )();
    }, [keyword] );
    
    // 검색폼에서의 전송이벤트
    const onSearchSubmit = useCallback( e => {
        e.preventDefault();

        const form = e.currentTarget;

        // 폼안의 input 태그의 name 속성으로 접근하여 입력값 취득
        const keyword = form.keyword.value;
        console.log(`검색어 : ${keyword}`);

        // setKeyword(keyword);

        // 검색어를 QueryString 으로 지정하여 페이지를 이동한다
        // 실제로는 페이지 이동이 아니라 URL 변조만 이루어진다
        // 웹 브라우저는 주소가 변경되었으므로 페이지 이동을 인식한다
        // => 페이지 이동으로 인식되면 리액트는 화면상의 모든 컴포넌트를 다시 렌더링한다
        // => URL이 변조되면 화면에 표시되는 컴포넌트가 처음부터 재실행된다는 뜻
        navigate(`/department?keyword=${keyword}`);
    }, [] );

    return (
        <DepartmentContainer>
            <h2>Department</h2>

            <Spinner loading={loading} />

            <form className='form-container' onSubmit={onSearchSubmit} >
                <input type='text' name='keyword' />
                <button type='submit'> 검색 </button>
            </form>

            <Table>
                <thead>
                    <tr>
                        <th> 학과번호 </th>
                        <th> 학과명 </th>
                        <th> 학과위치 </th>
                        <th> 수정 </th>
                        <th> 삭제 </th>
                    </tr>
                </thead>
                <tbody>
                    {department.map( (v,i) => {
                        return (
                            <tr key={v.id}>
                                <td> {v.id} </td>
                                { keyword ? (
                                    <td dangerouslySetInnerHTML={ {__html: v.dname.replaceAll(keyword, `<mark>${keyword}</mark>`)} }></td>
                                ) : (
                                    <td> {v.dname} </td>
                                ) }
                                <td> {v.loc} </td>
                                <td> 수정 </td>
                                <td> 삭제 </td>
                            </tr>
                        )
                    } )}
                </tbody>
            </Table>
        </DepartmentContainer>
    );
});

export default Department;
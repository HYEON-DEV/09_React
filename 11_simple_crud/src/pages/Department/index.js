import React, {memo, useState, useEffect, useCallback} from 'react';
import axiosHelper from '../../helpers/AxiosHelper';
import styled from 'styled-components';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';
import utilHelper from '../../helpers/UtilHelper';
import regexHelper from '../../helpers/RegexHelper';

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

    const [updateId, setUpdateId] = useState(-1);

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

            // json-server 에 정렬조건 설정하기
            // => _sort=컬럼명, _order = asc | desc 
            const args = {_sort: 'id', _order: 'desc'};

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


    // 데이터 추가 submit 이벤트
    const onDataAddSubmit = useCallback( e => {
        e.preventDefault();

        const form = e.currentTarget;

        try {
            regexHelper.value('#dname', '학과명을 입력하세요.');
            regexHelper.maxLength('#dname', 20, '학과명은 20자 이내로 입력하세요.');
            regexHelper.value('#loc', '위치를 입력하세요');
            regexHelper.maxLength('#loc', 20, '위치는 20자 이내로 입력하세요.');
        } catch(error) {
            alert(error.message);
            error.element.focus();
            return;
        }

        // 폼안의 input태그의 name속성으로 접근하여 입력값 취득
        const dname = form.dname.value;
        const loc = form.loc.value;

        ( async() => {
            // Ajax로딩 시작을 알림 => 함수형 업데이트
            setLoading(loading => true);

            let data = null;

            try {
                data = await axiosHelper.post("/department", {
                    dname: dname,
                    loc: loc
                });
                console.group('데이터 저장 결과');
                console.log(data);
                console.groupEnd();
            } catch (e) {
                console.error(e);
                alert(e.message);
                return;
            } finally {
                // Ajax 로딩 종료를 알림 => 함수형 업데이트
                setLoading (loading => false);
            }

            // 저장이 완료된 후에는 상태값을 갱신한다 => 화면이 자동으로 갱신된다
            // 1) Ajax로 백엔드에게 전체 목록을 다시 요청한다 => 비효율적 (네트워크 트래픽 낭비)
            // 2) 현재 출력되고 있는 상태변수(배열)에 백엔드로부터 받은 신규 데이터만 추가한다
            // 주의 : useEffect 안에서 기존의 상태값을 읽어오기 위해서는 종속성 배열에 해당 상태변수를 나열해야 한다

            // setDepartment( function(current) {
            //     return [data.item, ...current];
            // } );

            // setDepartment( current => [data.item, ...current] );

            const newData = [data.item, ...department];
            setDepartment(newData);
        } )();
    }, [department] );


    // 데이터 삭제 버튼 click 이벤트 
    const onDataDeleteClick = useCallback( e => {
        e.preventDefault();

        const button = e.currentTarget;

        const id = parseInt(button.dataset.id);
        const dname = button.dataset.dname;
        console.log(`삭제 : ${id}, ${dname}`);

        if ( !confirm(`정말 ${dname}을 삭제하시겠습니까?`) ) {
            return;
        }

        // 삭제 요청을 위한 Ajax 처리
        ( async () => {
            setLoading(true);

            try {
                // 삭제의 경우 Ajax 응답 결과 필요 X
                await axiosHelper.delete(`/department/${id}`);
            } catch (e) {
                console.error(e);
                alert(e.message);
                return;
            } finally {
                setLoading(false);
            }

            // 백엔드에서 삭제되더라도 프론트가 갖고 있는 상태값은 복사본이므로
            // 삭제 요청된 항목과 일치하는 데이터를 직접 찾아서 제거해야 한다
            const newData = department.filter( (v,i) => v.id !== id );
            setDepartment(newData);
        } )();
    }, [department] );


    // 데이터 수정 버튼 submit 이벤트
    const onDataEditClick = useCallback( e => setUpdateId(parseInt(e.currentTarget.dataset.id)), [] );

    // 데이터 수정 submit 이벤트
    const onDataEditSubmit = useCallback( e => {
        e.preventDefault();

        const current = e.currentTarget;

        try {
            regexHelper.value('#edit-form input[name="dname"]', '학과명을 입력하세요');
            regexHelper.maxLength('#edit-form input[name="dname"]', 20, '학과명은 20자 이내로 입력하세요.');
            regexHelper.value('#edit-form input[name="loc"]', '위치를 입력하세요');
            regexHelper.maxLength('#edit-form input[name="loc"]', 20, '위치는 20자 이내로 입력하세요.');
        } catch(e) {
            alert(e.message);
            e.element.focus();
            return;
        }

        // <form>요소 내의 <input>요소들을 name속성값으로 접근하여 입력값을 얻음 
        const id = parseInt(current.id.value);
        const dname = current.dname.value;
        const loc = current.loc.value;
        console.log(`수정할 데이터 : ${id}, ${dname}, ${loc}`);

        ( async() => {
            setLoading(true);

            let data = null;

            try {
                data = await axiosHelper.put( `/department/${id}`, {
                    dname: dname,
                    loc: loc
                } );
                console.group('데이터 수정 결과');
                console.log(data);
                console.groupEnd();
            } catch(e) {
                console.error(e);
                alert(e.message);
                return;
            } finally {
                setLoading(false);
            }

            // 현재 출력중인 상태변수 department에 수정된 항목을 교체해야 한다
            // useEffect 안에서 상태변수를 사용해야 하므로 종속변수 배열에 department를 추가한다
            const editId = department.findIndex( (v,i) => v.id===id );
            console.log('수정된 항목의 인덱스 : ' + editId);
            const newData = [...department];
            newData.splice(editId, 1, data.item);
            console.log(newData);
            setDepartment(newData);

            setUpdateId(-1);
        } )();
    }, [department] );

    
    return (
        <DepartmentContainer>
            <h2>Department</h2>

            <Spinner loading={loading} />

            {/* 입력폼 */}
            <form className = 'form-container' onSubmit={onDataAddSubmit}>
                <input type='text' name='dname' id='dname' placeholder='학과명을 입력하세요' />
                <input type='text' name='loc' id='loc' placeholder='위치를 입력하세요' />
                <button type='submit'> 저장하기 </button>
            </form>
            <hr />

            {/* 검색폼 */}
            <form className='form-container' onSubmit={onSearchSubmit} >
                <input type='text' name='keyword' />
                <button type='submit'> 검색 </button>
            </form>

            <form onSubmit={onDataEditSubmit} id='edit-form'>
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
                            if (updateId===v.id) {
                                return (
                                    <tr key={`edit-${v.id}`}>
                                        <td>
                                            {/* value속성은 반드시 onChange 이벤트와 함께 사용해야 한다 */}
                                            {/* onChange 이벤트 없이 사용할 경우 defaultValue 속성 사용 */}
                                            <input type='hidden' name='id' defaultValue={v.id} />
                                            {v.id}
                                        </td>
                                        <td>
                                            <input type='text' name='dname' defaultValue={v.dname} />
                                        </td>
                                        <td>
                                        <input type='text' name='loc' defaultValue={v.loc} />
                                        </td>
                                        <td colSpan='2'>
                                            <button type='submit' > 수정 </button>
                                        </td>
                                    </tr>       
                                )
                            } else {
                                return (
                                    <tr key={v.id}>
                                        <td> {v.id} </td>
                                        { keyword ? (
                                            <td dangerouslySetInnerHTML={ {__html: v.dname.replaceAll(keyword, `<mark>${keyword}</mark>`)} }></td>
                                        ) : (
                                            <td> {v.dname} </td>
                                        ) }
                                        <td> {v.loc} </td>
                                        <td>
                                            <button type='button' data-id={v.id} onClick={onDataEditClick}> 수정 </button>
                                        </td>
                                        <td>
                                            <button type='button' data-id={v.id} data-dname={v.dname} onClick={onDataDeleteClick}> 삭제 </button>
                                        </td>
                                    </tr>
                                )
                            }
                            
                        } )}
                    </tbody>
                </Table>
            </form>
            
        </DepartmentContainer>
    );
});

export default Department;
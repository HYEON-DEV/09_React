import styled from 'styled-components';


const SexLabel = styled.span`
    &:before {
        color: ${ ({sex}) => sex==='male'? '#06f' : '#c0c' };
        content: '${ ({sex}) => sex==='male' ? '남자' : '여자' }';
        font-weight: 600;
    }
`;

const EmbarkedLabel = styled.span`
    &:before {
        color: ${ ({embarked}) => embarked==='C'? '#f60' : ( embarked==='Q'? '#00f' : '#990' ) };
        content: '${ ({embarked}) => embarked==='C'? '셰르부르' : ( embarked==='Q'? '퀸즈타운' : '사우샘프턴' ) }';
        font-weight: 600;
    }
`;

const SurvivedLabel = styled.span`
    &:before {
        color: ${ ({survived}) => survived===true? '#090' : '#e00' };
        content: '${ ({survived}) => survived===true ? '생존' : '사망' }';
        color: '#fff';
        font-weight: 600;
    }
`;


export { SexLabel, EmbarkedLabel, SurvivedLabel };
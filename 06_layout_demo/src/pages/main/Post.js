import React from "react";
import styled from 'styled-components';
import FakeImg from '../../components/FakeImg';
import mq from '../../components/MediaQuery';

const PostContainer = styled.div`
    flex: 1;
`;

const PostItem = styled.section`
    flex: 0 1 auto;
    padding: 20px;
    
    ${mq.maxWidth('sm')`
        flex: none;
        width: 100%;
    `}

    h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 10px auto;
    }

    h3{
        font-size: 18px;
        font-weight: 500;
        margin: 10px auto;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7px;
    }
`;

const Post = () => {
    return(
        <PostContainer>
            {
                [1,2,3,4,5,].map( (v,i) => {
                    return (
                        <PostItem key={i}>
                            <h2> TITLE HEADING </h2>
                            <h3> Title description, Dec 7, 2017 </h3>
                            <FakeImg height='200'> Image </FakeImg>
                            <p> Some text... </p>
                            <p> Sunt in culpa qui officia deserunt mollit anim id est lab culpa qui officia deserunt mollit anim id est lab culpa qui officia deserunt mollit anim id est lab </p>
                            <br/>
                        </PostItem>
                    )
                } )
            }
        </PostContainer>
    );
} ;

export default Post;
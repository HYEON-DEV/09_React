import React, {memo,useCallback,useState} from "react";
import styled from 'styled-components';
import img01 from '../../assets/img/img01.jpg';
import img02 from '../../assets/img/img02.jpg';
import img03 from '../../assets/img/img03.jpg';
import img04 from '../../assets/img/img04.jpg';
import img05 from '../../assets/img/img05.jpg';


const ImageExContainer = styled.div`
    .list {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 640px;
        margin: auto;
        display: flex;

        li {
            width: 20%;
            a {
                display: block;
                margin: 10px;
                img {
                    width: 100%;
                }
            }
        }
    }
    
    .viewer {
        width: 640px;
        margin: auto;
        padding: 0 10px;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
`;

const imgList = [
    {img: img01, alt: '테스트 이미지 1'},
    {img: img02, alt: '테스트 이미지 2'},
    {img: img03, alt: '테스트 이미지 3'},
    {img: img04, alt: '테스트 이미지 4'},
    {img: img05, alt: '테스트 이미지 5'},
];

const ImageEx = memo( () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const onThumbnailClick = useCallback( e => {
        const href = e.currentTarget.getAttribute('href');
        console.log(href);

        const idx = parseInt( href.substring(1) );
        console.log(idx);
        console.log(imgList[idx].img);

        // 상태값을 수정하면 해당 상태값이 관여하는 화면은 모두 자동 갱신된다
        setCurrentIndex(idx);
    },[]);


    return(
        <ImageExContainer>
            <h2> ImageEx </h2>

            <ul className="list">
                {imgList.map( (v,i) => {
                    return (
                        <li key={i}>
                            <a href={`#${i}`} onClick={onThumbnailClick}>
                                <img src={v.img} alt={v.alt} />
                            </a>
                        </li>
                    )
                } )}
            </ul>
            <div className="viewer">
                <img src={imgList[currentIndex].img} alt={imgList[currentIndex].alt} />
            </div>
        </ImageExContainer>
    );
} );

export default ImageEx;
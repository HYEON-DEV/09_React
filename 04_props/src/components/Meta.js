/**
 * <head> 태그 내의 SEO 처리 및 기본 참조 리소스 명시
 */

/** 패키지 참조 */

// 기본 참조 객체
import React from "react";

// SEO 처리 기능 패키지
import {Helmet, HelmetProvider} from "react-helmet-async";

// 미리보기 이미지 샘플
import sample from "../assets/img/sample.png";

const Meta = (
    {   title = "React Example", description = "React.js 예제", author = "HYEON",
        subject = "React.js Frontend Programming", copyright = "HYEON",
        keywords = "React", url = window.location.href, image = sample,
        icon = null, shortcutIcon = null, appleTouchIcon = null
     }
) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8" />
                <title> {title} </title>
                {/* SEO 태그 */}
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <meta name="subject" content={subject} />
                <meta name="copyright" content={copyright} />
                <meta name="content-language" content="ko" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />
                <link rel="icon" href={icon} type="image/png" />
                <link rel="shortcut icon" href={shortcutIcon} type="image/png" />
                <link rel="apple-touch-icon" href={appleTouchIcon} type="image/png" />
                {/* 구글 웹폰트 적용 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;
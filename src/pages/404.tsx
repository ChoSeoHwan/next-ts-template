import React from 'react';
import { NextPage } from 'next';

import styled from 'libs/styled';

import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';

const ErrorWrap = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
`;

const NotFoundTitle = styled.h1`
    margin-bottom: 10px;
    font-size: 4rem;
    font-weight: bold;
`;

const NotFoundSubTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 1.5rem;
`;

const MainButton = styled(Button)`
    padding: 10px 20px;
    font-size: 1.6rem;
    font-weight: bold;
`;

const Error404: NextPage = () => {
    return (
        <ErrorWrap>
            <NotFoundTitle>요청하신 페이지를 찾을 수 없습니다.</NotFoundTitle>
            <NotFoundSubTitle>
                원하시는 페이지의 주소가 정확한지 다시 한번 확인 해 주시기
                바랍니다.
            </NotFoundSubTitle>
            <div>
                <MainButton>
                    <Link href="/">메인으로 가기</Link>
                </MainButton>
            </div>
        </ErrorWrap>
    );
};

export default Error404;

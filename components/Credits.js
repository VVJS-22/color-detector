import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Credits = () => {
    return (
        <Wrapper>
            <p>Powered by</p>
            <Image 
                src='/assets/icons/fullLogo.svg'
                width={120}
                height={60}
                alt="Ambion Softwares"
            />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 0;
    p {
        color: #1591D8;
        font-weight: 600;
        padding: 1rem;
    }
`

export default React.memo(Credits);

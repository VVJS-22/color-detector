import React from 'react';
import styled from 'styled-components';
import SelectedImage from './SelectedImage';

const PrimeSection = ({ primeGradient, children }) => {
    return (
        <Wrapper primeGradient = {primeGradient}>
            <div className="gradient" />
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.section`
    width: 100%;
    /* height: 65%; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;


    .gradient {
        background: ${({primeGradient}) => primeGradient};
        background: ${({primeGradient}) => `-moz-linear-gradient(244.83deg, ${primeGradient} 54.68%, #3BC9F3 132.14%)`};
        background: ${({primeGradient}) => `-webkit-linear-gradient(244.83deg, ${primeGradient} 54.68%, #3BC9F3 132.14%)`};
        background: ${({primeGradient}) => `linear-gradient(244.83deg, ${primeGradient} 54.68%, #3BC9F3 132.14%)`};
        height: 65%;
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        max-width: 500px;
        margin: 0 auto;
        z-index: -1;
        @media screen and (min-width: 560px) {
        border-radius: 1rem;
        }
    }
`

export default React.memo(PrimeSection);

import React from 'react';
import styled from 'styled-components'
import Header from './Header';

const Layout = (props) => {
    const { primeGradient, children} = props
    return (
        <Wrapper primeGradient = {primeGradient}>
            <section className='gradient' />
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    max-width: 500px;
    
    
    .gradient {
        background: ${({primeGradient}) => primeGradient};
        background: ${({primeGradient}) => `-moz-linear-gradient(244.83deg, ${primeGradient} 54.68%, #3BC9F3 132.14%)`};
        background: ${({primeGradient}) => `-webkit-linear-gradient(244.83deg, ${primeGradient} 54.68%, #3BC9F3 132.14%)`};
        background: ${({primeGradient}) => `linear-gradient(244.83deg, ${primeGradient} 54.68%, #3BC9F3 132.14%)`};
        height: 45%;
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        max-width: 500px;
        margin: 0 auto;
        z-index: -1;
    }

`

export default React.memo(Layout);

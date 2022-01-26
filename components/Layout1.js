import React from 'react';
import styled from 'styled-components'

const Layout = (props) => {
    const { children} = props
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    max-width: 500px;
    box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 560px) {
        border-radius: 1rem;
    }
`

export default React.memo(Layout);
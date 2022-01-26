import React from 'react';
import styled from 'styled-components';

const SelectedImage = ({children}) => {
    return (
        <Wrapper>
            <div id="image-title">Selected Photo</div>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    #image-title {
        font-weight: 700;
        font-size: 1.25rem;
        padding: 1.7rem 1rem 1rem;
    }
`

export default React.memo(SelectedImage);

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ImageViewer = ({ src, styles }) => {
    return (
        <Wrapper>
            <div className='viewer-div' style={styles}>
                <Image
                src = { src }
                width = "100%"
                height = "100%"
                layout = 'responsive'
                alt='Check the file'
                />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;

    .viewer-div {
        width: 60%;
        position: relative;
    }
`

export default React.memo(ImageViewer);

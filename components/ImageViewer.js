import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ImageViewer = ({ src, styles }) => {
    return (
        <Wrapper>
            <div className='viewer-div' style={styles}>
                <div className='loader'>
                loading ...
                </div>
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

        .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #252525;
        }
    }
`

export default React.memo(ImageViewer);

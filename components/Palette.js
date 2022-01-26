import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Palette = () => {
    return (
        <Wrapper>
            <div className="palette-div">
                <span className="palette-code">#454545</span>
                <div className="palette-copy">
                    <Image 
                    src="/assets/icons/copy.svg"
                    height="100%"
                    width="100%"
                    layout="responsive"
                    alt = 'copy'
                    />
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    padding: 1rem;

    .palette {

        &-div {
            width: 150px;
            height: 80px;
            background: #454545;
            border-radius: 1rem;
            display: flex;
            justify-content: space-between;
            padding: 0.875rem;
            box-shadow: inset -10px -10px 20px rgba(252, 193, 193, 0.26), inset 10px 10px 20px rgba(0, 0, 0, 0.25);
        }

        &-copy {
            width: 25px;
            height: 25px;
            align-self: flex-start;
        }

        &-code {
            color: #252525;
            background: #ffffff;
            font-size: 0.75rem;
            padding: 0.2rem;
            border-radius: 0.25rem;
            align-self: flex-end;
        }
    }
`

export default React.memo(Palette);

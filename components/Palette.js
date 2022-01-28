import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Palette = ({ code, percentage }) => {

    const copy = (text) => {
        return navigator.clipboard.writeText(text)
    }

    return (
        <Wrapper code={code}>
            <div 
            className="palette-div"
            onClick={() => {
                copy(code)
            }}
            >
                <span
                className="palette-code">{code} | {percentage}%</span>
                <div className="palette-copy">
                    <Image 
                    src="/assets/icons/copy.svg"
                    height="100%"
                    width="100%"
                    layout="responsive"
                    alt = 'copy'
                    />
                </div>
                <div className="copied">Copied</div>
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
            background: ${({code}) => code};
            border-radius: 1rem;
            display: flex;
            justify-content: space-between;
            padding: 0.875rem;
            box-shadow: inset -10px -10px 20px rgba(252, 193, 193, 0.26), inset 10px 10px 20px rgba(0, 0, 0, 0.25);
            position: relative;
        }

        &-copy {
            width: 25px;
            height: 25px;
            align-self: flex-start;
        }

        &-code {
            color: #252525;
            background: #ffffff;
            font-size: 0.7rem;
            padding: 0.2rem;
            border-radius: 0.25rem;
            align-self: flex-end;
        }
    }

    .copied {
        position: absolute;
        background: #585858;
        border: 1px solid #e4e5e4;
        padding: 0.2rem 0.5rem;
        font-size: 0.75rem;
        border-radius: 0.25rem;
    }
`

export default React.memo(Palette);

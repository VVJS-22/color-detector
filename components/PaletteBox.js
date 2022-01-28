import React from 'react';
import styled from 'styled-components';

const PaletteBox = ({ children }) => {
    return (
        <Wrapper>
            <div id="palette-deck">
                <div id="palette-title">
                    click to copy
                </div>
                <div id="palette-section">
                    {children}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    #palette {
        &-deck {
            width: 90%;
            height: 100%;
            padding: 1rem;
        }

        &-title {
            color: #000000;
            font-size: 1.125rem;
            font-weight: 600;
            text-transform: capitalize;
            user-select: none;
        }

        &-section {
            display: grid;
            grid-template-columns: auto;
            justify-content: space-evenly;
            padding: 1rem;
            cursor: pointer;
            user-select: none;

            @media screen and (min-width: 360px) {
                grid-template-columns: auto auto;
            }
        }
    }
`

export default React.memo(PaletteBox);

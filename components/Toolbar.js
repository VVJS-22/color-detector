import React from 'react';
import styled from 'styled-components';
import ToolItem from './ToolItem';
import { tools } from '../lib/generators/toolbarGenerator';

const Tool = () => {
    return tools.map(item => <ToolItem key={item.id} {...item}/>)
}

const Toolbar = () => {
    return (
        <Wrapper>
            <div className="tool-deck">
                <Tool />
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    height: 150px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem;
    
    .tool {
        &-deck {
            width: 90%;
            /* height: 100%; */
            background: #faaa50fa;
            border-radius: 1rem;
            margin: 1rem 0;
            box-shadow: inset 10px 10px 20px #EBBD47, inset -10px -10px 20px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem;
        }
    }

`

export default React.memo(Toolbar);

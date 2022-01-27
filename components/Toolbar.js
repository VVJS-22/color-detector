import React from 'react';
import styled from 'styled-components';
import ToolItem from './ToolItem';
import { tools } from '../lib/generators/toolbarGenerator';
import Image from 'next/image';

const Tool = () => {
    return tools.map(item => <ToolItem key={item.id} {...item}/>)
}

const printResult = (event) => {
    return console.log(event.target.files[0])
}

const Toolbar = () => {
    return (
        <Wrapper>
            <form onSubmit="" className="tool-deck">
                <div className="input-wrapper">
                    <label htmlFor='img' >
                        <Image 
                        src='/assets/icons/addImage.svg'
                        width={50}
                        height={50}
                        alt = 'Add Image'
                        priority
                        />
                    </label>
                    <input 
                    type='file'
                    accept='image/*'
                    name='img'
                    id='img'
                    style={{display: 'none'}}
                    onChange={printResult}
                    />
                    <div className="label">Add Image</div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor='img' >
                        <Image 
                        src='/assets/icons/addImage.svg'
                        width={50}
                        height={50}
                        alt = 'Add Image'
                        priority
                        />
                    </label>
                    <input 
                    type='file'
                    accept='image/*'
                    camera='user'
                    name='img'
                    id='img'
                    // style={{display: 'none'}}
                    onChange={printResult}
                    />
                    <div className="label">Add Image</div>
                </div>
                <div className="input-wrapper">
                    <button type="submit">
                        <Image 
                            src='/assets/icons/process.svg'
                            width={50}
                            height={50}
                            alt = 'Process'
                            priority
                        />
                    </button>
                    <div className="label">process</div>
                </div>
            </form>
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

    .input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .label {
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: capitalize;
        }
    }

    button[type=submit] {
        border: none;
        background: transparent;
    }

`

export default React.memo(Toolbar);

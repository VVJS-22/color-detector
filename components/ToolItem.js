import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ToolItem = (props) => {

    const printResult = (event) => {
        return console.log(event.target.files[0])
    }

    const {
        icon,
        label,
        input
    } = props

    return (
        <Wrapper>
            <label htmlFor={input.id} >
            <Image 
            src={icon}
            width={50}
            height={50}
            alt = {label}
            priority
            />
            </label>
            <input 
            {...input}
            onChange={printResult}
            />
            <div className="label">{label}</div>
        </Wrapper>
    );
};

const Wrapper = styled.section`

    .label {
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: capitalize;
    }

`

export default React.memo(ToolItem);

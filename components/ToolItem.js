import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ToolItem = ({ icon, label}) => {
    return (
        <Wrapper>
            <Image 
            src={icon}
            width={50}
            height={50}
            alt = {label}
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

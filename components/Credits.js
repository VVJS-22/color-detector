import React from "react"
import styled from "styled-components"
import Image from "next/image"

const Credits = () => {
    return (
        <Wrapper>
            <p>Powered by</p>
            <Image 
                src='/assets/icons/fullLogo.svg'
                width={120}
                height={60}
                alt="Ambion Softwares"
            />
        </Wrapper>
    ) 
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 0;
    user-select: none;
    pointer-events: none;

    p {
        color: #1591D8;
        font-weight: 600;
        padding-right: 1rem;
    }
`

export default React.memo(Credits)
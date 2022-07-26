import React from 'react'
import styled from 'styled-components'

const TypeDesc = ({children}) => {
  return (
    <Wrapper>
        <summary id="summary-title">Tool Descriptions</summary>
        {children}
    </Wrapper>
  )
}

export default React.memo(TypeDesc)

const Wrapper = styled.details`
    padding: 1rem;
    padding-left: 2rem;
    color: #252525;
    width: 100%;
    cursor: pointer;

    #summary-title {
        line-height: 1.5;
        font-size: 1.5rem;
        font-weight: 600;
    }
`
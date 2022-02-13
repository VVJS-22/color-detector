import React from 'react'
import styled from 'styled-components'

const PickerHelp = () => {
  return (
    <Wrapper>
        <ul>
            <li>
                Click on image to get the exact palette.
            </li>
            <li>
                A pixel surrounded by the maximum area of cursor will be returned.
            </li>
            <li>
                Click the returned palette to copy hexcode.
            </li>
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    color: #252525;
    font-weight: 300;
    align-self: center;
    width: 50%;

    ul {
        margin: 1rem 0;
    }

    li {
        margin-bottom: 1rem;
    }
`

export default PickerHelp
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const TypeTutor = ({title, slug, description}) => {
  return (
    <details>
        <summary>{title}</summary>
        <Wrapper>
            <img
            alt={title}
            src={slug}
            />
            <div className="type-description">{description}</div>
        </Wrapper>
    </details>
  )
}

export default React.memo(TypeTutor)

const Wrapper = styled.section`
    color: #000;
    background: #F26263;
    width: 80%;
    height: auto;
    display: flex;
    flex-flow: row;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

    .type {
        &-description {    
            font-size: 0.875rem;
            width: 60%;
            color: #fff;
            padding: 1rem;
            line-height: 1.5;
        }   
    }

    img {
            width: 40%;
            max-height: 130px;
            /* height: 60px; */
        }
`


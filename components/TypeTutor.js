import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const TypeTutor = ({title, slug, description}) => {
  return (
    <details>
        <summary>{title}</summary>
        <Wrapper>
            <div className='type-wrapper'>
                <Image
                    alt={title}
                    src={slug}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
            </div>
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
        &-wrapper {
        width: 40%;
        height: 250px;
        position: relative;
        }
        @media screen and (min-width: 470px){
            &-wrapper {
                height: 120px;
            }
        }

        @media screen and (min-width: 415px){
            &-wrapper {
                height: 150px;
            }
        }

        @media screen and (min-width: 410px){
            &-wrapper {
                height: 150px;
            }
        }

        @media screen and (min-width: 290px){
            &-wrapper {
                height: 200px;
            }
        }

        &-description {    
            font-size: 0.875rem;
            width: 60%;
            color: #fff;
            padding: 1rem;
            line-height: 1.5;
        }   
    }
`


import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { socialMedia } from '../lib/generators/socialMedia';

const MediaIcon = React.memo(({ url, src, alt }) => {
    return(
        <a href={url}>
            <Image src={src} alt={alt} width='25px' height='25px'/>
        </a>
    )
})

MediaIcon.displayName = 'MediaIcon'

const Credits = () => {
    return (
        <Wrapper>
            <div className="credits-deck">
                <Image 
                    src='/assets/icons/footer-logo.png'
                    width={120}
                    height={50}
                    alt="Ambion Softwares"
                />
                <p>We develop innovative products and services that offer total information and communication solutions. We offer a variety of services and our work is praised by satisfied clients all over the world.</p>
                <div className="social-media">
                    {socialMedia.map(item => (
                        <MediaIcon key={item.id} {...item} />
                    ))}
                </div>
                <div className="address">
                    <h2 className="address-title">
                        Get In Touch
                    </h2>
                    <div className="address-data">
                        Unit 503, Aspire building, 13763 101 avenue, Surrey V3T0N8, British Columbia, Canada.<br />
                        ambionsoftwares@gmail.com<br />
                        +91 9342233411
                    </div>
                </div>
            </div>
            <hr />
            <div className='copy-right'>
                Copyright © 2022 Ambion Softwares | Powered by Ambion Softwares
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`

    background: #2e323e;

    .credits-deck {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 1rem 0;
        width: 100%;
        /* height: 200px; */
        flex-direction: column;
        padding: 1rem 2rem;
    }
    
    p, .address-data {
        /* color: #1591D8; */
        font-weight: 400;
        /* padding: 1rem; */
        line-height: 1.5;
        padding: 2rem 0;
        font-size: 0.9rem;
        letter-spacing: 0.2px;
    }

    a {
        padding: 0 1rem;
    }

    .address {

        margin-top: 1rem;

        &-title, &-data {
            margin-top: 1rem;
            padding: 0;
        }
    }

    hr {
        border: none;
        border-top: 1px solid #3b5a6b;
    }

    .copy-right {
        text-align: center;
        padding: 1rem;
        font-size: 0.9rem;
        letter-spacing: 0.2px;
        line-height: 1.5;
    }
`

export default React.memo(Credits);

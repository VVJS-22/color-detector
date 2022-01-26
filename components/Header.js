import React from 'react';
import styled from 'styled-components'
import Image from 'next/image';

const Header = ({ title, buttonItems: { navIcon, iconWidth = "60px", padding = "0.5rem" } }) => {
    return (
        <Wrapper padding = {padding}>
            <div className='header-hamburger'>
                <Image
                src={navIcon}
                width={iconWidth} 
                height="100%"
                alt='Navigate'
                />
            </div>
            <h1 className='header-title'>{title}</h1>
            <div className="header-logo">
                <Image 
                src="/assets/icons/ambion.svg"
                width={35} 
                height="100%"
                alt='Ambion'
                />
                </div>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    height: 50px;
    

    .header {
        &-title {
            font-weight: 900;
            color: #ffffff;
            z-index: 10;

            @media screen and (min-width: 330px) {
                font-size: 1.75rem;
            }
        }
        &-hamburger {
            padding: ${({padding}) => padding};
        }
        &-logo {
            padding: 1rem;
        }
    }
`

export default React.memo(Header);

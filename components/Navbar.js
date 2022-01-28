import React, { useCallback } from 'react';
import styled from 'styled-components';

const Navbar = ({isOpen, setIsOpen}) => {
    return (
        <Wrapper >
            <div className={isOpen ? 'navbar open' : 'navbar' }>
                <div 
                onClick={useCallback(() => {
                    setIsOpen(false)
                }, [isOpen])}
                className="navbar-close-btn">X</div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`

    .navbar {
        background: rgb(59,201,243);
        background: -moz-radial-gradient(circle, rgba(59,201,243,1) 40%, rgba(21,145,216,1) 84%);
        background: -webkit-radial-gradient(circle, rgba(59,201,243,1) 40%, rgba(21,145,216,1) 84%);
        background: radial-gradient(circle, rgba(59,201,243,1) 40%, rgba(21,145,216,1) 84%);
        /* border-radius: 50%; */
        z-index: 20;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        transform: translateX(-100%);
        transition: all 0.4s ease-in;

        &.open {
            transform: translateX(0);
        }

        &-close-btn {
            font-size: 2rem;
            font-weight: 700;
            padding: 1rem 1.5rem;
            text-align: right;
        }
    }
`

export default Navbar;

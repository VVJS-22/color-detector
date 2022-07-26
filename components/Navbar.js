import Image from 'next/image';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { navLinks } from '../lib/generators/navBarGenerator';

const NavLink = React.memo(({url, label, target, icon = '/assets/icon/home.svg'}) => {
    return ( 
        <Nav>
            <Image
            src={icon}
            width={35}
            height={35}
            alt={label}
            />
            <a className='icon-label' target={target} href={url}>{label}</a>
        </Nav>
    );
});

NavLink.displayName = 'NavLink'


const Navbar = ({isOpen, setIsOpen}) => {
    return (
        <Wrapper >
            <div className={isOpen ? 'navbar open' : 'navbar' }>
                <div 
                onClick={useCallback(() => {
                    setIsOpen(false)
                }, [isOpen])}
                className="navbar-close-btn">X</div>
                <div className="navbar-items">
                    {
                        navLinks.map(item => <NavLink key={item.id} {...item}/>)
                    }
                </div>
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
            user-select: none;
            cursor: pointer;
            position: fixed;
            top: 25px;
            right: 25px;
        }

        &-items {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
    }
`

const Nav = styled.section`
    padding: 1rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    width: 200px;
    max-width: 100%;

    .icon-label {
        margin-left: 1rem;
    }
`

export default Navbar;

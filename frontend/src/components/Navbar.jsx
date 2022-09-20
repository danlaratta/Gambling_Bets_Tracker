import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo.png'


const Container = styled.div`
    width: 100%;
    background-color: ${props => props.bgColor ? "#000" : "rbga(0, 0, 0, 0)"};
    position: fixed;
    z-index: 10;
`

const Wrapper = styled.div`
    padding: 1rem 2rem;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
`

const LeftSection = styled.div`
    width: 100%;
`

const CenterSection = styled.div`
    width: 100%;
`

const RightSection = styled.div`
    width: 100%;
`

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 8rem;
    height: 8rem;
    padding-right: 2rem;
`

const LogoLink = styled(Link)`
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    text-decoration: none;
`

const NavList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`


const NavItem = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.8rem;

    &:hover{
        color: gold;
    }
`

const AuthContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const AuthText = styled.span`
    color: #fff;
    font-size: 1.8rem;
    margin-right: 1rem;
    padding-right: 1rem;
`


const Navbar = () => {
    const [bgColor, setBgColor] = useState(false)

    const changeBgColor = () => {
        window.scrollY >= 100 ? setBgColor(true) : setBgColor(false)
    }

    window.addEventListener('scroll', changeBgColor)

    return (
        // <Container style={{backgroundColor: bgColor ? 'red' : 'blue'}}>
        <Container bgColor={bgColor}>
            <Wrapper>
                <NavContainer>
                    <LeftSection>
                        <LogoContainer>
                            <Link to='/'> <Logo src={ LogoImg } /> </Link>
                            <LogoLink to='/'> GamBull Tracker </LogoLink>
                        </LogoContainer>
                    </LeftSection>

                    <CenterSection>
                        <NavList>
                            <NavItem to='/bets'> Bets </NavItem>
                            <NavItem to='/stats'> Stats </NavItem>
                            <NavItem to='/add-bet'> Add Bet </NavItem>
                        </NavList>
                    </CenterSection>

                    <RightSection>
                        <AuthContainer>
                            <AuthText> Login </AuthText>
                            <AuthText> Sign Up </AuthText>
                        </AuthContainer>
                    </RightSection>
                </NavContainer>
            </Wrapper>
        </Container>
    )
}

export default Navbar
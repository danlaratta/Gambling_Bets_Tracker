import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo.png'
import { motion } from 'framer-motion'


const Container = styled.div`
    width: 100%;
    background-color: ${props => props.bgColor ? "#000" : "rbga(0, 0, 0, 0)"};
    position: fixed;
    z-index: 10;
`

const Wrapper = styled.div`
    padding: 1rem 2rem;
`

const NavContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
`

const LeftSection = styled(motion.div)`
    width: 100%;
`

const CenterSection = styled(motion.div)`
    width: 100%;
`

const RightSection = styled(motion.div)`
    width: 100%;
`

const LogoContainer = styled(motion.div)`
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

const LinkContainer = styled(motion.div)``


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

// VARIANTS
const NavVariant = {
    hidden: {
        y: -100,
        opacity: 0,
    },

    show: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 1,
        }
    }
}

const LinkVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'mirror',
        }
    }
}


const Navbar = () => {
    const [bgColor, setBgColor] = useState(false)

    const changeBgColor = () => {
        window.scrollY >= 100 ? setBgColor(true) : setBgColor(false)
    }

    window.addEventListener('scroll', changeBgColor)

    return (
        <Container bgColor={bgColor}>
            <Wrapper>
                <NavContainer
                    variants= { NavVariant }
                    initial= 'hidden'
                    animate= 'show'
                >
                    <LeftSection variants= { NavVariant }>
                        <LogoContainer variants= {LinkVariants}>
                            <Link to='/'> <Logo src={ LogoImg } /> </Link>
                            <LogoLink to='/'> GamBull Tracker </LogoLink>
                        </LogoContainer>
                    </LeftSection>

                    <CenterSection variants= { NavVariant }> 
                        <NavList>
                            <LinkContainer variants= {LinkVariants} whileHover= 'hover'> 
                                <NavItem to='/bets'> Bets </NavItem>
                            </LinkContainer>

                            <LinkContainer variants= {LinkVariants} whileHover= 'hover'> 
                                <NavItem to='/stats'> Stats </NavItem>
                            </LinkContainer>

                            <LinkContainer variants= {LinkVariants} whileHover= 'hover'> 
                                <NavItem to='/add-bet'> Add Bet </NavItem>
                            </LinkContainer>
                        </NavList>
                    </CenterSection>

                    <RightSection variants= { NavVariant }>
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




/*
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

*/
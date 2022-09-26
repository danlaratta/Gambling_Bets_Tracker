import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo.png'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Container = styled.div`
    width: 100%;
    background-color: #000;
`

const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FooterItems = styled.div`
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

const LinkContainer = styled(motion.div)`

`

const NavItem = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.8rem;

    &:hover{
        color: gold;
    }
`

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SocialItems = styled.div`
    color: #fff;
    font-size: 2.3rem;
    margin-right: 2rem;

    &:hover{
        color: gold;
        cursor: pointer;
    }
`

// VARIANTS
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


const Footer = () => {

    return (
        <Container>
            <Wrapper>
                <FooterItems>
                   <LogoContainer>
                        <Link to='/'> <Logo src={ LogoImg } /> </Link>
                        <LogoLink to='/'> GamBull Tracker </LogoLink>
                    </LogoContainer>
                </FooterItems>

                {/* <FooterItems>
                    <NavList variants= {LinkVariants}>
                        <LinkContainer> <NavItem to='/bets'> Bets </NavItem> </LinkContainer>
                        <LinkContainer> <NavItem to='/stats'> Stats </NavItem> </LinkContainer>
                        <LinkContainer> <NavItem to='/add-bet'> Add Bet </NavItem> </LinkContainer>
                    </NavList>
                </FooterItems> */}

                <FooterItems> 
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
                    </FooterItems>

                <FooterItems>
                    <SocialContainer>
                        <SocialItems> <BsFacebook /> </SocialItems>
                        <SocialItems> <BsInstagram /> </SocialItems>
                        <SocialItems> <BsTwitter /> </SocialItems>
                    </SocialContainer>
                </FooterItems>
            </Wrapper>
        </Container>
    )
}

export default Footer
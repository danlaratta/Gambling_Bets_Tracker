import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo.png'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

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

                <FooterItems>
                    <NavList>
                        <NavItem to='/bets'> Bets </NavItem>
                        <NavItem to='/stats'> Stats </NavItem>
                        <NavItem to='/add-bet'> Add Bet </NavItem>
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
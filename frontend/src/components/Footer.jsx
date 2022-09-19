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

const LogoSpan = styled.span`
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
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
`



const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <FooterItems>
                    <LogoContainer>
                        <Logo src={ LogoImg } />
                        <LogoSpan> GamBull Tracker </LogoSpan>
                    </LogoContainer>
                </FooterItems>

                <FooterItems>
                    <NavList>
                        <NavItem to='/'> Home </NavItem>
                        <NavItem to='/transactions'> Transactions </NavItem>
                        <NavItem to='/stats'> Stats </NavItem>
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
import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo.png'


const Container = styled.div`
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
`

const Wrapper = styled.div`
    padding: 1rem 2rem;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const Logo = styled.img`
    width: 8rem;
    height: 8rem;
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
    return (
        <Container>
            <Wrapper>
                <NavContainer>
                    <LeftSection>
                        <Link to='/'> <Logo src={LogoImg} /> </Link>
                    </LeftSection>

                    <CenterSection>
                        <NavList>
                            <NavItem to='/'> Home </NavItem>
                            <NavItem to='/transactions'> Transactions </NavItem>
                            <NavItem to='/stats'> Stats </NavItem>
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
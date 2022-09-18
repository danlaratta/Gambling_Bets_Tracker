import React from 'react'
import styled from 'styled-components/macro'
import HeroImg from '../assets/HeroImg.jpg'

const Container = styled.div`
    
`

const Wrapper = styled.div`
    position: relative;
`

const HeroImage = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const HeroContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
`

const HeroSection = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 15%;
    margin-left: 25%;
`

const Title = styled.span`
    font-size: 7rem;
    font-weight: bold;
    color: gold;
`

const Desc = styled.span`
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
`

const BetBtn = styled.button`
    color: #fff;
    width: 12%;
    border: none;
    background-color: #000;
    padding: 1.5rem 0rem;
    font-size: 1.8rem;
    border-radius: 1rem;
    cursor: pointer;

    &:hover{
        color: gold;
    }
`


const Home = () => {
    return (
        <Container>
            <Wrapper>
                <HeroImage />

                <HeroContainer>
                    <HeroSection>
                        <Title> GamBull Tracker </Title>
                        <Desc> Keep Track of All your Sports Bets </Desc>
                        <BetBtn> Add Bet </BetBtn>
                    </HeroSection>
                </HeroContainer>
              
            </Wrapper>
        </Container>
    )
}

export default Home
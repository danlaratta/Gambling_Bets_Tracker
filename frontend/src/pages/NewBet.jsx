import React from 'react'
import styled from 'styled-components/macro'
import BetCard from '../components/BetCard'
import Hero from '../components/Hero'
import HeroImg from '../assets/bg3.jpg'

const Container = styled.div`
    width: 100%;
    top: 0;
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
    z-index: -6;
`

const BodyContainer = styled.div`
    width: 100%;
`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8rem 0rem;
`

const BodyTitle = styled.span`
    font-size: 4rem;
    font-weight: bold;
    padding-bottom: 4rem;
`

const NewBet = () => {
    return (
        <Container>
            <Wrapper>
                <HeroImage />
                <Hero 
                    title='Add Bet' 
                    desc='Add your newly placed bets'
                />

                <BodyContainer>
                    <BodyWrapper>
                        <BodyTitle> New Bet </BodyTitle>

                    </BodyWrapper>
                </BodyContainer>
            </Wrapper>
        </Container>
    )
}

export default NewBet
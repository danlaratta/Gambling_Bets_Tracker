import React from 'react'
import styled from 'styled-components/macro'
import BetCard from '../components/BetCard'
import Hero from '../components/Hero'
import HeroImg from '../assets/bg1.jpg'

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
    padding: 5rem 0rem;
`

const BodyTitle = styled.h2`
    font-size: 4rem;
`

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`

const BetTransactions = () => {
    return (
        <Container>
            <Wrapper>
                <HeroImage />
                <Hero 
                    title='Bet Transactions' 
                    desc='All of your previous bets in one location'
                />

                <BodyContainer>
                    <BodyWrapper>
                        <BodyTitle> Your Bets </BodyTitle>

                        <CardsContainer>
                            <BetCard />
                            <BetCard />
                            <BetCard />
                        </CardsContainer>
                    </BodyWrapper>
                </BodyContainer>
 
            </Wrapper>
        </Container>
    )
}

export default BetTransactions
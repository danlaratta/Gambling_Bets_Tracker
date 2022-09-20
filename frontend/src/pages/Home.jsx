import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import HeroImg from '../assets/HeroImg.jpg'
import BetCard from '../components/BetCard'
import Hero from '../components/Hero'
import axios from 'axios'

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

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`

const CardItems = styled.div`
   margin: 2rem 0rem;
`


const Home = () => {

    const [bets, setBets] = useState([])

    useEffect(() => {
        const getBets = async () => {
            const res = await axios.get('http://localhost:3001/api/bets/')
            setBets(res.data)
        }

        getBets()
    }, [])

    return (
        <Container>
            <Wrapper>
                <HeroImage />
                <Hero 
                    title='GamBull Tracker' 
                    desc='Keep Track of All your Sports Bets'
                />

                <BodyContainer>
                    <BodyWrapper>
                        <BodyTitle> Recent Bets </BodyTitle>

                        { bets.slice(0, 3).map((bet) => (
                            <CardsContainer key={bet._id}>
                                <CardItems>
                                    <BetCard 
                                        desc= {bet.desc}
                                        wager= {bet.wager}
                                        outcome= {bet.outcome}
                                        payout= {bet.payout}
                                        createdAt= {bet.createdAt}
                                    />
                                </CardItems>
                            </CardsContainer>
                        ))}
                    </BodyWrapper>
                </BodyContainer>

            </Wrapper>
        </Container>
    )
}

export default Home
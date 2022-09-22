import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import HeroImg from '../assets/HeroImg.jpg'
import BetCard from '../components/BetCard'
import Hero from '../components/Hero'
import axios from 'axios'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

const CardsContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const CardItems = styled(motion.div)`
   margin: 2rem 0rem;
`


const Home = () => {

    const [bets, setBets] = useState([])

    const controls = useAnimation()
    const reviewControls = useAnimation()

    const [ref, inView] = useInView()
    const [reviewInView] = useInView()

    useEffect(() => {
        const getBets = async () => {
            const res = await axios.get('http://localhost:3001/api/bets/')
            setBets(res.data)
        }

        getBets()

        if(inView){
            controls.start('show')
        }

        if(reviewInView){
            reviewControls.start('show')
        }


    }, [controls, inView, reviewControls, reviewInView])

    // VARIANTS
    const CardsContainerVariants = {
        hidden: {
            opacity: 0,
        },
    
        show: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 1.5,
                staggerChildren: 1,
                 
            }
        }
    }
    
    const CardsVariants = {
        hidden: {
            x: -100,
            opacity: 0,
        },
    
        show: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 1, 
            }
        }
    }
    
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

                        <CardsContainer 
                            variants={ CardsContainerVariants }
                            initial= 'hidden'
                            animate= {controls}
                            ref={ref}
                        >
                            { bets.slice(0, 3).map((bet) => (
                                <CardItems 
                                    key={bet._id} 
                                    variants={ CardsVariants }
                                >
                                    <BetCard 
                                        desc= {bet.desc}
                                        wager= {bet.wager}
                                        outcome= {bet.outcome}
                                        payout= {bet.payout}
                                        createdAt= {bet.createdAt}
                                    />
                                </CardItems>
                            ))}
                        </CardsContainer>
                    </BodyWrapper>
                </BodyContainer>

            </Wrapper>
        </Container>
    )
}

export default Home
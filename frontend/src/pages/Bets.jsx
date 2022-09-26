import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import BetCard from '../components/BetCard'
import Hero from '../components/Hero'
import HeroImg from '../assets/bg1.jpg'
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

const BetSelect = styled.select`
    padding: 1rem 2.8rem;
    font-size: 1.6rem;
    margin-bottom: 2rem;
`

const BetOption = styled.option`
    padding: 1rem 2.8rem;
    font-size: 1.6rem;
`

const CardsContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CardItems = styled(motion.div)`
   margin: 2rem 0rem;
`

const Bets = () => {
    const [bets, setBets] = useState([])
    const [betType, setBetType] = useState('all')

    const controls = useAnimation()

    const [ref, inView] = useInView()


    useEffect(() => {
        const getBets = async () => {
            const res = await axios.get(`http://localhost:3001/api/bets/${betType}`)
            setBets(res.data)
        }

        getBets()

        if(inView){
            controls.start('show')
        }

    }, [betType, controls, inView])

    const handleSelect = (e) => {
        setBetType(e.target.value)
        // title.current.scrollIntoView({ behavior: "smooth" });
        // window.scrollTo(0, 300)
        window.scrollTo({ top: 230, behavior: 'smooth' })
    }


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
                staggerChildren: 0.8,
                 
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
                duration: 0.8, 
            }
        }
    }

    return (
        <Container>
            <Wrapper>
                <HeroImage />
                <Hero 
                    title='Bets History' 
                    desc='All of your previous bets in one location'
                />

                <BodyContainer>
                    <BodyWrapper>
                        <BodyTitle> Your Bets </BodyTitle>

                        <BetSelect value={betType} onChange= {handleSelect}>
                            <BetOption value='all'> All Bets </BetOption>
                            <BetOption value='wins'> Won Bets </BetOption>
                            <BetOption value='losses'> Lost Bets </BetOption>
                        </BetSelect>

                        <CardsContainer 
                            variants={ CardsContainerVariants }
                            initial= 'hidden'
                            animate= {controls}
                            ref={ref}
                        >
                            { bets.map((bet) => (
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

export default Bets

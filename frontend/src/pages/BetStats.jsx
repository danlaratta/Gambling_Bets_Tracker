import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import HeroImg from '../assets/bg2.jpg'
import Hero from '../components/Hero'
import SummaryCard from '../components/SummaryCard'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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

const SummaryContainer = styled(motion.div)`
    width: 100%;
`

const BetStats = () => {
    const [totalBets, setTotalBets] = useState(0)
    const [wonBets, setWonBets] = useState(0)
    const [lostBets, setLostBets] = useState(0)
    const [winnings, setWinnings] = useState(0)

    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        const getTotalBets = async () => {

            try {
                const res = await axios.get('http://localhost:3001/api/stats/total')
                setTotalBets(res.data)
            } catch (error) {
                console.log(error)
            }

            const resWon = await axios.get('http://localhost:3001/api/stats/won')
            setWonBets(resWon.data)

            const resLost = await axios.get('http://localhost:3001/api/stats/lost')
            setLostBets(resLost.data)

            const resWinnings = await axios.get('http://localhost:3001/api/stats/winnings')
            setWinnings(resWinnings.data)
        }

        getTotalBets()

        if(inView){
            controls.start('show')
        }

    }, [controls, inView, totalBets])

// VARIANTS
const SummaryVariants = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,
        transition: { 
            delay: 0.3,
            duration: 1,
             
        }
    }
}

    return (
        <Container>
            <Wrapper>
            <HeroImage />
                <Hero 
                    title='Bet Stats' 
                    desc='Summary of your all your placed bets'
                />

                <BodyContainer>
                    <BodyWrapper>
                        <BodyTitle> Your Stats </BodyTitle>

                        <SummaryContainer
                            variants={ SummaryVariants }
                            initial= 'hidden'
                            animate= {controls}
                            ref={ref}
                        >
                            <SummaryCard 
                                totalBets= {totalBets}
                                totalWon= {wonBets}
                                totalLost= {lostBets}
                                winnings= {winnings}
                            />
                        </SummaryContainer>
                    </BodyWrapper>
                </BodyContainer>
            </Wrapper>
        </Container>
    )
}

export default BetStats
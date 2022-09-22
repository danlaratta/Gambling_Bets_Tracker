import React from 'react'
import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

const HeroContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100vh;
    top: 0;
    position: absolute;
`

const HeroSection = styled(motion.div)`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 18%;
    margin-left: 25%;
`

const Title = styled(motion.span)`
    font-size: 7rem;
    font-weight: bold;
    color: gold;
`

const Desc = styled(motion.span)`
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
`

// VARIANTS
const HeroVariant = {
    hidden: {
        x: -100,
        opacity: 0,
    },

    show: {
        opacity: 1,
        x: 0,
        transition: { 
            duration: 1.5, 
        }
    }
}

const SectionVariant = {
    hidden: {
        x: -100,
        opacity: 0,
    },

    show: {
        opacity: 1,
        x: 0,
        transition: { 
            duration: 1, 
            delay: 0.5,
        }
    }
}

const HeroNoBtn = ({title, desc}) => {
    return (
        <HeroContainer>
            <HeroSection 
                variants= { HeroVariant }
                initial= 'hidden'
                animate= 'show'
            >
                <Title variants= { HeroVariant }> {title} </Title>
                <Desc variants= { SectionVariant }> {desc} </Desc>
            </HeroSection>
        </HeroContainer>
    )
}

export default HeroNoBtn
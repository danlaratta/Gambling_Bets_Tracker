import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
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

const Title = styled(motion.div)`
    font-size: 7rem;
    font-weight: bold;
    color: gold;
`

const Desc = styled(motion.span)`
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
`

const BtnContainer = styled(motion.div)`
    padding-top: 2rem;
`

const BetBtn = styled(Link)`
    color: #fff;
    width: 12%;
    border: 0.2rem solid #fff;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0);
    padding: 1.5rem 1.5rem;
    text-align: center;
    font-size: 1.8rem;
    border-radius: 1rem;
    cursor: pointer;

    &:hover{
        color: gold;
        background-color: rgba(0, 0, 0, 1);
    }
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

const BtnVariant = {
    hidden: {
        x: -100,
        opacity: 0,
    },

    show: {
        opacity: 1,
        x: 0,
        transition: { 
            duration: 1, 
            delay: 0.8,
        }
    }
}


const Hero = ({title, desc}) => {
    return (
        <HeroContainer>
            <HeroSection 
                variants= { HeroVariant }
                initial= 'hidden'
                animate= 'show'
            >
                <Title variants= { HeroVariant }> {title} </Title>
                <Desc variants= { SectionVariant }> {desc} </Desc>
                <BtnContainer variants= { BtnVariant }> 
                    <BetBtn to='/add-bet'> Add Bet </BetBtn>
                </BtnContainer>
            </HeroSection>
        </HeroContainer>
    )
}

export default Hero
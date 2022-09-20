import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const HeroContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100vh;
    top: 0;
    position: absolute;
`

const HeroSection = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 18%;
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

const Hero = ({title, desc}) => {
    return (
        <HeroContainer>
            <HeroSection>
                <Title> {title} </Title>
                <Desc> {desc} </Desc>
                <BetBtn to='/new-bet'> Add Bet </BetBtn>
            </HeroSection>
        </HeroContainer>
          
    )
}

export default Hero
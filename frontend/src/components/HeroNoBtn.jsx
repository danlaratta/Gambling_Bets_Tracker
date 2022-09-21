import React from 'react'
import styled from 'styled-components/macro'

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

const HeroNoBtn = ({title, desc}) => {
    return (
        <HeroContainer>
            <HeroSection>
                <Title> {title} </Title>
                <Desc> {desc} </Desc>
            </HeroSection>
        </HeroContainer>
    )
}

export default HeroNoBtn
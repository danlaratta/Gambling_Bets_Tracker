import React from 'react'
import styled from 'styled-components/macro'
import HeroImg from '../assets/HeroImg.jpg'

const Container = styled.div`
    
`

const Wrapper = styled.div`
    
`

const HeroImage = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
`





const Home = () => {
    return (
        <Container>
            <Wrapper>
                <HeroImage />

                <HeroContainer>

                </HeroContainer>
              
            </Wrapper>
        </Container>
    )
}

export default Home
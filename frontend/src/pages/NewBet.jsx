import React from 'react'
import styled from 'styled-components/macro'
import BetCard from '../components/BetCard'
import Hero from '../components/Hero'
import HeroImg from '../assets/bg3.jpg'

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

const FormTitle = styled.span`
    font-size: 4rem;
    font-weight: bold;
    padding-bottom: 4rem;
`

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const BetForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 0px 15px 3px #959595; 
    box-shadow: 0px 0px 15px 3px #959595;
    background-color: #dddddd;
    padding: 5rem 0rem;
`

const BetInput = styled.input`
    width: 50%;
    margin: 1.5rem 0rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    -moz-appearance: textfield;
    font-size: 1.6rem;

    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::-webkit-inner-spin-button {
         -webkit-appearance: none;
        margin: 0;
    }

`

const BetSelect = styled.select`
    width: 53.5%;
    margin: 1.5rem 0rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    background-color: #fff;
`

const Btn = styled.button`
    margin: 1.5rem 0rem;
    padding: 1.5rem 5rem;
    border-radius: 1rem;
    background-color: #000;
    outline: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;

    &:hover{
        color: gold;
        cursor: pointer;
    }
`

const NewBet = () => {
    return (
        <Container>
            <Wrapper>
                <HeroImage />
                <Hero 
                    title='Add Bet' 
                    desc='Add your newly placed bets'
                />

                <BodyContainer>
                    <BodyWrapper>
                        <FormContainer>
                            <BetForm>
                                <FormTitle> New Bet </FormTitle>

                                <BetInput 
                                    type= 'text'
                                    placeholder= 'Bet Description'
                                />

                                <BetInput 
                                    type= 'number'
                                    placeholder= 'Bet Wager'
                                />

                                <BetSelect>
                                    <option value=''> Bet Outcome </option>
                                    <option value='Won'> Won </option>
                                    <option value='Lost'> Lost </option>
                                </BetSelect>

                                <BetInput 
                                    type= 'text'
                                    placeholder= 'Bet Description'
                                />

                                <Btn type='submit'> Submit </Btn>
                            </BetForm>
                        </FormContainer>

                    </BodyWrapper>
                </BodyContainer>
            </Wrapper>
        </Container>
    )
}

export default NewBet
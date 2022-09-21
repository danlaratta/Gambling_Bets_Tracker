import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import HeroNoBtn from '../components/HeroNoBtn'
import HeroImg from '../assets/bg3.jpg'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import SuccessModal from '../components/SuccessModal'

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

const ErrorMsg = styled.span`
    font-size: 1.4rem;
    color: #ff0000;
`

const NewBet = () => {

    const [formData, setFormData] = useState({
        desc: '',
        wager: 0,
        outcome: '',
        payout: 0,
    })

    const {desc, wager, outcome, payout} = formData

    const [isSuccess, setIsSuccess] = useState(false)

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleForm = async (e) => {
        e.preventDefault()

        const newBet = {
            desc: desc,
            wager: wager,
            outcome: outcome,
            payout: payout,
        }

        try {
            await axios.post('http://localhost:3001/api/bets/', newBet)
            setIsSuccess(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
        if(isSuccess === true){
            setTimeout(() => {
                navigate('/bets')
            }, '2000')
        }
    }, [isSuccess])

    return (
        <Container>
            <Wrapper>
                <HeroImage />
                <HeroNoBtn 
                    title='Add Bet' 
                    desc='Add your newly placed bets'
                />

                { isSuccess && <SuccessModal />}

                <BodyContainer>
                    <BodyWrapper>
                        <FormContainer>
                            <BetForm onSubmit={handleForm}>
                                <FormTitle> New Bet </FormTitle>

                                <BetInput 
                                    type='text'
                                    placeholder= 'Bet Description'
                                    name= 'desc'
                                    onChange= {handleChange}
                                    />
    
                                <BetInput 
                                    type= 'number'
                                    placeholder= 'Bet Wager'
                                    name= 'wager'
                                    onChange= {handleChange}
                                />

                                <BetSelect 
                                    name= 'outcome'
                                    onChange= {handleChange}
                                >
                                    <option value=''> Bet Outcome </option>
                                    <option value='Won'> Won </option>
                                    <option value='Lost'> Lost </option>
                                </BetSelect>

                                <BetInput 
                                    type= 'number'
                                    placeholder= 'Bet Payout'
                                    name= 'payout'
                                    onChange= {handleChange}
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

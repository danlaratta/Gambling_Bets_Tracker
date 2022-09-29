import React from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import { BsTrashFill } from 'react-icons/bs'
import axios from 'axios'
import { motion } from 'framer-motion'

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const CardContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    background-color: #dddddd;
    padding: 3rem 3rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 0px 15px 3px #959595; 
    box-shadow: 0px 0px 15px 3px #959595;
`

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
`

const Desc = styled.span`
    font-size: 2.6rem;
    font-weight: bold;
`

const IconContainer = styled(motion.button)`
    font-size: 2.2rem;
    border: none;
    background-color: transparent;

    &:hover{
        cursor: pointer;
        color: #ff0000;
    }
`

const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.div`
    font-size: 1.8rem;
`

// VARIANTS
const LinkVariants = {
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'mirror',
        }
    }
}

const BetCard = ({desc, createdAt, wager, outcome, payout, id}) => {

    const handleDelete = async (id) => {
        try {
           await axios.delete(`http://localhost:3001/api/bets/${id}`)
        } catch (error) {
            console.log(error)
        }

        window.location.reload()
    } 

    return (
        <Container>
            <Wrapper>
                <CardContainer>
                    <TopSection>
                        <Desc> {desc} </Desc>
                        <IconContainer variants= {LinkVariants} whileHover= 'hover'> 
                            <BsTrashFill onClick={() => handleDelete(id)} /> 
                            
                        </IconContainer>
                    </TopSection>

                    <BottomSection>
                        <Text> <b> When:  </b>{moment(createdAt).fromNow()} </Text>
                        <Text> <b> Wager:  </b> { `$${wager}`} </Text>
                        <Text> <b> Outcome: </b> {outcome} </Text>
                        <Text> <b> Paid:  </b> { `$${payout}`} </Text>
                    </BottomSection>
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default BetCard


/*
import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import axios from 'axios'


const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const CardContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    background-color: #dddddd;
    padding: 3rem 3rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 0px 15px 3px #959595; 
    box-shadow: 0px 0px 15px 3px #959595;
`
const CardItems = styled.div`
    
`

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
`

const Desc = styled.span`
    font-size: 2.6rem;
    font-weight: bold;
`

const Date = styled.div`
    font-size: 1.8rem;
`

const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.div`
    font-size: 1.8rem;
`


const BetCard = () => {
    const [bets, setBets] = useState([])

    useEffect(() => {
        const getBets = async () => {
            const res = await axios.get('http://localhost:3001/api/bets/all')
            setBets(res.data)
        }

        getBets()

    }, [])

    return (
        <Container>
            <Wrapper>
                { bets.slice(0, 3).map((bet) => {
                    return(
                        <CardContainer>
                            <CardItems 
                                key={bet._id} 
                                // variants={ CardsVariants }
                            >
                                <TopSection>
                                    <Desc> {bet.desc} </Desc>
                                    <Date> {moment(bet.createdAt).fromNow()} </Date>
                                </TopSection>

                                <BottomSection>
                                    <Text> <b> Wager:  </b> { `$${bet.wager}`} </Text>
                                    <Text> <b> Outcome: </b> {bet.outcome} </Text>
                                    <Text> <b> Paid:  </b> { `$${bet.payout}`} </Text>
                                </BottomSection>
                            </CardItems>
                        </CardContainer>
                    )
                })}
                    
            </Wrapper>
        </Container>
    )
}

export default BetCard
*/

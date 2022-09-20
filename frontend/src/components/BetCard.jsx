import React from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'


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


const BetCard = ({desc, createdAt, wager, outcome, payout}) => {

    return (
        <Container>
            <Wrapper>
                <CardContainer>
                    <TopSection>
                        <Desc> {desc} </Desc>
                        <Date> {moment(createdAt).fromNow()} </Date>
                    </TopSection>

                    <BottomSection>
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
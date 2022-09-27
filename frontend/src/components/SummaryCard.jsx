import React from 'react'
import styled from 'styled-components/macro'

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
    gap: 8rem;
    background-color: #dddddd;
    padding: 5rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 0px 15px 3px #959595; 
    box-shadow: 0px 0px 15px 3px #959595;
`

const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    
`

const SectionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Title = styled.span`
    font-size: 2.4rem;
    font-weight: bold;
`

const Value = styled.span`
    font-size: 2.2rem;
`


const SummaryCard = ({totalLost, totalWon, totalBets, winnings, lost, earnings}) => {
    return (
        <Container>
            <Wrapper>
                <CardContainer>
                    <SectionContainer>
                        <SectionItem>
                            <Title> Total Bets Won: </Title>
                            <Value> {totalWon} </Value>
                        </SectionItem>

                        <SectionItem>
                            <Title> Total Bets Lost: </Title>
                            <Value> {totalLost} </Value>
                        </SectionItem>
                    </SectionContainer>

                    <SectionContainer>
                        <SectionItem>
                            <Title> Total Winnings: </Title>
                            <Value> ${winnings} </Value>
                        </SectionItem>

                        <SectionItem>
                            <Title> Total Lost: </Title>
                            <Value> ${lost} </Value>
                        </SectionItem>

                    </SectionContainer>

                    <SectionContainer>
                        <SectionItem>
                            <Title> Total Bets Placed: </Title>
                            <Value> {totalBets} </Value>
                        </SectionItem>

                        <SectionItem>
                            <Title> Overal Earnings: </Title>
                            <Value> ${earnings} </Value>
                        </SectionItem>
                    </SectionContainer>
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default SummaryCard
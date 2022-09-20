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


const SummaryCard = () => {
    return (
        <Container>
            <Wrapper>
                <CardContainer>
                    <SectionContainer>
                        <SectionItem>
                            <Title> Total Bets Won: </Title>
                            <Value> 19 </Value>
                        </SectionItem>

                        <SectionItem>
                            <Title> Total Bets Lost: </Title>
                            <Value> 13 </Value>
                        </SectionItem>
                    </SectionContainer>

                    <SectionContainer>
                        <SectionItem>
                            <Title> Total Winnings: </Title>
                            <Value> $2500 </Value>
                        </SectionItem>

                        <SectionItem>
                            <Title> Total Losses: </Title>
                            <Value> $1450 </Value>
                        </SectionItem>

                    </SectionContainer>

                    <SectionContainer>
                        <SectionItem>
                            <Title> Total Bets Placed: </Title>
                            <Value> 32 </Value>
                        </SectionItem>

                        <SectionItem>
                            <Title> Overal Earnings: </Title>
                            <Value> $1050 </Value>
                        </SectionItem>
                    </SectionContainer>
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default SummaryCard
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


const BetCard = () => {
    return (
        <Container>
            <Wrapper>
                <CardContainer>
                    <TopSection>
                        <Desc> NY Giants to win vs NY Jets </Desc>
                        <Date> 5 hours ago </Date>
                    </TopSection>

                    <BottomSection>
                        <Text> <b> Wager:  </b> $20 </Text>
                        <Text> <b> Outcome: </b> Won </Text>
                        <Text> <b> Paid:  </b> $35 </Text>
                    </BottomSection>
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default BetCard
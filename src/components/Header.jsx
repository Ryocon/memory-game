import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    
`

const Left = styled.div`
    
`

const Right = styled.div`
    
`

const Title = styled.h1`
    
`

const Score = styled.div`
    
`
const HighScore = styled.div`
    
`

const Description = styled.div`
    
`

const Header = (props) => {
    return (
        <Container>
            <Left>
                <Title>Memory Game!</Title>
                <Description>Match the images or something</Description>
            </Left>
            <Right>
                <Score>
                Score: {props.score}
                </Score>
                <HighScore>
                   High Score: {props.highScore}
                </HighScore>
            </Right>
            
        </Container>
    )
}

// To check if the prop is the correct type of data
Header.propTypes = {
    score: PropTypes.number,
    highScore: PropTypes.number,
}

export default Header
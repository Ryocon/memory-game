import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import Grid from './components/Grid'



function App() {

  // state logic
const [score, setScore] = useState(0) 
const [highScore, setHighScore] = useState(0)
const [reset, setReset] = useState(true)

const incrementScore = () => {
  setScore(() => score + 1)
  setReset(false)
}

const restartGame = () => {
  if (score > highScore) {
    setHighScore(score)
  }
  setScore(0)
  setReset(true)
}


// styling

const Container = styled.div`
    
`

  return (
   <Container>
    <Header 
    score={score}
    highScore={highScore}
    />
    <Grid 
    reset={reset}
    restartGame={restartGame}
    incrementScore={incrementScore}
    />
   </Container>
    
    
  )
}

export default App

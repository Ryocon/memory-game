import './App.css'
import { useState } from 'react'
import Header from './components/Header'



function App() {

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

  return (
    <>
    <div>
      hi
    </div>
    <Header 
    score={score}
    highScore={highScore}
    />
    </>
  )
}

export default App

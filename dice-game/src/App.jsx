import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import Game from './components/Game'

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  const toggleGameStarted = () => {
    setGameStarted(true)
  }


  return (
    <>
      {gameStarted ? <Game /> : <HomePage startGame={toggleGameStarted} />}

    </>
  )
}

export default App

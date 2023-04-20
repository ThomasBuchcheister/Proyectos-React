import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/Square'
import {TURNS} from './components/constants'
import { checkWinnerFrom, checkEndGame} from './logic/board'
import { WinnerModal } from './components/WinnerModal'



function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })


  const [turn, setTurn] = useState(()=>{
    const turnFromStrorage = window.localStorage.getItem('turn')
    return turnFromStrorage ?? TURNS.X
  })
  
  

  const [winner, setWinner] = useState(null)

  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    //si ya tiene algo
    if (board[index] || winner) return
    
    //actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //guardar aqui partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)


    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className='game'>
        {
          board.map((square, index)=>{
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

        <WinnerModal resetGame={resetGame} winner= {winner}/>
        
    </main>
    
  )
}

export default App

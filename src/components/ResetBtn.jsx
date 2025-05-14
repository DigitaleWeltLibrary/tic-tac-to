import { useNavigate } from "react-router-dom"

export const ReseteBtn = ({ setgame, setend, setwin, setPlayerSymbol }) => {
  /* NOTE reset the game and send the player to the start */
  const Navigate = useNavigate()
  const neuGame = () => Navigate("/")

  const resetgame = () => {
    const newgame = [null, null, null, null, null, null, null, null, null]
    setgame(newgame)
    setend(null)
    setwin(null)
    neuGame()
    setPlayerSymbol(null)
  }

  return <button onClick={resetgame}  >Starte ein neues Spiel</button>
}

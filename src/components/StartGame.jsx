import { useNavigate } from "react-router-dom"
import { faCircleNotch, faQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StartGame({ setPlayerSymbol, currentplayer }) {

    /* NOTE change the player symbol */
    const changePlayer = () => {
        if (currentplayer === null)
            setPlayerSymbol("X")
        else
            setPlayerSymbol(currentplayer === "X" ? "O" : "X")
    }

    /* NOTE sends the player to the game */
    const Navigate = useNavigate()
    const sendToGame = () => { Navigate("/game"); };

    return (
        <article className="start">
            <h1>Starte ein Spiel</h1>
            <p>Welche Figur will Spieler 1 sein?</p>
            <button onClick={changePlayer} className="player">
                <FontAwesomeIcon
                    icon={
                        currentplayer == null
                            ? faQuestion
                            : (currentplayer === "X" ? faXmark : faCircleNotch)
                    }
                    color='#72a24d'
                    size='2xl'
                />
            </button>

            <button
                disabled={currentplayer === null}
                onClick={sendToGame}
            >Spiel Starten</button>
        </article>
    )
}
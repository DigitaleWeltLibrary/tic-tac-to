import { useNavigate } from "react-router-dom"
import { faCircleNotch, faQuestion, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLang from "./ChangeLang";
import gettranslation from "../utils/gettranslation"

export default function StartGame({ setPlayerSymbol, currentplayer, changelanguage, getlang }) {

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
        <>
            <ChangeLang
                changelanguage={changelanguage}
                getlang={getlang}
            />
            <article className="start">
                <h1>{gettranslation(getlang, "start")}</h1>
                <p>{gettranslation(getlang, "character")}</p>
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
                >{gettranslation(getlang, "startbtn")}</button>
            </article>
        </>
    )
}
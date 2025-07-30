import { useNavigate } from "react-router-dom";
import { faCircleNotch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeLang from "./ChangeLang";
import gettranslation from "../utils/gettranslation";

export default function StartGame({
  setPlayerSymbol,
  currentplayer,
  changelanguage,
  getlang,
}) {
  /* NOTE sends the player to the game */
  const Navigate = useNavigate();
  const sendToGame = () => {
    Navigate("/game");
  };

  return (
    <>
      <ChangeLang changelanguage={changelanguage} getlang={getlang} />
      <article className="start">
        <h1>{gettranslation(getlang, "start")}</h1>
        <p>{gettranslation(getlang, "character")}</p>

        <section className="players">
          <button
            onClick={() => setPlayerSymbol("X")}
            className={currentplayer === "X" ? "active player" : "player"}
          >
            <FontAwesomeIcon icon={faXmark} color="#72a24d" size="2xl" />
          </button>
          <button
            className={currentplayer === "O" ? "active player" : "player"}
            onClick={() => setPlayerSymbol("O")}
          >
            <FontAwesomeIcon icon={faCircleNotch} color="#72a24d" size="2xl" />
          </button>
        </section>

        <button disabled={currentplayer === null} onClick={sendToGame}>
          {currentplayer == null
            ? gettranslation(getlang, "startbtn")
            : gettranslation(getlang, "startbtn") + " " + currentplayer}
        </button>
      </article>
    </>
  );
}

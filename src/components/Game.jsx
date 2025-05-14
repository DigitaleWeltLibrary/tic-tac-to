import React, { useEffect, useState } from 'react';
import { ReseteBtn } from './ResetBtn';
import GameFeeld from './GameFeeld';
import { useNavigate } from 'react-router-dom';

export default function Game({ setPlayerSymbol, currentplayer }) {
  /* NOTE redirect to start, when no play is selected */
  const Navigate = useNavigate()

  useEffect(() => {
    if (!currentplayer) { Navigate("/") }
  }, [currentplayer, navigator])

  /* NOTE States for the game */
  const [getgame, setgame] = useState([null, null, null, null, null, null, null, null, null]);
  const [gameend, setend] = useState(null)
  const [winfelds, setwin] = useState(null)
  const game = [...getgame]

  /* NOTE change player after turn */
  const changefeeld = (index) => {
    if (getgame[index] !== null) return;

    let game = [...getgame]
    game[index] = currentplayer;
    setgame(game)

    setPlayerSymbol(currentplayer === "X" ? "O" : "X");
  }

  /* NOTE check if there is a player who won */
  useEffect(() => {
    const winchances = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winchances.forEach(([a, b, c]) => {
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        setend("Der Gewinner ist " + game[a])
        setwin([a, b, c])
        return
      }
    });

    if (!game.includes(null)) {
      setend("Unentschieden")
    }
  }, [getgame])



  return (
    <article>
      <h1>{gameend ?? "Tic Tac To"}</h1>
      <article className="game">
        {
          getgame.map((field, index) => (

            <GameFeeld
              key={index}
              index={index}
              field={field}
              changefeeld={changefeeld}
              gameend={gameend}
              winfelds={winfelds}
            />

          ))
        }
      </article>

      {gameend != null &&
        <ReseteBtn
          setgame={setgame}
          setend={setend}
          setwin={setwin}
          setPlayerSymbol={setPlayerSymbol}
        />}

    </article>
  );
}






import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import StartGame from "./components/StartGame";
import { useState } from "react";
import './style/main.scss'

export default function App() {
    /* NOTE is the current player for the hole game */
    const [currentplayer, setplayer] = useState(null)

    /* NOTE is the function to change the current player */
    const setPlayerSymbol = (symbol) => setplayer(symbol)

    return (
        <BrowserRouter>
            <Routes>

              
                    <Route
                        path="/game"
                        element={<Game
                            currentplayer={currentplayer}
                            setPlayerSymbol={setPlayerSymbol}
                        />}
                    />
                <Route
                    path="*"
                    element={<StartGame
                        currentplayer={currentplayer}
                        setPlayerSymbol={setPlayerSymbol}
                    />}
                />
            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import StartGame from "./components/StartGame";
import { useEffect, useState } from "react";
import './style/main.scss'

export default function App() {
    /* NOTE is the language of the game */
    const [getlang, setlang] = useState(() => {
        const lang = localStorage.getItem('tictactolanguage')
        return lang ? lang : 'en'
    })

    /* NOTE useEffect to set the language of the game to localstorage */
    useEffect(() => {
        localStorage.setItem('tictactolanguage', getlang);
    }, [getlang]);

    /* NOTE changes the language of the game */
    const changelanguage = () => setlang(prevLang => prevLang === 'en' ? 'de' : 'en')

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
                        getlang={getlang}
                    />}
                />
                <Route
                    path="*"
                    element={<StartGame
                        currentplayer={currentplayer}
                        setPlayerSymbol={setPlayerSymbol}
                        changelanguage={changelanguage}
                        getlang={getlang}
                    />}
                />
            </Routes>
        </BrowserRouter>
    )
}
import React from 'react'
import { withInheritedProps } from 'object-path'
import AGame from "../AGame"

import gamesData from '../../gamesData'
import './index.css';


function GamesMenu({ setHighlightedGame }) {

    const gameComponents = gamesData.map(function(game){
        return (
            <AGame 
            game={game}
            setHighlightedGame={setHighlightedGame}
            />
        )
    })

return (
    <div id="game-buttons-box">
        <div className="game-items">
            {gameComponents}
        </div>
    </div>
)
}


export default GamesMenu
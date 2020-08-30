import React from 'react'
import { withInheritedProps } from 'object-path'
import AGame from "../AGame"
import gamesData from '../../gamesData.json'
import './index.css';


function GamesMenu(props) {

    const gameComponents = gamesData.map(function(game){
        return (
            <AGame 
            key={game.id}
            name={game.name} 
            image={game.image} />
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
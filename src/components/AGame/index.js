import React from 'react'
import './index.css';



function AGame({ game, setHighlightedGame }) {
    const hover = () => setHighlightedGame(game)
    const exit = () => setHighlightedGame(null)

return (
    <div onMouseEnter={hover} onMouseLeave={exit} className="btn">
         <img src={game.image} />
         {/* <img src={props.hover} alt="img" className="image-hover" class="img-top"/> */}
    </div>
    
)
}

export default AGame
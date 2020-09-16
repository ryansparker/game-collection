import React from 'react'
import './index.css';



function AGame({ game, setHighlightedGame }) {
    const hover = () => setHighlightedGame(game)
    const exit = () => setHighlightedGame(null)

return (
    <div onMouseEnter={hover} onMouseLeave={exit} className="btn">
         <a href={game.link}>
         <img src={game.image} />
         {/* <img src={props.hover} alt="img" className="image-hover" class="img-top"/> */}
         </a>
    </div>
    
)
}

export default AGame
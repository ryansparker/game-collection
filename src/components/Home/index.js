import React, { useState } from 'react'
import './index.css';
import Header from '../Header';
import GamesMenu from '../GamesMenu'
import Footer from '../Footer';
import Mountains from '../Video/gradient.mp4'


const Home = props => {
    const [highlightedGame, setHighlightedGame] = useState(null)

    return (
        <div id="home-box">
            <Header />
            <video src={highlightedGame?.video || Mountains} className="video" autoPlay loop muted>
                <source src={highlightedGame?.video || Mountains} type="video/mp4"/>
            </video>

          

            <div className="home-title">
            <h1 className="javascript">{highlightedGame?.blank || "Javascript"}</h1>   
            <h1 className="gradient-text">{highlightedGame?.name || "GAME COLLECTION"}</h1>
            </div>
            <GamesMenu setHighlightedGame={setHighlightedGame} />
            <Footer />

        </div>
    )
}





export default Home
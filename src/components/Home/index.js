import React from 'react'
import './index.css';
import GamesMenu from '../GamesMenu'
import Footer from '../Footer';
import Waves from '../Video/waves.mp4'

function Home() {


return (
    <div id="home-box">
        <video className="video" autoPlay loop muted>
            <source src={Waves} type="video/mp4"/>
        </video>

        <div className="home-about">
        <h3 className="about">About</h3>
        </div>

        <div className="home-title">
        <h1>Games Collection</h1>
        </div>
        <GamesMenu />
      <Footer />

    </div>
)
}


export default Home
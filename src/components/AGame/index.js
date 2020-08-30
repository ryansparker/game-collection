import React from 'react'
import './index.css';



function AGame(props) {
    console.log(props)
return (
    <div>
         <img src={props.image} alt="img" className="image" />
    </div>
)
}

export default AGame
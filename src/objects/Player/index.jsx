import React from "react";
import './styles.css'
import Circle from "../Circle";
import Cross from "../Cross";

const Player = ({player})=>{
    const players = [];
    players['x'] = <Cross/>
    players['o'] = <Circle/>
    return (
        <button className="player">
            {players[player]}
        </button>
    )
}

export default Player
import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Spelgebied from './Spelgebied';


const Game = () => {
    const [spelgebied, setSpelgebied] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(spelgebied);
    const style = {
        color: "red"
    }

    const handleClick = i => {
        const spelgebiedCopy = [...spelgebied];
        
        // If user click an occupied Hokje or if game is won, return
        if (winner || spelgebiedCopy[i]) return;
        // Put an X or an O in the clicked Hokje
        spelgebiedCopy[i] = xIsNext ? 'X' : 'O';

        console.log(spelgebiedCopy[i]);
        // spelgebiedCopy[i] = xIsNext ? spelgebiedCopy[i].style.color = "red" : "";
        setSpelgebied(spelgebiedCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button className="startgame"  onClick={() => setSpelgebied(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
            <Spelgebied Hokjes={spelgebied} onClick={handleClick} />
            <div className = "game">
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
    
}



export default Game;
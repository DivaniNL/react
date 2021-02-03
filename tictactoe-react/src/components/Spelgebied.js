import React from 'react';
import Hokje from './Hokje';
import './../custom.css';

const Spelgebied = ({ Hokjes, onClick }) => (
    
    <div className = "Spelgebied">
        {Hokjes.map((hokje, i) => (
            <Hokje key={i} value={hokje} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Spelgebied;  
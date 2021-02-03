import React from 'react';

const Hokje = ({ value, onClick }) => (
    <button id= {value + "color"} className='button' onClick={onClick}>
        {value}
    </button>
);
export default Hokje;
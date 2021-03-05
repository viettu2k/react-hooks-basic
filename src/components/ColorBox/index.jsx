import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';
ColorBox.propTypes = {
    
};
function getRandomColor(p) {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}
function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor;
    });//khoi tao userState
    function handleBoxClick() {
        //get random color -> setColor
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className="color-box" 
        style={{backgroundColor: color}}
        onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;
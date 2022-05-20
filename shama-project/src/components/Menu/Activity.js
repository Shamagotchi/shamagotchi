import React from 'react';
import Menu from './Menu';
import './Activity.scss' 

const Activity = ({say, setSay,findMyGhost, menuActive, isMenuOn}) => {
    const sayImage = require('../../img/chat.png') // say 이미지 
    return (
        <div className="selectBox">
            <button type="button" onClick={() => menuActive()} className="say">
                <img src={sayImage} width="20" alt="say"/>
            </button>
            {
                isMenuOn && <Menu say={say} setSay={setSay} findMyGhost={findMyGhost}/>
            }
        </div>
    );
};

export default Activity;
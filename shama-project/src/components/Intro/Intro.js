import React from 'react';
import './Intro.scss';

const Intro = ({isActive, ToggleClass}) => {
    const GhostImage = require('../../img/shy_who.png')
    return (
        <>
            <p className={"comingSoon " + (isActive ? 'active' : '')}><span className="vh">Coming Soon</span></p>
            <img src={GhostImage} onClick={ () => ToggleClass()} className={"ghostImg " + (isActive ? 'active' : '')} alt="고스트실루엣"/>
            <img src={GhostImage} onClick={ () => ToggleClass()} className={"ghostImg " + (isActive ? 'active' : '')} alt="고스트실루엣"/>
            <img src={GhostImage} onClick={ () => ToggleClass()} className={"ghostImg " + (isActive ? 'active' : '')} alt="고스트실루엣"/>
        </>
    );
};

export default Intro;
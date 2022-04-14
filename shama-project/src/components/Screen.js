import React from 'react';

const Screen = ({isActive, ToggleClass}) => {
    const GhostImage = require('./../img/shy_who.png')
    return (
        <div className="screen">
            <p className={"comingSoon " + (isActive ? 'active' : '')}><span className="vh">Coming Soon</span></p>
            <img src={GhostImage} onClick={ () => ToggleClass()} className={"ghostImg " + (isActive ? 'active' : '')} alt="고스트실루엣"/>
            <img src={GhostImage} onClick={ () => ToggleClass()} className={"ghostImg " + (isActive ? 'active' : '')} alt="고스트실루엣"/>
            <img src={GhostImage} onClick={ () => ToggleClass()} className={"ghostImg " + (isActive ? 'active' : '')} alt="고스트실루엣"/>
        </div>
    );
};

export default Screen;
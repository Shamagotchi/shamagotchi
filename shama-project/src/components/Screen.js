import React from 'react';
import Intro from './Intro/Intro';

const Screen = ({isActive, ToggleClass}) => {
   
    return (
        <div className="screen">
            <Intro isActive={isActive} ToggleClass={ToggleClass}/>
        </div>
    );
};

export default Screen;
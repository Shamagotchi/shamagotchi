import React from 'react';
import Avatar from './Avatar';
import Intro from './Intro/Intro';
import Park from './Theme/Park';

const Screen = ({action, count, isStart, isActive, ToggleClass}) => {
   
    return (
        <div className="screen">
            {
                !isStart ? <Intro isActive={isActive} ToggleClass={ToggleClass}/> : <Park/>
            }
            {
                isStart ? <Avatar action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default Screen;
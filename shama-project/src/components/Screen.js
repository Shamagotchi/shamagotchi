import React from 'react';
import Avatar from './Avatar';
import Intro from './Intro/Intro';
import Park from './Theme/Park';

const Screen = ({isLeft, isRight, action, count, isStart, isActive, ToggleClass}) => {
    return (
        <div className="screen">
            {
                isStart ? <Park count={count}/> : null
            }
            {
                isStart ? <Avatar isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);
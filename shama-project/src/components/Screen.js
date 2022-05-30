import React from 'react';
import { Routes, Route } from 'react-router';
import Avatar from './Avatar';
import Park from './Theme/Park';
import Ny from './Theme/Ny';

const Screen = ({isMenuOn, isPark, isNy, isLeft, isRight, action, count, isStart, isActive, ToggleClass}) => {
    return (
        <div className="screen">
            {
                (isStart && isPark && !isMenuOn) ? <Park isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                (isStart && isNy && !isMenuOn) ? <Ny isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                (isStart && !isMenuOn) ? <Avatar isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);
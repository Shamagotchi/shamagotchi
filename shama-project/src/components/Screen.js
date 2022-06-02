import React from 'react';
import { Routes, Route } from 'react-router';
import Avatar from './Avatar';
import Park from './Theme/Park';
import Ny from './Theme/Ny';

const Screen = ({say, isSaying, isMenuOn, isPark, isNy, isLeft, isRight, action, count, isStart, isActive, ToggleClass}) => {
    return (
        <div className="screen">
            {
                (isStart && isPark) ? <Park isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                (isStart && isNy) ? <Ny isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                (isStart) ? <Avatar say={say} isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count} isSaying={isSaying}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);
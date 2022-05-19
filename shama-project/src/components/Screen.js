import React from 'react';
import { Routes, Route } from 'react-router';
import Avatar from './Avatar';

const Screen = ({findMyGhost, isPark ,isLeft, isRight, action, count, isStart}) => {
    return (
        <div className={"screen "+(isPark ? "parkTheme " : '') + (isLeft || count < -2 ? 'movingLeft': '') + (isRight || count > 10 ? 'movingRight' : '')}>
            {
                (isStart && isPark) ? <Avatar isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);
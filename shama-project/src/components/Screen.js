import React from 'react';
import { Routes, Route } from 'react-router';
import Avatar from './Avatar';
import Park from './Theme/Park';

const Screen = ({isLeft, isRight, action, count, isStart}) => {
    return (
        <div className={"screen " + (isStart ? "parkTheme " : '') + (isLeft || count < -2 ? 'movingLeft': '') + (isRight || count > 10 ? 'movingRight' : '')}>
            {/* {
                isStart ? <Park className={"parkTheme " + (isLeft || count < -2 ? 'movingLeft': '') + (isRight || count > 10 ? 'movingRight' : '')}/> : null
            } */}
            {
                isStart ? <Avatar isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);
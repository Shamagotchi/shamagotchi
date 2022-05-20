import React from 'react';
import Avatar from './Avatar';

const Screen = ({say, isSaying,findMyGhost, isPark ,isLeft, isRight, action, count, isStart}) => {
    return (
        <div className={"screen "+(isPark ? "parkTheme " : '') + (isLeft || count < -2 ? 'movingLeft': '') + (isRight || count > 10 ? 'movingRight' : '')}>
            {
                (isStart && isPark) ? <Avatar say={say} isSaying={isSaying} findMyGhost={findMyGhost} isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/> : null
            }
        </div>
    );
};

export default React.memo(Screen);
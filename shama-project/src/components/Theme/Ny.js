import React from 'react';
import './Ny.scss'

const Ny = ({isLeft, isRight, count}) => {
    return (
        <div className={"NyTheme " + (isLeft || count < -2 ? 'movingLeft': '') + (isRight || count > 10 ? 'movingRight' : '')}>
            
        </div>
    );
};

export default React.memo(Ny);
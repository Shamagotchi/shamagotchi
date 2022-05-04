import React from 'react';
import './Park.scss'

const Park = ({isLeft, isRight, count}) => {
    return (
        <div className={"parkTheme " + (isLeft || count < -2 ? 'movingLeft': '') + (isRight || count > 10 ? 'movingRight' : '')}>
            
        </div>
    );
};

export default Park;
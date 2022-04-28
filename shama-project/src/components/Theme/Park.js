import React from 'react';
import './Park.scss'

const Park = ({isLeft, isRight, count}) => {
    return (
        <div className={"parkTheme " + (isLeft ? 'movingLeft': '') + (isRight ? 'movingRight' : '')}>
            
        </div>
    );
};

export default Park;
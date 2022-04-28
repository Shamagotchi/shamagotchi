import React, { useEffect } from 'react';
import './Park.scss'

const Park = ({count}) => {
    return (
        <div className={"parkTheme " + (count == -2 ? 'movingLeft': '') + (count == 10 ? 'movingRight' : '')}>
            
        </div>
    );
};

export default Park;
import React from 'react';

const Screen = ({isActive}) => {
    
    return (
        <div className="screen">
            <p className={"comingSoon " + (isActive ? 'active' : '')}><span className="vh">Coming Soon</span></p>
        </div>
    );
};

export default Screen;
import React from 'react';
import { Routes, Route } from 'react-router';
import Avatar from './Avatar';
import Park from './Theme/Park';

const Screen = ({isLeft, isRight, action, count, isStart, isActive, ToggleClass}) => {
    return (
        <div className="screen">
            {
                isStart ? <Park isLeft={isLeft} isRight={isRight} count={count}/> : null
            }
            {
                isStart ? <Routes>
                        <Route path=":id" element={<Avatar isLeft={isLeft} isRight={isRight} action={action} isStart={isStart} count={count}/>}
                        />
                    </Routes> : null
                    
            }
        </div>
    );
};

export default React.memo(Screen);
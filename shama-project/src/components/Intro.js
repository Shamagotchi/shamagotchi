import React, { useState, useEffect } from 'react';

const Intro = () => {
    const txt = "안녕..."
    // const txt1 = "당신의 이름은?"
    const [Text, setText] = useState('')
    const [Count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setText(Text + txt[Count])
            setCount(Count + 1); 
        },100)
        if(Count === txt.length){
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    },)

    return (
        <div className="welcome">
            <div className="box">
                <p className="text">{txt}</p>
            </div>
        </div>
    );
};

export default Intro;
import React, { useState } from 'react';

const Menu = () => {
    const [text, setText] = useState(content)
    const content = "Let's teach your ghost to say"
    let i = 0
    const typing = () => {
        if(i < content.length){
        }
    }
    setInterval(() => {
        typing()
    },[3000])
    return (
        <div className="menu">
            <strong className="subject">{text}</strong>
        </div>
    );
};

export default Menu;
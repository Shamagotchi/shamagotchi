import React, { useState } from 'react';
import Screen from './Screen'
import Draggable from 'react-draggable'


const Main = () => {
    const FrontImage = require('./../img/front2.png')
    const [isActive, setIsActive] = useState(false)
    const ToggleClass = () => {
        if(!isActive){
            setIsActive(!isActive)
        }
    }
    const [position, setPosition] = useState({ y: 0 });
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data,bounds) => {
        setPosition({ y: data.y }); 
        ToggleClass()
    };
    return (
        <div className="wrapper">
            {/* <Intro/> */}
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <Screen ToggleClass={ToggleClass} isActive={isActive}/>
                    <div className="controlBtn_wrap">
                        <button type="button" className="btn_01"></button>
                        <button type="button" className="btn_02"></button>
                        <button type="button" className="btn_03"></button>
                    </div>
                    <Draggable axis="y" onDrag={(e, data) => trackPos(data)} bounds={{top:0,bottom:0}}>
                        <button type="button" className="pin" onClick={ToggleClass}><span className="text">PULL</span></button>
                    </Draggable>
                </div>
            </div>
        </div>
    );
};

export default Main;
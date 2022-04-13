import React, { useState } from 'react';
import Screen from './Screen'


const Main = () => {
    const FrontImage = require('./../img/front2.png')
    const [isActive, setIsActive] = useState(false)
    const ToggleClass = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="wrapper">
            {/* <Intro/> */}
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" alt="다마고치"/>
                    <Screen ToggleClass={ToggleClass} isActive={isActive}/>
                    <div className="controlBtn_wrap">
                        <button type="button" className={"btn_01 " + (isActive ? 'active' : '')} onClick={ToggleClass}></button>
                        <button type="button" className={"btn_02 " + (isActive ? 'active' : '')} onClick={ToggleClass}></button>
                        <button type="button" className={"btn_03 " + (isActive ? 'active' : '')} onClick={ToggleClass}></button>
                    </div>
                    <button type="button" className="pin" onClick={ToggleClass}><span className="text">PULL</span></button>
                </div>
            </div>
        </div>
    );
};

export default Main;
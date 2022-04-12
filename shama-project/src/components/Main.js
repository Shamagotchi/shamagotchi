import React from 'react';
// import Intro from './Intro'


const main = () => {
    const FrontImage = require('./../img/front.png')
    const PinCondition = false
    const RemovePin = () => {
        !PinCondition
    }
    return (
        <div className="wrapper">
            {/* <Intro/> */}
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" alt="다마고치"/>
                    <div className="screen">
                    </div>
                </div>
                <button type="button" className="pin " onClick={RemovePin}><span className="text">PULL</span></button>
            </div>
        </div>
    );
};

export default main;
import React, { useState, useEffect } from 'react';
import Screen from './Screen'
import Draggable from 'react-draggable'
import './style.scss';
import sound from './../audio/btn_sound.mp3'
import BgSound from './../audio/shamagotchi_bgm.mp3'


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
    useEffect(() => {
        playBGSound()
    },[isActive])
    const playBGSound = () => {
        BackgroundSound.play()
    }
    const playSound = () => {
        btnSound.play()
    }
      // 아무 버튼을 누르시오 이후 실행될 function
      const trigger = (e) => {
        playSound()
    }
    const btnSound = new Audio(sound)
    const BackgroundSound = new Audio(BgSound)
    return (
        <div className="wrapper">
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <Screen ToggleClass={ToggleClass} isActive={isActive}/>
                    <div className="controlBtn_wrap">
                        <button type="button" className="left" onClick={(e) => trigger("action")}><span className="vh">left</span></button>
                        <button type="button" className="action" onClick={(e) => trigger("action")}><span className="vh">action</span></button>
                        <button type="button" className="right" onClick={(e) => trigger("action")}><span className="vh">right</span></button>
                    </div>
                    <Draggable axis="y" onDrag={(e, data) => trackPos(data)} bounds={{top:0,bottom:20}}>
                        <button type="button" className="pin" onClick={ToggleClass}><span className='vh'>pull</span></button>
                    </Draggable>
                </div>
            </div>
            <p className='copyright'>&copy; 2022 SMGC</p>
        </div>
    );
};

export default Main;
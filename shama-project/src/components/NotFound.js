import React, {useCallback, useEffect, useState} from 'react';
import Screen from './Screen'
import './style.scss'
import sound from './../audio/btn_sound.mp3'
import errorImg from '../img/error404.png'

const NotFound = () => {
    const FrontImage = require('./../img/front2.png') // 샤고스 다마고치 이미지
    const btnSound = new Audio(sound)
    //효과음 재생
    const playSound = () => {
        btnSound.play()
    }
    // 아무 버튼을 누르시오 이후 실행될 function
    const trigger = useCallback((e) => {
        playSound()
    })
    return (
        <div className="wrapper">
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <div className="screen">
                        <img src={errorImg} style={{width:'100%'}} alt="404error"/>
                    </div>
                    <div className="controlBtn_wrap">
                        <button type="button" className="left" onClick={(e) => trigger("left")}><span className="vh">left</span></button>
                        <button type="button" className="action" onClick={(e) => trigger("action")}><span className="vh">action</span></button>
                        <button type="button" className="right" onClick={(e)  => trigger("right")}><span className="vh">right</span></button>
                    </div>
                </div>
            </div>
            <p className='copyright'>&copy; 2022 SMGC</p>
        </div>
    );
};

export default NotFound;
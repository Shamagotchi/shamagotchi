import React, { useEffect, useState } from 'react';
import Screen from './Screen'
import './style.scss';


const Main = () => {
    const FrontImage = require('./../img/front2.png') // 샤고스 다마고치 이미지
    const [isActive, setIsActive] = useState(false) 
    const [isStart, setIsStart] = useState(false)
    const [count, setCount] = useState(0)
    const [action, setAction] = useState(false)
    const ToggleClass = () => {
        if(!isActive){
            setIsActive(!isActive)
        }
    }

    // 아무 버튼을 누르시오 이후 실행될 function
    const trigger = (e) => {
        setIsActive(false)
        setIsStart(true)
        if(e === "left"){
            setCount(count-1)
        }else if(e === "right"){
            setCount(count+1)
        }else if(e === "action"){
            setAction(true)
        }
    }

    // 키보드 동작 
    document.onkeydown = checkKey;

    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
        // left arrow
        setCount(count-1)
        }
        else if (e.keyCode == '39') {
        // right arrow
        setCount(count+1)
        }
    }
    // 캐릭터 이동영역 제한하기
    useEffect(() => {
        if(count <= -1){
            setCount(-1)
        }else if(count >= 11){
            setCount(11)
        }
    },[count])

    return (
        <div className="wrapper">
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <Screen ToggleClass={ToggleClass} action={action} isActive={isActive} isStart={isStart} count={count}/>
                    <div className="controlBtn_wrap">
                        <button type="button" className="left" onClick={ (e) => trigger("left")}><span className="vh">left</span></button>
                        <button type="button" className="action" onClick={(e) => trigger("action")}><span className="vh">action</span></button>
                        <button type="button" className="right" onClick={(e) => trigger("right")}><span className="vh">right</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
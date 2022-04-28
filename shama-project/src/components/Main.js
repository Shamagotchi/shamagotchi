import React, { useCallback, useEffect, useState } from 'react';
import Screen from './Screen'
import Draggable from 'react-draggable'
import './style.scss'
import sound from './../audio/btn_sound.mp3'

const Main = () => {
    const FrontImage = require('./../img/front2.png') // 샤고스 다마고치 이미지
    const [isActive, setIsActive] = useState(false) 
    const [isStart, setIsStart] = useState(false)
    const [count, setCount] = useState(0)
    const [action, setAction] = useState(false)
    const [isRemove, setIsRemove] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    const [isRight, setIsRight] = useState(false)

    const ToggleClass = () => {
        if(!isActive){
            setIsActive(!isActive)
        }
    }
    const btnSound = new Audio(sound)
    const [position, setPosition] = useState({ y: 0 });
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data,bounds) => {
        setPosition({ y: data.y }); 
        ToggleClass()
        if(position.y === 40){
            setIsActive(false)
            setIsStart(true)
        }
    };

    //효과음 재생
    const playSound = () => {
        btnSound.play()
    }
    // 아무 버튼을 누르시오 이후 실행될 function
    const trigger = useCallback((e) => {
        playSound()
        if(isRemove){
            if(e == "left"){
                setCount(count-1)
                setIsLeft(true)
                setIsRight(false)
            }else if(e == "right"){
                setCount(count+1)
                setIsRight(true)
                setIsLeft(false)
            }else if(e == "action"){
                setAction(!action)
            }
        }
    })

    //점프
    useEffect(() => {
        if(action){
            setTimeout(() => {
                setAction(false)
            },200)
        }
    },[action])

    // 핀 삭제 
    if(isStart){
        setTimeout(() => {
            setIsRemove(true)
        },5000)
    }
    // 키보드 동작 
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if(isRemove){
            if (e.keyCode == '37') {
            // left arrow
            setCount(count-1)
            setIsLeft(true)
            setIsRight(false)
            }
            else if (e.keyCode == '39') {
            // right arrow
            setCount(count+1)
            setIsRight(true)
            setIsLeft(false)
            }
            else if(e.keyCode == '32'){
            setAction(!action)
            }
        }
    }
    // 캐릭터 이동영역 제한하기
    useEffect(() => {
        if(count <= -2){
            setCount(-2)
        }else if(count >= 10){
            setCount(10)
        }
    },[count])
    return (
        <div className="wrapper">
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <Screen ToggleClass={ToggleClass} isLeft={isLeft} isRight={isRight} count={count} action={action} isActive={isActive} isStart={isStart} count={count}/>
                    <div className="controlBtn_wrap">
                        <button type="button" className="left" onClick={(e) => trigger("left")}><span className="vh">left</span></button>
                        <button type="button" className="action" onClick={(e) => trigger("action")}><span className="vh">action</span></button>
                        <button type="button" className="right" onClick={(e)  => trigger("right")}><span className="vh">right</span></button>
                    </div>
                    {
                        !isRemove && <Draggable axis="y" onDrag={(e, data) => trackPos(data)} bounds={{top:0,bottom:40}}>
                        <button type="button" className={"pin " + (isStart ? 'fadeOut' : '')} onClick={ToggleClass}><span className='vh'>pull</span></button>
                        </Draggable>
                    }
                </div>
            </div>
            <p className='copyright'>&copy; 2022 SMGC</p>
        </div>
    );
};

export default React.memo(Main);
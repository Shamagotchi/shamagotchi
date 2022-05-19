import React, { useCallback, useEffect, useState } from 'react';
import Screen from './Screen'
import Draggable from 'react-draggable'
import './style.scss'
import sound from './../audio/btn_sound.mp3'
import Activity from './Menu/Activity';

const Main = () => {
    const FrontImage = require('./../img/front2.png') // 샤고스 다마고치 이미지
    const [isActive, setIsActive] = useState(false) 
    const [isStart, setIsStart] = useState(false)
    const [count, setCount] = useState(0)
    const [action, setAction] = useState(false)
    const [isRemove, setIsRemove] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    const [isRight, setIsRight] = useState(false)
    const [isMenuOn, setIsMenuOn] = useState(false)
    const [isPark, setIsPark] = useState(true)
    // 저장된 상태값 불러오기 
    useEffect(() => {
        const active = JSON.parse(localStorage.getItem('isActive') === "false")
        const start = JSON.parse(localStorage.getItem('isStart') === "true")
        const remove = JSON.parse(localStorage.getItem('isRemove'))
        if(active || start || remove){
            setIsActive(active)
            setIsStart(start)
            setIsRemove(remove)
        }
    },[])
    // 상태값 저장하기
    useEffect(() => {
        localStorage.setItem('isActive', JSON.parse(isActive))
        localStorage.setItem('isStart', JSON.parse(isStart))
        localStorage.setItem('isRemove', JSON.parse(isRemove))
    },[isActive,isStart,isRemove])

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
    // const playSound = useCallback(() => {
    //     btnSound.play()
    // })
    // 아무 버튼을 누르시오 이후 실행될 function
    const trigger = useCallback((e) => {
        // playSound()
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
    // 메뉴 활성화
    const menuActive = () => {
        setIsMenuOn(!isMenuOn)
        setIsPark(!isPark)
    } 
    return (
        <div className="wrapper" id='capture'>
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <Screen isPark={isPark} isMenuOn={isMenuOn} ToggleClass={ToggleClass} isLeft={isLeft} isRight={isRight} count={count} action={action} isActive={isActive} isStart={isStart}/>
                    {/* 버튼 */}
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
                    {
                        isRemove && <Activity isMenuOn={isMenuOn} menuActive={menuActive}/>
                    }
                 
                </div>
            </div>
            <p className='copyright'>&copy; 2022 SMGC</p>
        </div>
    );
};

export default React.memo(Main);
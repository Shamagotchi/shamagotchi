import React, { useCallback, useEffect, useState } from 'react';
import Screen from './Screen'
import Draggable from 'react-draggable'
import './style.scss'
import sound from './../audio/btn_sound.mp3'
import Activity from './Menu/Activity';
import GhostList from './../assets/api/GhostList';
import { useLocation, useParams } from 'react-router';

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
    const [isSaying, setIsSaying] = useState(false)
    const [data, setData] = useState(GhostList)
    const [isNy, setNy] = useState(false)
    const { Id, login } = useParams();
    // const findMyGhost = GhostList.find(item => {
    //     return item.id === Id
    // })
    const sayingArr = ['Hey','Grrrr....','?','!!!!','WAAAH','Ptui','Ouch','Zzz','Ahem','YOU?','Love You','Fxxk']
    const [say, setSay] = useState(sayingArr) 
    const [backendData, setBackendData] = useState("LOGIN WITH DISCORD")
    const [actionUrl, setActionUrl] = useState("/auth")
    const location = useLocation()
    const [userName, setUserName] = useState()
    const [userId, setUserId] = useState()
    const [message, setMessage] = useState()
    const [isLogin, setIsLogin] = useState(false)
    const [isLogOut, setIsLogOut] = useState(false)
    const findMyGhost = GhostList.find(item => {
        return item.discordId === userId
    })
    
    //말풍선 이벤트
    useEffect(() => {
        let timer = setTimeout(() => {
            setIsSaying(!isSaying)
        },10000)

        if(isSaying){
            if(findMyGhost){
                setSay(findMyGhost.saying[Math.floor(Math.random() * findMyGhost.saying.length)])
            }else{
                setSay(sayingArr[Math.floor(Math.random() * sayingArr.length)])
            }
        }

        // 해쉬라우팅 버전
        // if(isSaying){
        //     if(findMyGhost){
        //         setSay(data.map(item => item.id === Id && 
        //             findMyGhost.saying[Math.floor(Math.random() * findMyGhost.saying.length)]
        //         ))
        //     }else{
        //         setSay(sayingArr[Math.floor(Math.random() * sayingArr.length)])
        //     }
        // }
        
        return () => {
            clearTimeout(timer)
        }
    },[isSaying])
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
    // 배경 전환
    function changeBG(e){
        setNy(!isNy)
        setIsPark(!isPark)
    }

    
    // fetch discord 유저 데이터 
    useEffect(() => {
        fetch("http://localhost:3001/dashboard/settings").then(
            response => response.json()
        ).then((result) =>{ 
            setUserId(result.discordId);
        setUserName(result.username)
        })
        
    })
    
    // login + logout 
    useEffect(() => {
        if(location.pathname == "/login"){
            setBackendData("LOGOUT")
            setActionUrl("/auth/logout")
            setTimeout(() => {
                setIsLogin(true)
                setIsLogOut(false)
            },2000)
            setMessage(`${userName} has logged in`)
            localStorage.setItem('userName', userName)
            
        }else if(location.pathname == "/logout"){
            const getUserData = localStorage.getItem('userName')
            setMessage(`${getUserData} has logged out`)
            setBackendData("LOGIN WITH DISCORD")
            setActionUrl("/auth")
            setTimeout(() => {
                setIsLogin(false)
                setIsLogOut(true)
            },2000)
            // setTimeout(() => {
            //     localStorage.removeItem('userName', userName)
            // },3000)
        }
    })

    //토스트 팝업 케이스 
    useEffect(() => {
        if(isLogin){
            
        }
    })

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
    } 
    return (
        <div className="wrapper" id='capture'>
            <form action={actionUrl} method="get" className="login">
                <button id="loginBtn" type="submit">{backendData}</button>
            </form>
            {(isLogin || isLogOut) && <p className={"tosterPopup " + (isLogOut && 'logout')}>{message}</p>}
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <Screen isNy={isNy} say={say} isSaying={isSaying} findMyGhost={findMyGhost} isPark={isPark} isMenuOn={isMenuOn} ToggleClass={ToggleClass} isLeft={isLeft} isRight={isRight} count={count} action={action} isActive={isActive} isStart={isStart}/>
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
                        isRemove && <Activity sayingArr={sayingArr} say={say} setSay={setSay} findMyGhost={findMyGhost} isMenuOn={isMenuOn} menuActive={menuActive}/>
                    }
                 
                </div>
            </div>
            {
                isPark && <button type='button' className='btnNY' onClick={changeBG}><span className='vh'>newyork background</span></button>
            }
            {
                isNy && <button type='button' className='btnPark' onClick={changeBG}><span className='vh'>park background</span></button>
            }
            <p className='copyright'>&copy; 2022 SMGC</p>
        </div>
    );
};

export default React.memo(Main);
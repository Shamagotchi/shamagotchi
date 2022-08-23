import React, {useCallback, useEffect, useState} from 'react';
import './style.scss'
import errorImg from '../img/error404.png'
import { useLocation, useParams } from 'react-router';

const NotFound = () => {
    const FrontImage = require('./../img/front2.png') // 샤고스 다마고치 이미지
    const [backendData, setBackendData] = useState("LOGIN WITH DISCORD")
    const [actionUrl, setActionUrl] = useState("/auth")
    const location = useLocation()
    // login + logout 
    useEffect(() => {
        if(location.pathname == "/login"){
            setBackendData("LOGOUT")
            setActionUrl("/auth/logout")
        }else if(location.pathname == "/auth/logout"){
            setBackendData("LOGIN WITH DISCORD")
            setActionUrl("/auth")
        }
    },[location])

    return (
        <div className="wrapper" id='capture'>
            <form action={actionUrl} method="get" className="login">
                <button id="loginBtn" type="submit">{backendData}</button>
            </form>
            <div className="device">
                <div className="imgWrap">
                    <img src={FrontImage} width="800" height="auto" className="deviceImg" alt="다마고치"/>
                    <div className="screen">
                        <img src={errorImg} style={{width:'100%'}} alt="404error"/>
                    </div>
                    {/* 버튼 */}
                    <div className="controlBtn_wrap">
                        <button type="button" className="left"><span className="vh">left</span></button>
                        <button type="button" className="action"><span className="vh">action</span></button>
                        <button type="button" className="right"><span className="vh">right</span></button>
                    </div>
                </div>
            </div>
            <p className='copyright'>&copy; 2022 SMGC</p>
        </div>
    );
};

export default NotFound;
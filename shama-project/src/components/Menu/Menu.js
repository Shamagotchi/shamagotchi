import React, { useEffect, useRef, useState } from 'react';
import Typed from 'react-typed';
import './Menu.scss'

const Menu = ({sayingArr, say, setSay, findMyGhost}) => {
    const ref = useRef()
    const [isVisible, setIsVisible] = useState(true)
    const [changeSaying, setChangeSaying] = useState({
        sayingText : ''
    })
    const {sayingText} = changeSaying
    const changeVal = (e) => {  
        const {value} = e.target 
        setChangeSaying({
            ...changeSaying,
            sayingText : value
        })
    }
    const onAdd = (e) => {
        if(findMyGhost){
            findMyGhost.saying.push(sayingText)
        }else{
            alert("please connect your account to save")
        }
    }
    const onReset = () => {
        findMyGhost.saying.length = 0
    }
    const onDefault = () => {
        findMyGhost.saying.push(...sayingArr)
    }
    useEffect(() => {
        if(findMyGhost.saying.length < 0){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
    },)
    console.log(isVisible)
    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <div className="sayingWrap">
                <input type="text" name="sayingText" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal} ref={ref}/>
                <button type='button' className='btnAdd' onClick={onAdd}>ADD</button>
            </div>
            <span className='mapText'>I can say...</span> 
            <ul className='sayingList'>
            {
                findMyGhost && findMyGhost.saying.map((index,item) => <li key={index}>{findMyGhost.saying[item]}</li>)
            }
            </ul>
            <div className='btnWrap'>
                {
                    isVisible && <button type="button" className='btnDefault' onClick={onDefault}>Use Default</button>
                }
                <button type="button" className='btnReset' onClick={onReset} >Reset</button>
            </div>
        </div>
    );
};

export default Menu;
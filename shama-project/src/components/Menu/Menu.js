import React, { useEffect, useRef, useState } from 'react';
import Typed from 'react-typed';
import './Menu.scss'

const Menu = ({say, setSay, findMyGhost}) => {
    const ref = useRef()
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
            console.log(findMyGhost.saying)
        }else{
            alert("please connect your account to save")
        }
    }
    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <div className="sayingWrap">
                <input type="text" name="sayingText" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal} ref={ref}/>
                <button type='button' className='btnAdd' onClick={onAdd}>ADD</button>
            </div>
            {
                findMyGhost.saying.map((index,item) => <p className='sayingList'>I can say {findMyGhost.saying[item]}</p>)
            }
            <button type="button" className='default'>Use Default</button>
        </div>
    );
};

export default Menu;
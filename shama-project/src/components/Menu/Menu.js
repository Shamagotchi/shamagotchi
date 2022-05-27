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
        if(!sayingText){
            return
        }else{
            findMyGhost.saying.push(sayingText)
        }
        console.log(findMyGhost.saying)
        //공백처리
        // if(!saying) return
        // findMyGhost.saying.push(changeSaying.saying)
        // setChangeSaying({
        //     saying : ''
        // })
        // ref.current.focus()
        // alert(changeSaying.saying)
    }

    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <div className="sayingWrap">
                <input type="text" name="sayingText" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal} ref={ref}/>
                <button type='button' className='btnAdd' onClick={onAdd}>ADD</button>
            </div>
            <button type="button" className='btnListAdd'>+</button>
        </div>
    );
};

export default Menu;
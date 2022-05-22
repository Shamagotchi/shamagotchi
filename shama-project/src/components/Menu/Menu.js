import React, { useEffect, useRef, useState } from 'react';
import Typed from 'react-typed';
import './Menu.scss'

const Menu = ({say, setSay, findMyGhost}) => {
    const ref = useRef()
    const [changeSaying, setChangeSaying] = useState({
        saying : ''
    })
    const {saying} = changeSaying
    const changeVal = (e) => {
        const {value} = e.target
        setChangeSaying({
            ...changeSaying,
            [saying] : value
        })
       
    }
    const onAdd = (e) => {
        e.preventDefault()
        //공백처리
        if(!saying) return
        findMyGhost.saying.push(changeSaying.saying)
        setChangeSaying({
            saying : ''
        })
        ref.current.focus()
    }
    console.log(saying)

    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <form >
                <input type="text" ref={ref} value={saying} name="saying" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal} ref={ref}/>
                <button type="submit" onSubmit={onAdd}>Teach!</button>
            </form>
        </div>
    );
};

export default Menu;
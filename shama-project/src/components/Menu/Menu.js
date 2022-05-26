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
            name : value
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
        alert(changeSaying.saying)
    }

    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <form onSubmit={onAdd} >
                <input type="text" name="saying" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal} ref={ref}/>
                <button type="submit">Teach!</button>
            </form>
        </div>
    );
};

export default Menu;
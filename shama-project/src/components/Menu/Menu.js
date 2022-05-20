import React, { useEffect, useRef, useState } from 'react';
import Typed from 'react-typed';
import './Menu.scss'

const Menu = ({say, setSay, findMyGhost}) => {
    const ref = useRef()
    const [form, setForm] = useState({
        sayingAnything : ''
    })
    const changeVal = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            name : value
        })
    }
    const onAdd = (e) => {
        e.preventDefault()
        //공백처리
        // if(!say) return
        ref.current.focus()
        setSay(findMyGhost.saying.push(sayingAnything))
        console.log(findMyGhost.saying)
    }

    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <form onSubmit={onAdd}>
                <input type="text" ref={ref} name="sayingAnything" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal}/>
            </form>
        </div>
    );
};

export default Menu;
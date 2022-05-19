import React, { useEffect, useRef, useState } from 'react';
import Typed from 'react-typed';
import './Menu.scss'

const Menu = () => {
    const ref = useRef()
    const [form, setForm] = useState('')
    const {say} = form
    const onAdd = (e) => {
        e.preventDefault()
        //공백처리
        if(!say) return
        ref.current.focus()
    }
    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <form onSubmit={onAdd}>
                <input type="text" ref={ref} name="say" value={say} maxLength="5" autoFocus={true} className="CustomText"/>
            </form>
        </div>
    );
};

export default Menu;
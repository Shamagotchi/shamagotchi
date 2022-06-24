import React, { useEffect, useRef, useCallback, useState } from 'react';
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
    const [ghostSaying, setGhostSaying] = useState(findMyGhost.saying)
    const cloneSaying = [...ghostSaying]
    // 문구 추가
    const onAdd = useCallback((e) => {
        e.preventDefault()
        if(findMyGhost){
            if(!sayingText){
                return
            }else if(sayingArr.includes(sayingText)){
                alert(`Ghost already knows "${sayingText}" !`)
                return
            }else if(ghostSaying.includes(sayingText)){
                alert(`Ghost already knows "${sayingText}" !`)
                return
            }
            else{
                alert(`Ghost is learning "${sayingText}"...`)
                ghostSaying.push(sayingText)
                ref.current.value = ""
            }
        }else{
            alert("please connect your account to save")
        }
    })
    // 문구 모두 삭제
    const onReset = () => {
        if(findMyGhost){
            findMyGhost.saying.length = 0
        }else{
            alert("please connect your account to save")
        }
    }
    // 문구 디폴트 
    const onDefault = () => {
        if(findMyGhost){
            findMyGhost.saying.push(...sayingArr)
        }else{
            alert("please connect your account to save")
        }
    }
    useEffect(() => {
        if(findMyGhost && findMyGhost.saying.length == 0){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    })


    // 문구 삭제
    const onDelList = useCallback((index) => {
        if(findMyGhost){
            let filterWords = index.target.parentNode.innerText
            let filterWord = filterWords.split("\n")[0]
            window.confirm(`Do you want ghost to forget a word "${filterWord}" ?`)
            setGhostSaying(
                ghostSaying.filter((ghost) => ghost !== filterWord)
            )
            console.log(cloneSaying)
        }else{
            alert("please connect your account to save")
        }
    },[])

    // 저장된 상태값 불러오기 
    // useEffect(() => {
    //     if(findMyGhost){
    //         localStorage.getItem(ghostSaying)
    //     }
    // },[])

    // 상태값 저장하기
    // useEffect(() => {
    //     if(findMyGhost){
    //         localStorage.setItem('ghostSaying', ghostSaying)
    //     }
    // },[onAdd])

    // 상태값 삭제하기
    // useEffect(() => {
    //     localStorage.removeItem('ghostSaying', ghostSaying)
    // },[onDelList])
    
    return (
        <div className="menu">
            <Typed className="subject" strings={['Teach your ghost to say!']} showCursor={false}
                    typeSpeed={80}/>
            <form className="sayingWrap" onSubmit={onAdd}>
                <input type="text" name="sayingText" maxLength="5" autoFocus={true} className="CustomText" onChange={changeVal} ref={ref}/>
                <button type='button' className='btnAdd' onClick={onAdd}>ADD</button>
            </form>
            <span className='mapText'>I can say...</span> 
            <ul className='sayingList'>
            {
                findMyGhost ? cloneSaying.map((index,item) => 
                <li key={index}>{cloneSaying[item]}<button className='btnDel' onClick={(index) => onDelList(index)}><span className='vh'>delete</span></button></li>)
                 : sayingArr.map((index,item) => <li key={index}>{index}<button className='btnDel' onClick={onDelList}><span className='vh'>delete</span></button></li>)
            }
            </ul>
            <div className='btnWrap'>
                {
                    isVisible && <button type="button" className='btnDefault' onClick={onDefault}>Use Default</button>
                }
                {
                    !isVisible && <button type="button" className='btnReset' onClick={onReset} >Reset</button>
                }
            </div>
        </div>
    );
};

export default Menu;
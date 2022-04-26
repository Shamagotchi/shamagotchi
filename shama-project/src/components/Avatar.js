import React, {useEffect,useState} from 'react';
import Avatar1 from './../img/867.png';
import Cloud from './../img/cloud.png'

const Avatar = ({count, isStart}) => {
    const [isCloud, setIsCloud ] = useState(true)
    const saying = [
        'Hi','Grrrr....','?','!!!!'
    ]
    const [say, setSay] = useState('')
    if(isStart){
        setTimeout(() => {
            setIsCloud(false)
        },10000)
    }
    let changeSaying = () => {
        setSay(saying[Math.floor(Math.random() * saying.length)])
    }
    setTimeout(() => {
        changeSaying()
    },[5000])


    return (
        <div className='avatar' style={{left : `${count * 5}%`}}>
            <img src={Avatar1} className="character" alt="avatar"/>
            {
                isCloud ? <img className='cloud' src={Cloud} alt="cloud"/> : null
            }
            <p className='bubble'>{say}</p>
           
        </div>
    );
};

export default Avatar;
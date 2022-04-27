import React, {useEffect,useState} from 'react';
import Avatar1 from './../img/867.png';
import Cloud from './../img/cloud.png'

const Avatar = ({count, isStart}) => {
    const [isCloud, setIsCloud ] = useState(true)
    const [isSaying, setIsSaying] = useState(false)
    const [say, setSay] = useState('')
    const saying = [
        'Hi','Grrrr....','?','!!!!'
    ]
    const changeSaying = () => {
        setSay(saying[Math.floor(Math.random() * saying.length)])
    }
    if(isStart){
        setTimeout(() => {
            setIsCloud(false)
        },10000)
        setTimeout(() => {
            setIsSaying(!isSaying)
        },10000)
        changeSaying()
    }

    return (
        <div className='avatar' style={{left : `${count * 5}%`}}>
            <img src={Avatar1} className="character" alt="avatar"/>
            {
                isCloud && <img className='cloud' src={Cloud} alt="cloud"/>
            }
            {
                isSaying && <p className='bubble'>{say}</p>
            }
        </div>
    );
};

export default Avatar;
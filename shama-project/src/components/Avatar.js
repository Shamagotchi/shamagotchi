import React, {useEffect,useState} from 'react';
import Avatar1 from './../img/867.png';
import Cloud from './../img/cloud.png'

const Avatar = ({action, count, isStart}) => {
    const [isCloud, setIsCloud ] = useState(true)
    const say = [
        'Hi','Grrrr....','?','!!!!'
    ]
    if(isStart){
        setTimeout(() => {
            setIsCloud(false)
        },10000)
    }
    console.log(action)
    const randomSay = say[Math.floor(Math.random() * say.length)]
    // useEffect(() => {
        
    // },[action])
    return (
        <div className='avatar' style={{left : `${count * 5}%`}}>
            <img src={Avatar1} className="character" alt="avatar"/>
            {
                isCloud ? <img className='cloud' src={Cloud} alt="cloud"/> : null
            }
            {
                action ?  <p className='bubble'>{randomSay}</p> : null
            }
           
        </div>
    );
};

export default Avatar;
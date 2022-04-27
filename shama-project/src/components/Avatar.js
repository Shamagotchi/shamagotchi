import React, {useEffect,useState} from 'react';
import Avatar1 from './../img/867.png';
import Cloud from './../img/cloud.png'

const Avatar = ({action, count, isStart}) => {
    const [isCloud, setIsCloud ] = useState(true)
    const [CloudRemove, setCloudRemove ] = useState(true)
    const [isSaying, setIsSaying] = useState(false)
    const [say, setSay] = useState('')
    const saying = [
        'Hi','Grrrr....','?','!!!!'
    ]
    const changeSaying = () => {
       
    }
    if(isStart){
        setTimeout(() => {
            setIsCloud(false)
        },6500)
        setTimeout(() => {
            setCloudRemove(false)
        },10000)
    }

    return (
        <div className={"avatar " + (action ? 'on' : '')} style={{left : `${count * 5}%`}}>
            <img src={Avatar1} className="character" alt="avatar"/>
            {
                CloudRemove && <img className={"cloud " + (isCloud ? '' : 'fadeOut')} src={Cloud} alt="cloud"/>
            }
            {
                isSaying && <p className='bubble'>{say}</p>
            }
        </div>
    );
};

export default Avatar;
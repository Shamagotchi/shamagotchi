import React, {useEffect,useState} from 'react';
import Avatar1 from './../img/000.png';
import Cloud from './../img/cloud.png'



const Avatar = ({say ,isSaying,findMyGhost,isLeft, isRight,action, count, isStart}) => {
    const [isCloud, setIsCloud ] = useState(true)
    const [CloudRemove, setCloudRemove ] = useState(true)

    // 구름 없애기 
    if(isStart){
        setTimeout(() => {
            setIsCloud(false)
        },3300)
        setTimeout(() => {
            setCloudRemove(false)
        },10000)
    }
    return (
        <div className={`avatar ${action ? 'on' : ''} ${isRight ? 'right' : ''}${isLeft ? 'left' : ''}`} style={{left : `${count * 5}%`}}>
            <img src={findMyGhost ? findMyGhost.img : Avatar1} className="character" alt="avatar"/>
            {
                CloudRemove && <img className={"cloud " + (isCloud ? '' : 'fadeOut')} src={Cloud} alt="cloud"/>
            }
            {
                isSaying && <p className='bubble'>{say}</p>
            }
        </div>
    );
};

export default React.memo(Avatar);
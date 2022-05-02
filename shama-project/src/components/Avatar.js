import React, {useEffect,useState} from 'react';
import Avatar1 from './../img/000.png';
import Cloud from './../img/cloud.png'
import { useParams } from 'react-router';

export function MakeAvatar() {
    let params = useParams();
    console.log(params)
}

const Avatar = ({isLeft, isRight,action, count, isStart}) => {
    const [isCloud, setIsCloud ] = useState(true)
    const [CloudRemove, setCloudRemove ] = useState(true)
    const [isSaying, setIsSaying] = useState(false)
    const saying = [
        'Hey','Grrrr....','?','!!!!','WAAAH','Ptui','Ouch','Zzz','Ahem','YOU?','Love You','Fxxk'
    ]
    const [say, setSay] = useState('Hi') 

    //말풍선 이벤트
    useEffect(() => {
        let timer = setTimeout(() => {
            setIsSaying(!isSaying)
        },10000)
        if(isSaying){
            setSay(saying[Math.floor(Math.random() * saying.length)])
        }
        return () => {
            clearTimeout(timer)
        }
    },[isSaying])

    
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

export default React.memo(Avatar);
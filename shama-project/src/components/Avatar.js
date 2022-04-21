import React, {useEffect,useState} from 'react';
import Avatar1 from './../img/867.png';
import Cloud from './../img/cloud.png'

const Avatar = (count, isStart) => {
    const [isCloud, setIsCloud ] = useState(true)
    useEffect(() => {
        let timer = setTimeout(() => {
            setIsCloud(false)
        },3000)
      return () => {
        clearTimeout(timer)
      }
    }, [isStart])
    return (
        <div className='avatar' style={{left : `${count.count * 5}%`}}>
            <img src={Avatar1} className="character" alt="avatar"/>
            {
                isCloud ? <img className='cloud' src={Cloud} alt="cloud"/> : null
            }
        </div>
    );
};

export default Avatar;
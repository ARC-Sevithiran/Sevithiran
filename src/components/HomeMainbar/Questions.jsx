import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {IoPlay, IoPause} from 'react-icons/io5'
import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Questions.css'

const Questions = ({question}) => {

  const [isPlay,setisPlay]=useState(false)
  
  const handlePlay = () =>{   
    setisPlay(!isPlay)
  }

  const Expire = props => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
      }, props.delay);
      return () => clearTimeout(timer)
    }, [props.delay]);
  
    return visible ? <div>{props.children}</div> : <div />;
  };
  

  return (
    <>
      {isPlay?<div className='question-card'  onClick={handlePlay} style={{height:'250px'}}>
        <div className="audio-name">
          <h1>{question.answer.answerBody}</h1> 
        </div>
        <div className="audio-button">
          
          <button className='audio-playpause' onClick={handlePlay}>
            {
              isPlay==false?
              <IoPlay size='50px' color='rgb(81, 203, 247)'/>:
              <IoPause size='50px' color='rgb(81, 203, 247)'/>
            }
          </button>
        </div>
        <Expire delay='300'>
          <AudioPlayer src={question.audioclip} 
            style={{backgroundColor:'rgba(145, 229, 255, 0.34)',borderRadius:'15px'}}
            showSkipControls={false}
            showJumpControls={false}
            autoPlay
          />
        </Expire>
      </div>:<div className='question-card'  onClick={handlePlay} style={{height:'175px'}}>
        <div className="audio-name">
          <h1>{question.answer.answerBody}</h1> 
        </div>
        <div className="audio-button">
          
          <button className='audio-playpause' onClick={handlePlay}>
            {
              isPlay==false?
              <IoPlay size='50px' color='rgb(81, 203, 247)'/>:
              <IoPause size='50px' color='rgb(81, 203, 247)'/>
            }
          </button>
        </div>
      </div>
      }
    </>
  )
}

export default Questions

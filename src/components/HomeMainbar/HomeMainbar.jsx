import React from 'react'
import { useLocation } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import pressureCooker from '../../assets/pressureCooker.mp3'
import doorbell from '../../assets/doorbell.mp3'
import train from '../../assets/train.mp3'
import {BsPatchQuestion} from 'react-icons/bs'

const HomeMainbar = () => {
    var audioList = [{ 
        _id: '1',
        name: 'PressureCooker',
        audioclip: pressureCooker,
        type:'surroundings',
        answer: {
            answerBody: "Pressure Cooker",    
        }
    },{ 
      _id: '2',
      name: 'Train',
      audioclip: train,
      type:'surroundings',
      answer: {
          answerBody: "Train",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    },{ 
      _id: '3',
      name: 'DoorBell',
      audioclip: doorbell,
      type:'surroundings',
      answer: {
          answerBody: "Door Bell",    
      }
    }]

  const location = useLocation()
  return (
  <>
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === '/'? <h1>Top Questions</h1> : <h1>All Audioclips</h1>}
      </div>
      
      <div className="instructions">
        <BsPatchQuestion paddingTop='10px' size='20px'/>
        <p>Hello friend, please listen to all {audioList.length} audioclips, and see if you can understand them!</p>
      </div>
      <div className='questions-space'>
        {audioList ===null?
        <h1>Loading...</h1>:
        <>
          <QuestionList audioList={audioList}/>
        </>
        }
      </div>
    </div>
  </>
  )
}

export default HomeMainbar

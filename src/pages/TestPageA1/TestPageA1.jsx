import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { Heading } from '@chakra-ui/react'
import TestMainbar from '../../components/TestAMainbar/TestMainbar'
import { useLocation } from 'react-router-dom'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { useState, useEffect } from 'react'
import AudioContext from '../../context/audioContext'
import axios from 'axios'
import './TestPageA1.css'

const TestPageA1 = () => {

  const location  = useLocation()
  let page_head = ''
  let json_getter = '';
  let level = '';
  const [tableData,settableData] = useState({Data:{
    length:0
  }})

//reference table for dynamic webpage selection
  switch(location.pathname){
    case '/TestA1/Level1':
      page_head='நிலை 1 - காட்சி குறிப்புகளுடன்'
      json_getter='I'
      level='Level_1'
      break;
    case '/TestA1/Level2':
      page_head = 'நிலை 2 - காட்சி குறிப்புகள் இல்லாமல்'
      json_getter='II'
      level='Level_2'
      break;
    case '/TestA1/Level3':
      page_head = 'நிலை 3 - அருகிலுள்ள ஒலிகள்'
      json_getter='III'
      level='Level_3'
      break;
    case '/TestA1/Level4':
      page_head = 'நிலை 4 - தூர ஒலிகள்'
      json_getter='IV'
      level='Level_4'
      break;
    case '/TestA1/Level5':
      page_head = 'நிலை 5 - பின்னணி இரைச்சல் முன்னிலையில்'
      json_getter='VI'
      level='Level_6'
      break;
    default:
      page_head = ''
      json_getter=''
      level=''
      break;
  }
//



//json fetcher
  useEffect(()=>{
    axios
    .get(`db_json/Test1_A_1/Test1_${json_getter}_A_1.json`)
    .then(response =>{
      settableData(response.data)
    })   
    .catch(error => {
      console.log('Error fetching data:',error)
    })
  },[json_getter])
//



//provider data:
  const [audioData, setaudioData] = useState({length:0})
  const [T1,setT1] = useState('')
  const [T2,setT2] = useState('')
  const [T3,setT3] = useState('')
  const [T1st,setT1st] = useState(false)
  const [T2st,setT2st] = useState(false)
  const [T3st,setT3st] = useState(false)
  const [total, settotal] = useState(0)
//


  return (
    <div className='t1-main-container'>
      <div className="t1-nav-container">
        <Navbar/>
      </div>
      <div className="t1-other-container">
        <AudioContext.Provider 
        value={{audioData,
        setaudioData,
        T1,
        setT1,
        T2,
        setT2,
        T3,
        setT3,
        T1st,
        setT1st,
        T2st,
        setT2st,
        T3st,
        setT3st,
        total,
        settotal}}>
        <div className="t1-left">
            <LeftSidebar testname='A1'/>
        </div>
        <div className="t1-bars">
          <div className="t1-main">
            <div className="t1-header">
              <Heading size='2xl' pt='20px'>செவிவழி விழிப்புணர்வு</Heading>
              <Heading size='lg' pr={20} lineHeight={1.3} noOfLines={2}>{page_head}</Heading>
            </div>
            <div className="t1-mainbar">
            {tableData.Data.length > 0 && (<TestMainbar tableData={tableData.Data}  level={level}/>)}
            </div>  
          </div>  
        </div>
        
          <div className="t1-right">
          {tableData.Data.length > 0 && <RightSidebar data={audioData} page_head={page_head}  level={level} dispData={tableData.Data[11]}/>}
          </div>
        </AudioContext.Provider>
      </div>
    </div>
    
  )
}

export default TestPageA1

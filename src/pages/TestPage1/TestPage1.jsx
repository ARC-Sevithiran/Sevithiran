import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { Heading } from '@chakra-ui/react'
import TestMainbar from '../../components/TestMainbar/TestMainbar'
import { useLocation } from 'react-router-dom'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { useState, useEffect } from 'react'
import AudioContext from '../../context/audioContext'
import axios from 'axios'
import './TestPage1.css'
import {storage} from '../../firebaseConfig'
import { ref, getDownloadURL } from 'firebase/storage'

const TestPage1 = () => {

  const location  = useLocation()
  let page_head = ''
  let json_getter = '';
  let level = '';
  const [tableData,settableData] = useState({Data:{
    length:0
  }})

//reference table for dynamic webpage selection
  switch(location.pathname){
    case '/Test1/Level1':
      page_head='நிலை 1 - காட்சி குறிப்புகளுடன்'
      json_getter='I'
      level='Level_1'
      break;
    case '/Test1/Level2':
      page_head = 'நிலை 2 - காட்சி குறிப்புகள் இல்லாமல்'
      json_getter='II'
      level='Level_2'
      break;
    case '/Test1/Level3':
      page_head = 'நிலை 3 - அருகிலுள்ள ஒலிகள்'
      json_getter='III'
      level='Level_3'
      break;
    case '/Test1/Level4':
      page_head = 'நிலை 4 - தூர ஒலிகள்'
      json_getter='IV'
      level='Level_4'
      break;
    case '/Test1/Level5':
      page_head = 'நிலை 5 - அமைதியான சூழ்நிலையில்'
      json_getter='V'
      level='Level_5'
      break;
    case '/Test1/Level6':
      page_head = 'நிலை 6 - பின்னணி இரைச்சல் முன்னிலையில்'
      json_getter='VI'
      level='Level_6'
      break;
  }
//



//json fetcher
  useEffect(()=>{
    axios
    .get(`db_json/Test1_${json_getter}_A_1.json`)
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
//

// image, audio form firebase storage using google cloud sdk to be put into states here
  const [imageFile, setimageFile] = useState(null);
//....********incomplete code*********
  

//fetch audio, image from firebase storage
  // useEffect(() => {

  //   const imageRef = ref(storage, `Test_A_1/Level_1/${audioData.file_code}.png`)

  //   getDownloadURL(imageRef).then(url => {
  //     fetch(url,{method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'png'
  //     }})
  //       .then(response => response.blob())
  //       .then(blob => {
  //         setimageFile(blob);
  //       });
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }, [audioData]);
//*********** incomplete code*****************


  return (
    <div className='t1-main-container'>
      <Navbar/>
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
       setT3st}}>
      <div className="t1-left">
          <LeftSidebar/>
      </div>
      <div className="t1-bars">
        <div className="t1-main">
          <div className="t1-header">
            <Heading size='2xl' pt='100px'>செவிவழி விழிப்புணர்வு</Heading>
            <Heading size='lg' noOfLines={2}>உரத்த சுற்றுச்சூழல் ஒலிகள்</Heading>
          </div>
          <div className="t1-mainbar">
          {tableData.Data.length > 0 && (<TestMainbar tableData={tableData.Data}  level={level}/>)}
          </div>  
        </div>  
      </div>
      
        <div className="t1-right">
        {tableData.Data.length > 0 && <RightSidebar data={audioData} page_head={page_head} imageData={imageFile} level={level} dispData={tableData.Data[11]}/>}
        </div>
      </AudioContext.Provider>
    </div>
    
  )
}

export default TestPage1

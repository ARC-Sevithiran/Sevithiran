import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { Button, Heading } from '@chakra-ui/react'
import TestAMainbarNew from '../../components/TestAMainbarNew/TestAMainbarNew'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { PointsProvider } from '../../context/pointsContext'
import './TestPageA1new.css'

const TestPageA1new = () => {

    const location  = useLocation()
    let page_head = ''
    let json_getter = '';
    let level = '';
    const [tableData,settableData] = useState({Data:{
        length:0
    }})

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
          page_head = 'நிலை 3 - தூர ஒலிகள்'
          json_getter='IV'
          level='Level_4'
          break;
        case '/TestA1/Level4':
          page_head = 'நிலை 4 - பின்னணி இரைச்சல் முன்னிலையில்'
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

    const [test_topic,setTest_topic] = useState({
      audio: new Audio(tableData?.Data[11]?.name),
      isPlaying: false
    })

    const [test_type,setTest_type] = useState({
      audio: new Audio("https://firebasestorage.googleapis.com/v0/b/arc-phase1-sevithiran.appspot.com/o/Test_A_1%2FTest_I_A_1.wav?alt=media&token=84259576-5eff-44fc-9a75-fcfc029a9f3f"),
      isPlaying: false
    })

    const [ins,setins] = useState({
      audio: new Audio(tableData?.Data[11]?.instructions),
      isPlaying: false
    })

    useEffect(()=>{
      setins(prevState => {
        setins( {...prevState, audio : new Audio(tableData?.Data[11]?.instructions)})
      })
    },[ setins, tableData?.Data])

    useEffect(()=>{
      setTest_topic(prevState => {
        setTest_topic( {...prevState, audio : new Audio(tableData?.Data[11]?.name)})
      })
    },[ setTest_topic, tableData?.Data])

    useEffect(()=>{
      setTest_type(prevState => {
        setTest_type( {...prevState, audio : new Audio("https://firebasestorage.googleapis.com/v0/b/arc-phase1-sevithiran.appspot.com/o/Test_A_1%2FTest_I_A_1.wav?alt=media&token=84259576-5eff-44fc-9a75-fcfc029a9f3f")})
      })
    },[ setTest_type, tableData?.Data])
  
    const playpause = (variable, setVariable) => {
      setVariable(prevState => {
        const playState = prevState.isPlaying;
        if (playState) {
          variable.audio.pause();
        } else {
          variable.audio.play();
        }
        return { ...prevState, isPlaying: !playState };
      });
    };
    
  return (
    <div className='t1new-main-container'>
        <div className="t1new-nav-container">
            <Navbar/>
        </div>
        <div className="t1new-page-container">
            <div className="t1new-ls-container">
                <LeftSidebar testname='A1'/>
            </div>
            <div className="t1new-content-container">
                <div className="t1new-title-container">
                    <Heading size='2xl' textAlign='center' color=" rgb(0, 120, 94)" pb='20px' >செவிவழி விழிப்புணர்வு</Heading>
                    <div className="t1new-levelDetails">
                        <div className="t1new-titles">
                            <Heading size='xl'>சுற்றுச்சூழல் ஒலிகள்</Heading>
                            <Heading size='lg'>{page_head}</Heading>
                        </div>
                        {tableData.Data.length > 0 && <div className="t1new-titlebuttons">
                            <Button colorScheme='whatsapp' shadow='1px 5px 5px 0px rgba(0, 0, 0, 0.3)' onClick={() => playpause(test_type,setTest_type)}>சோதனை வகை</Button>
                            <Button colorScheme='whatsapp' shadow='1px 5px 5px 0px rgba(0, 0, 0, 0.3)' onClick={() => playpause(test_topic,setTest_topic)}>நிலை பெயர்</Button>    
                        </div>}
                    </div>
                </div>
                <div className="t1new-instruction-container">
                  <div className="t1new-instruction-container-heading">
                    <Heading>அறிவுறுத்தல்கள்</Heading>
                    <Button colorScheme='teal' size='md' borderRadius='80px' onClick={() => playpause(ins, setins)} ><FontAwesomeIcon icon={faPlay} /></Button>
                  </div>
                    <Heading size='md' fontWeight='medium'>கொடுக்கப்பட்டுள்ள படத்தின் ஒலியை நீங்கள் கேட்டால், ஆம் குறியை அழுத்தவும். இல்லையெனில், இல்லை குறியை அழுத்தவும்.</Heading>
                </div>
                <PointsProvider>
                  <div className="t1new-question-container">
                      {tableData.Data.length > 0 && <TestAMainbarNew data ={tableData.Data} level={level}/>}
                  </div>
                </PointsProvider>
            </div>
            
        </div>     
    </div>
  )
}

export default TestPageA1new

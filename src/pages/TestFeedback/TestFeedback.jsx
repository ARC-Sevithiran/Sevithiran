import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { Heading, Button, HStack} from '@chakra-ui/react'
import FbQuestion from './FbQuestion'
import './TestFeedback.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faNewspaper } from "@fortawesome/free-solid-svg-icons";

const TestFeedback = () => {
  
  const location = useLocation()
  const navigate = useNavigate()


  let questionArray = []
  let testloca = ''

  switch(location.pathname){
      case '/TestA1/feedback':
        questionArray=[
          'காட்சி குறிப்புகளுடன் உரத்த சுற்றுச்சூழல் ஒலிகளை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'காட்சி குறிப்புகள் இல்லாமல் உரத்த சுற்றுச்சூழல் ஒலிகளை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'அருகில் கேட்கும் உரத்த சுற்றுச்சூழல் ஒலிகளை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'தூரத்தில் கேட்கும் உரத்த சுற்றுச்சூழல் ஒலிகளை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'அமைதியான சூழ்நிலையில் கேட்கும் உரத்த சுற்றுச்சூழல் ஒலிகளை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'பின்னணி இரைச்சலின் முன்னிலையில் கேட்கும் உரத்த சுற்றுச்சூழல் ஒலிகளை உங்கள் குழந்தை அறியமுடிகிறதா?'         
        ]
        testloca = '/TestA1Menu'
        break;
        
      case '/TestA2/feedback':
        questionArray=[
          'காட்சி குறிப்புகளுடன் இசையை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'காட்சி குறிப்புகள் இல்லாமல் இசையை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'அருகில் கேட்கும் இசையை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'தூரத்தில் கேட்கும் இசையை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'அமைதியான சூழ்நிலையில் கேட்கும் இசையை உங்கள் குழந்தை அறியமுடிகிறதா?',
          'பின்னணி இரைச்சலின் முன்னிலையில் கேட்கும் இசையை உங்கள் குழந்தை அறியமுடிகிறதா?'
        ]
        testloca = '/TestA1Menu'
        break;
  }

  const handleTest = () =>{
    navigate(testloca)
  }

  return (
    
    <div className='tfb-main-container'>
      <div className="navi">
        <HStack>
          <Button colorScheme='green' size='lg' onClick={() => navigate('/Home')}><FontAwesomeIcon icon={faHouse}/></Button>
          <Button colorScheme='green' size='lg' onClick={handleTest}><FontAwesomeIcon icon={faNewspaper} /></Button>
        </HStack>
      </div>
      <div className="tfb-outer-box">
          <div className="tfb-left-box">
            <Heading size='4xl' color='rgba(198, 255, 231, 0.514)'>பெற்றோர் கருத்து</Heading>
          </div>
          <div className="tfb-right-box">
            <div className="fb-ins">
            <Heading size='lg' borderColor='rgb(0, 96, 0)' borderRadius='30px' p={4} border='2px'>வழிமுறைகள்:<br/>"எப்போதும்" என்பதற்கு 4 தேர்ந்தெடுக்கவும் <br/>"சில நேரம்" என்பதற்கு 2 தேர்ந்தெடுக்கவும் <br/>"இல்லை" என்பதற்கு 0 தேர்ந்தெடுக்கவும்</Heading>
            </div>
            <div className="tfb-questions">
            {
              questionArray.map((object)=>(
                <FbQuestion obj={object} key={object}/>
              )) 
            }
            </div>
            
            <Button colorScheme='green' type='submit' width='30%' height='100%' pt='1%' pb='1%' onClick={()=>navigate("/Home")}>Submit</Button>
          </div>
      </div>
    </div>
  )
}

export default TestFeedback

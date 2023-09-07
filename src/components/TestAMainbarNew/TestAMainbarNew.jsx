import React, {useContext} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from '@chakra-ui/react'
import UserContext from "../../context/userContext";
import { db } from '../../firebaseConfig';
import AudioContext from '../../context/audioContext'
import { addDoc, collection } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { PointsContext } from '../../context/pointsContext'
import QuestionTab from './QuestionTab'
import './TestAMainbarNew.css'

const TestAMainbarNew = (props) => {

  const {score} = useContext(PointsContext)
  const {uid} = useContext(UserContext);
  const {total} = useContext(AudioContext);

  const currentDate = new Date();

  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();

  const red_location = location.pathname.split("/")
  
  let test_name = ''
  let total_score = 0
  let pass_score = 0

  switch(red_location[1]){
    case 'TestA1':
      test_name = "சுற்றுச்சூழல் ஒலிகள்"
      total_score = 66
      pass_score = 33
      break;

    case 'TestA2':
      test_name = "இசை"
      total_score = 44
      pass_score = 22
      break;

    default:
      test_name = ""
      total_score = 0
      pass_score = 0
      break;
  }

  const firestoreDate = firebase.firestore.Timestamp.fromDate(currentDate);

  const handleClick = async() =>{
    const result = await addDoc(collection(db, `users/${uid}/TestADetails`),
    {
      TestName : test_name,
      Score : score,
      TestType: 'செவிவழி விழிப்புணர்வு',
      TotalScore: total_score,
      PassScore : pass_score,
      TimeStamp : firestoreDate
    })
    .then(() =>{     
      navigate(`/${red_location[1]}/feedback`)
      
    })
    console.log(result)
  }

  return (
    <div className='TMN-main-container'>
      <Tabs variant='soft-rounded' colorScheme='green' size='lg' height='100%'>
        <div className="TMN-content-container">
          <div className="TMN-question-panel">
            <TabPanels width="100%" height="100%">
              {
                props.data.slice(0,11).map((obj) => (
                  <TabPanel width="100%" height="100%"><QuestionTab obj={obj} level={props.level}/></TabPanel>
                ))
              }
            </TabPanels>
          </div>
          <div className="TMN-side-panel">
            <div className="TMN-questionNav">
              <TabList flexWrap='wrap' gap='6px'>
              {
                props.data.slice(0, 11).map((obj) => (
                  <Tab borderRadius='20%' fontSize='2xl'>{obj.id}</Tab>
                ))
              }
            </TabList>
            </div>  
            <div className="TMN-points-container">
              <Heading size='lg' fontWeight='semibold'>Your Score: {score}</Heading>  
            </div>  
            <Button onClick={onOpen} colorScheme='cyan' width='100%' flexWrap='wrap' padding='10px' color='rgba(225, 238, 255, 1)' size='lg'>சோதனை சமர்ப்பிக்க</Button>
            <Modal
              isCentered
              onClose={onClose}
              isOpen={isOpen}
              motionPreset='slideInBottom'
            >
              <ModalOverlay />
              <ModalContent bgColor='rgba(205, 238, 255, 1)' border='3px solid' borderRadius='30px' color='rgba(0, 120, 163, 0.866)'>
                <ModalHeader borderBottom='1px' borderRadius='20px' fontSize='2xl'>சோதனை சமர்ப்பிக்க</ModalHeader>
                <ModalCloseButton />
                <ModalBody width='100%'>
                  <Text fontSize='xl'>சோதனையைச் சமர்ப்பிக்க விரும்புகிறீர்களா?</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                  இல்லை
                  </Button>
                  <Button variant='solid' type='button' onClick={handleClick}>ஆம்</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>       
          </div>          
        </div>
      </Tabs> 
    </div>
  )
}

export default TestAMainbarNew

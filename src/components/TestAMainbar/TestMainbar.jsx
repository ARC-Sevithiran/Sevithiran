import React from 'react'
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
import QuestionList from './QuestionList'
import './TestMainbar.css'
import UserContext from "../../context/userContext";
import { useContext } from 'react';
import { db } from '../../firebaseConfig';
import AudioContext from '../../context/audioContext'
import { addDoc, collection } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';


const TestMainbar = (props) => {
  const {uid} = useContext(UserContext);
  const {total} = useContext(AudioContext);
  const currentDate = new Date();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const red_location = location.pathname.split("/")
  console.log(red_location)
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
  }

  const firestoreDate = firebase.firestore.Timestamp.fromDate(currentDate);

  const handleClick = async() =>{
    const result = await addDoc(collection(db, `users/${uid}/TestADetails`),
    {
      TestName : test_name,
      Score : total,
      TestType: 'செவிவழி விழிப்புணர்வு',
      TotalScore: total_score,
      PassScore : pass_score,
      TimeStamp : firestoreDate
    })
    .then(() =>{
      navigate(`/${red_location[1]}/feedback`)
    })
  }

  return (
    <div className='tm-main-container'>
      <QuestionList tableData={props.tableData} level={props.level}/>
      <Button onClick={onOpen} colorScheme='cyan' width='fit-content' color='rgba(225, 238, 255, 1)' mb='5%' size='lg'>சோதனை சமர்ப்பிக்க</Button>
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
  )
}

export default TestMainbar




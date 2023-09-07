import React, { useContext } from 'react'
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import {Heading, Button, Image, VStack, Box, HStack, RadioGroup, Radio} from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlay } from "@fortawesome/free-solid-svg-icons";
import { PointsContext } from '../../context/pointsContext';
import './QuestionTab.css'

const QuestionTab = (props) => {

  const resultToast = useToast()

  const {setSoundBox,soundBox, setScore} = useContext(PointsContext)

  const [isPlayDisabled, setIsPlayDisabled] = useState(false)

  const [name_disabler, setName_disabler] = useState(false)

  const [ans1,setAns1] = useState("")
  const [ans2,setAns2] = useState("")
  const [ans3,setAns3] = useState("")

  const[t1,setT1] = useState("")
  const[t2,setT2] = useState("")
  const[t3,setT3] = useState("")

  const [t1Disabler,setT1Disabler] = useState(false)
  const [t2Disabler,setT2Disabler] = useState(false)
  const [t3Disabler,setT3Disabler] = useState(false)

  const random1 = Math.floor((Math.random() * 10)) % 2
  const random2 = Math.floor((Math.random() * 10)) % 2
  const random3 = Math.floor((Math.random() * 10)) % 2

  const audio_player = async(variable, setDisabler, random, setAns) =>{
    setDisabler(true)
    if(random === 1){
      setAns("இல்லை")
      setSoundBox(true)
      await soundPlayer(variable, 1)
      setSoundBox(false)
    }
    else{
      setAns("ஆம்")
      setSoundBox(true)
      await soundPlayer(variable, 0)
      setSoundBox(false)
    }
    setDisabler(false)
  }

  const handleChange = (e,setT,setTDisabler,ans)=>{
    setT(e.target.value)
    if(e.target.value === ans){
      setScore((prevState)=>prevState+1)
      resultToast({
        title: "Correct, +1 point", 
        status: "success",
        isClosable: true
      })
    }
    else{
      
      resultToast({
        title: "Incorrect, 0 point", 
        status: "error",
        isClosable: true
      })
    }

    setTDisabler(true)
  }

  const soundPlayer = (variable, muter) =>{
    return new Promise((res)=>{
      const audio = new Audio(variable)
      audio.addEventListener('ended', () =>{
        res()
      })
      if(muter === 1){
        audio.muted = true
        audio.play()
      }
      else{
        audio.play()
      }
    })
  }

  const name_play = async(variable, setDisableVariable) => {
    setDisableVariable(true)
    await soundPlayer(variable,0)
    setDisableVariable(false)
  };

  return (
    <div className='TNqt-main-container'>
      <div className="TNqt-header-container">
        <Heading size='lg'>{props.obj.t_name}</Heading>
        <Button colorScheme='facebook' size='md' borderRadius='80px' onClick={()=>name_play(props.obj.name_audio,setName_disabler)} isDisabled={name_disabler}><FontAwesomeIcon icon={faPlay} /></Button>
      </div>
      <div className="TNqt-content-container">        
        <div className="TNqt-question-container">
        <VStack  color= "rgb(0, 111, 56)" border='3px solid rgb(1, 200, 100)' borderRadius='20px' p='3%'>
              <Heading pb="5%" color='rgb(1, 200, 100)'>சோதனைகள்</Heading>
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6}>
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 1:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                    <Button onClick={() => audio_player(props.obj.audio, setIsPlayDisabled, random1, setAns1)} isDisabled={isPlayDisabled} shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' bgColor='rgb(255, 239, 179)' _hover={{bgColor:'rgb(255, 220, 179)', shadow: 'none'}} borderRadius='20px' >
                      <FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgb(1, 200, 100)",}} />
                    </Button>          
                  </HStack>
                    <RadioGroup value = {t1} isDisabled={t1Disabler} colorScheme='whatsapp'>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்" onChange={(e) => handleChange(e, setT1, setT1Disabler, ans1)} colorScheme='whatsapp'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={(e) => handleChange(e, setT1, setT1Disabler, ans1)} colorScheme='whatsapp'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>                    
                </Box>
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6} >
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 2:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                    <Button onClick={() => audio_player(props.obj.audio, setIsPlayDisabled, random2, setAns2)} isDisabled={isPlayDisabled} shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' bgColor='rgb(255, 239, 179)' _hover={{bgColor:'rgb(255, 220, 179)', shadow: 'none'}} borderRadius='20px' >
                      <FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgb(1, 200, 100)",}} />
                    </Button>                    
                  </HStack>
                    <RadioGroup value = {t2} isDisabled={t2Disabler} colorScheme='whatsapp'>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்" onChange={(e) => handleChange(e, setT2, setT2Disabler, ans2)} colorScheme='whatsapp'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={(e) => handleChange(e, setT2, setT2Disabler, ans2)} colorScheme='whatsapp'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>                    
                </Box>                
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6}>
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 3:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                    <Button onClick={() => audio_player(props.obj.audio, setIsPlayDisabled, random3, setAns3)} isDisabled={isPlayDisabled} shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' bgColor='rgb(255, 239, 179)' _hover={{bgColor:'rgb(255, 220, 179)', shadow: 'none'}} borderRadius='20px' >
                      <FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgb(1, 200, 100)",}} />
                    </Button>                   
                  </HStack>
                    <RadioGroup value = {t3} isDisabled={t3Disabler} colorScheme='whatsapp'>
                    <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்" onChange={(e) => handleChange(e, setT3, setT3Disabler, ans3)} colorScheme='whatsapp'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={(e) => handleChange(e, setT3, setT3Disabler, ans3)} colorScheme='whatsapp'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>                    
                </Box>
              </VStack>
        </div>
        <div className="TNqt-side-panel">
          {props.level === 'Level_1' && 
          <div className="TNqt-image-container">
            <Image src={props.obj.v_cue} width='200px' height='170px' borderRadius='20px'/>
          </div>
          }
          <div className="TNqt-sound-indicator">
            {soundBox?<FontAwesomeIcon icon={faMusic} beat size='2xl' style={{color: "rgb(255, 0, 0)", height:"64px"}}/>:<FontAwesomeIcon icon={faMusic} size='2xl' style={{color: "rgb(255, 0, 0)", height:"64px"}}/>}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default QuestionTab

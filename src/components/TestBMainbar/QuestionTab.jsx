import React,{useEffect, useRef} from 'react'
import { Heading, Image, RadioGroup, Radio,VStack, HStack, Box, Button, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useToast } from '@chakra-ui/react';
import  './QuestionTab.css'
import { useState, useContext } from 'react';
import { PointsContext } from '../../context/pointsContext';
import { useLocation } from 'react-router-dom'


const QuestionTab = (props) => {

  const {setSoundBox, setScore} = useContext(PointsContext)

  const resultToast = useToast()

  const location = useLocation()

  let instructions=''

  switch(location.pathname){
    case '/TestB1/Level1':
      instructions="https://firebasestorage.googleapis.com/v0/b/arc-phase1-sevithiran.appspot.com/o/Test_B_1%2FLevel_1%2FI.B.1.%20%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AF%88%201%20-%20%E0%AE%95%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF%20%E0%AE%95%E0%AF%81%E0%AE%B1%E0%AE%BF%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%81%E0%AE%9F%E0%AE%A9%E0%AF%8D%20Instructions.wav?alt=media&token=38931660-ce9e-446a-a75a-75f606d0fe76"
      break;

    case '/TestB1/Level2':
        instructions="https://firebasestorage.googleapis.com/v0/b/arc-phase1-sevithiran.appspot.com/o/Test_B_1%2FLevel_2%2FII.B.1.%20%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AF%88%202%20-%20%E0%AE%95%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF%20%E0%AE%95%E0%AF%81%E0%AE%B1%E0%AE%BF%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%8D%20%E0%AE%87%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AE%BE%E0%AE%AE%E0%AE%B2%E0%AF%8D%20Instructions.wav?alt=media&token=53ed3a58-aa66-4fdd-8744-8eff054b8a2e"
        break;

    case '/TestB1/Level3':
      instructions=""
      break;

    case '/TestB1/Level4':
      instructions=""
      break;

    case '/TestB1/Level5':
      instructions=""
      break;

    default:
      instructions=""
  }


  const [ins,setins] = useState({
    audio: new Audio(instructions),
    isPlaying: false
  })

  const [levelName,setlevelName] = useState({
    audio: new Audio("https://firebasestorage.googleapis.com/v0/b/arc-phase1-sevithiran.appspot.com/o/Test_B_1%2FLevel_1%2FI.B.1.%20%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AF%88%201%20-%20%E0%AE%95%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF%20%E0%AE%95%E0%AF%81%E0%AE%B1%E0%AE%BF%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81%E0%AE%95%E0%AE%B3%E0%AF%81%E0%AE%9F%E0%AE%A9%E0%AF%8D.wav?alt=media&token=cede3abd-15f8-433e-8c36-971ec6a57698"),
    isPlaying: false
  })

  useEffect(()=>{
    setins(prevState => {
      setins( {...prevState, audio : new Audio(instructions)})
    })
  },[ setins, instructions])

  const [isPlayDisabled1, setIsPlayDisabled1] = useState(false)

  const [ans1,setAns1] = useState("")
  const [ans2,setAns2] = useState("")
  const [ans3,setAns3] = useState("")

  const[t1,setT1] = useState("")
  const[t2,setT2] = useState("")
  const[t3,setT3] = useState("")

  const [t1Disabler,setT1Disabler] = useState(false)
  const [t2Disabler,setT2Disabler] = useState(false)
  const [t3Disabler,setT3Disabler] = useState(false)

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  const random1 = Math.floor((Math.random() * 10)) % 2
  const random2 = Math.floor((Math.random() * 10)) % 2
  const random3 = Math.floor((Math.random() * 10)) % 2


  const playpause = (variable, setVariable) => {
    setVariable(prevState => {
      const playState = prevState.isPlaying;
      if(variable){
        if (playState) {
        variable.audio.pause();
      } else {
        variable.audio.play();
      }
      }
      
      return { ...prevState, isPlaying: !playState };
    });
  };

  const playSound1 = () =>{
    return new Promise((res)=>{
      const audio = new Audio(props.data.s1);
      audio.addEventListener('ended', ()=>{
        res()
      })
      audio.play();
      audio1Ref.current = audio;
    })
  }

  const playSound2 = () =>{
    return new Promise((res)=>{
      const audio = new Audio(props.data.s2);
      audio.addEventListener('ended', ()=>{
        res()
      })
      audio.play();
      audio2Ref.current = audio;
    })
  }

  const audioPlaypause = async(setAns,num,setIsPlayDisabled) =>{
    setIsPlayDisabled(true)
    setSoundBox(1)
    await playSound1()
    if(num === 1){
      setSoundBox(2)
      if(random1 === 0){
        setAns("ஆம்")
        await playSound2()
      }
      else{
        setAns("இல்லை")
        await playSound1()        
      }  
    }  
    else if(num === 2){
      setSoundBox(2)
      if(random2 === 0){
        setAns("ஆம்")
        await playSound2()
      }
      else{
        setAns("இல்லை")
        await playSound1()
      }  
    } 
    else if(num === 3){
      setSoundBox(2)
      if(random3 === 0){
        setAns("ஆம்")
        await playSound2()        
      }
      else{
        setAns("இல்லை")
        await playSound1()        
      }  
    } 
    setIsPlayDisabled(false)
    setSoundBox(null)
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

  return (
    <>
      <div className="B1qt-main-container">
        <div className="B1qt-content-container">
          <div className="B1qt-top">
            <div className="B1qt-headings">
              <Heading size='xl' width="70%" textAlign='left'>{props.data.test_name}</Heading>  
              <Button size="lg" onClick={() =>playpause(levelName,setlevelName)}>கேள்வி பெயர்</Button>            
            </div>
            <div className="B1qt-instructions">
              <HStack justifyContent='space-between' pr='10%'>
                <Heading size='lg'>வழிமுறைகள்</Heading>
                <Button onClick={() =>playpause(ins,setins)}><FontAwesomeIcon icon={faPlay} size="sm"/></Button>
              </HStack>
              <Heading size='md' fontWeight='normal'>படங்களில் கொடுக்கப்பட்டுள்ளபடி, கேட்கும் இரண்டு ஒலிகள் ஒன்ரேயென்றால், ஆம் குறியை அழுத்தவும். வேறு ஒலிகள் என்றால், இல்லை குறியை அழுத்தவும்.</Heading>
              
            </div>
            {location.pathname==='/TestB1/Level1' && <div className="B1qt-image-box">
              <Heading size='lg'>சித்திர குறிப்பு</Heading>
              <div className="B1qt-images">
                <Image src={props.data.p1} border='2px solid rgb(169, 255, 100)' borderRadius='20px' />
                <Image src={props.data.p2} border='2px solid rgb(169, 255, 100)' borderRadius='20px'/>
              </div>
            </div>}
          </div>         
          <div className="B1qt-bottom">
            
            <VStack width="100%" color= "rgb(0, 111, 56)" border='3px solid rgb(1, 200, 100)' borderRadius='20px' p='3%'>
              <Heading pb="5%" color='rgb(1, 200, 100)'>சோதனைகள்</Heading>
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6}>
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 1:  </strong>ஒலிகளில் வேறுபாடு உள்ளதா?</Heading>
                    <Button onClick={()=>audioPlaypause(setAns1,1,setIsPlayDisabled1)} isDisabled={isPlayDisabled1} shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' bgColor='rgb(255, 239, 179)' _hover={{bgColor:'rgb(255, 220, 179)', shadow: 'none'}} borderRadius='20px' >
                      <FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgb(1, 200, 100)",}} />
                    </Button>          
                  </HStack>
                    <RadioGroup value = {t1} isDisabled={t1Disabler} colorScheme='whatsapp'>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்" onChange={(e) => handleChange(e,setT1,setT1Disabler,ans1)} colorScheme='whatsapp'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={(e) => handleChange(e,setT1,setT1Disabler,ans1)} colorScheme='whatsapp'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>                    
                </Box>
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6} >
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 2:  </strong>ஒலிகளில் வேறுபாடு உள்ளதா?</Heading>
                    <Button onClick={()=>audioPlaypause(setAns2,2,setIsPlayDisabled1)} isDisabled={isPlayDisabled1} shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' bgColor='rgb(255, 239, 179)' _hover={{bgColor:'rgb(255, 220, 179)', shadow: 'none'}} borderRadius='20px' >
                      <FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgb(1, 200, 100)",}} />
                    </Button>                    
                  </HStack>
                    <RadioGroup value = {t2} isDisabled={t2Disabler} colorScheme='whatsapp'>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்" onChange={(e) => handleChange(e,setT2,setT2Disabler,ans2)} colorScheme='whatsapp'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={(e) => handleChange(e,setT2,setT2Disabler,ans2)} colorScheme='whatsapp'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                    
                </Box>
                
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6}>
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 3:  </strong>ஒலிகளில் வேறுபாடு உள்ளதா?</Heading>
                    <Button onClick={()=>audioPlaypause(setAns3,3,setIsPlayDisabled1)} isDisabled={isPlayDisabled1} shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' bgColor='rgb(255, 239, 179)' _hover={{bgColor:'rgb(255, 220, 179)', shadow: 'none'}} borderRadius='20px' >
                      <FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgb(1, 200, 100)",}} />
                    </Button>
                    
                  </HStack>
                    <RadioGroup value = {t3} isDisabled={t3Disabler} colorScheme='whatsapp'>
                    <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்" onChange={(e) => handleChange(e,setT3,setT3Disabler,ans3)} colorScheme='whatsapp'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={(e) => handleChange(e,setT3,setT3Disabler,ans3)} colorScheme='whatsapp'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                    
                </Box>
              </VStack>
          </div>   
        </div>
      </div>
    </>
  )
}

export default QuestionTab

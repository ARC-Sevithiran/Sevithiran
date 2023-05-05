import React, { useState,useEffect,useContext,useRef } from 'react'
import { 
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  HStack,
  VStack,
  RadioGroup,
  Radio,
  Box } from '@chakra-ui/react';
import AudioContext from '../../context/audioContext'
import doorbell from '../../assets/doorbell.mp3'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause } from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router-dom"

const Questions = (props) => {

  const location = useLocation()

//sample audio handler
  const audioReft1 = useRef(null)
  const audioReft2 = useRef(null)
  const audioReft3 = useRef(null)
  const [playt1, setplayt1] = useState(false)
  const [playt2, setplayt2] = useState(false)
  const [playt3, setplayt3] = useState(false)

  const handlePlayt1 = () =>{
    audioReft1.current.currentTime = 0;
    audioReft1.current.play()
  }

  const handlePlayt2 = () =>{
    audioReft2.current.currentTime = 0;
    audioReft2.current.play()
  }

  const handlePlayt3 = () =>{
    audioReft3.current.currentTime = 0;
    audioReft3.current.play()
  }

  const fhandlePlayt1 = () =>{
    audioReft1.current.currentTime = 0;
    audioReft1.current.play()
    audioReft1.current.muted = true
  }

  const fhandlePlayt2 = () =>{
    audioReft2.current.currentTime = 0;
    audioReft2.current.play()
    audioReft2.current.muted = true
  }

  const fhandlePlayt3 = () =>{
    audioReft3.current.currentTime = 0;
    audioReft3.current.play()
    audioReft3.current.muted = true
  }

  useEffect(() => {
    const handleAudioPlay = () => {
      setplayt1(true);
    };
  
    const handleAudioEnded = () => {
      setplayt1(false);
    };
  
    if (audioReft1.current) {
      audioReft1.current.addEventListener("play", handleAudioPlay);
      audioReft1.current.addEventListener("ended", handleAudioEnded);
    }
  
    return () => {
      if (audioReft1.current) {
        audioReft1.current.removeEventListener("play", handleAudioPlay);
        audioReft1.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [audioReft1.current]);

  useEffect(() => {
    const handleAudioPlay = () => {
      setplayt2(true);
    };
  
    const handleAudioEnded = () => {
      setplayt2(false);
    };
  
    if (audioReft2.current) {
      audioReft2.current.addEventListener("play", handleAudioPlay);
      audioReft2.current.addEventListener("ended", handleAudioEnded);
    }
  
    return () => {
      if (audioReft2.current) {
        audioReft2.current.removeEventListener("play", handleAudioPlay);
        audioReft2.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [audioReft2.current]);

  useEffect(() => {
    const handleAudioPlay = () => {
      setplayt3(true);
    };
  
    const handleAudioEnded = () => {
      setplayt3(false);
    };
  
    if (audioReft3.current) {
      audioReft3.current.addEventListener("play", handleAudioPlay);
      audioReft3.current.addEventListener("ended", handleAudioEnded);
    }
  
    return () => {
      if (audioReft3.current) {
        audioReft3.current.removeEventListener("play", handleAudioPlay);
        audioReft3.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [audioReft3.current]);
//

//individual answer management states
  const[anst1,setanst1] = useState('')//stores the actual answer
  const[anst2,setanst2] = useState('') 
  const[anst3,setanst3] = useState('')

  const [t1,sett1] = useState('')//stores the answer input by user
  const [t2,sett2] = useState('')
  const [t3,sett3] = useState('')

  const[t1ren,sett1ren] = useState(true)//checks which button to render, one with audio or one without it
  const[t2ren,sett2ren] = useState(true) 
  const[t3ren,sett3ren] = useState(true)

  const [t1disabler,sett1Disabler] = useState(false)//disables the radio button once the answer is selected
  const [t2disabler,sett2Disabler] = useState(false)
  const [t3disabler,sett3Disabler] = useState(false)
//

//audio randomizer mechanism
//**Q1 

  let yesCount = 0

  useEffect( () => {
    let x=Math.floor(Math.random()*100)
    if(x%2==0 || yesCount==0){
      setanst1("ஆம்")
      sett1ren(true)
      yesCount++
    }
    else{
      setanst1("இல்லை")
      sett1ren(false)
    }

  },[t1ren,anst1])
//**Q2
  useEffect( () => {
    let x=Math.floor(Math.random()*100)
    if(x%2==0 || yesCount==0){
      setanst2("ஆம்")
      sett2ren(true)
      yesCount++
    }
    else{
      setanst2("இல்லை")
      sett2ren(false)
    }

  },[t2ren,anst2])
//**Q3
  useEffect( () => {
    let x=Math.floor(Math.random()*100)
    if(x%2==0 || yesCount==0){
      setanst3("ஆம்")
      sett3ren(true)
      yesCount++
    }
    else{
      setanst3("இல்லை")
      sett3ren(false)
    }

  },[t3ren,anst3])
//


//context usage
  const {audioData, setaudioData, T1, setT1, T2, setT2, T3, setT3, T1st, setT1st, T2st, setT2st, T3st, setT3st  } =useContext(AudioContext)
//

//local answer state management


//sets the audio data in context according to user clicks(put in a promise for easier implementation of animation/side effects later on)
  const setterData = () =>{
    return new Promise( (resolve) =>{
      resolve(setaudioData(props.data))
    })
  }
//


//manages the change in radio buttons selected
  const handleChanget1 = (e) =>{
    sett1(e.target.value)
    if(e.target.value == anst1){
      setT1st(true)
    }
    else{
      setT1st(false)
    }

    sett1Disabler(true)
  }

  const handleChanget2 = (e) =>{
    sett2(e.target.value)

    if(e.target.value == anst2){
      setT2st(true)
    }
    else{
      setT2st(false)
    }
    sett2Disabler(true)
  }

  const handleChanget3 = (e) =>{
    sett3(e.target.value)
    if(e.target.value == anst3){
      setT3st(true)
    }
    else{
      setT3st(false)
    }
    sett3Disabler(true)
  }
//

//handles click of accordion button
  const handleClick = async() => {
    setterData()
  }
//


//change the context
  useEffect(()=>{
    setT1(t1)
    setT2(t2)
    setT3(t3)
  },[t1,t2,t3])
//



useEffect(() =>{
  sett1('')
  sett2('')
  sett3('')
  sett1Disabler(false)
  sett2Disabler(false)
  sett3Disabler(false)
},[location])


  return (
    <div className='questions-main-container'>
      <div className="play-button">
              <AccordionButton borderRadius='30px' _expanded={{bg:'rgba(205, 238, 255, 0.822)', color:'rgba(0, 120, 163, 0.866)'}}>
                <Box as="span" flex='1' textAlign='center' onClick={handleClick}>
                  <Heading size='lg' fontWeight='normal'>{props.data.t_name}</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
                  <audio ref={audioReft1} src={audioData.audio}/>
                  <audio ref={audioReft2} src={audioData.audio}/>
                  <audio ref={audioReft3} src={audioData.audio}/>
            {audioData && <AccordionPanel pb={4}>
            <VStack >
              <Box border='2px' borderRadius='10px' p={6}>
                <HStack>
                  <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 1:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                  {t1ren?<Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px' onClick={handlePlayt1}>
                      {playt1?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                    </Button>:
                    <Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px' onClick={fhandlePlayt1}>
                    {playt1?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                  </Button>}
                  
                </HStack>
                  <RadioGroup value={t1} isDisabled={t1disabler} colorScheme='blue'>
                    <HStack justifyContent='center' spacing='40px'>
                      <Radio value="ஆம்" onChange={handleChanget1} colorScheme='blue'>ஆம்</Radio>
                      <Radio value="இல்லை" onChange={handleChanget1} colorScheme='blue'>இல்லை</Radio>
                    </HStack>
                  </RadioGroup>
                  
              </Box>
              <Box border='2px' borderRadius='10px' p={6}>
              <HStack>
                  <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 2:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                  {t2ren?<Button bgColor='rgba(255, 186, 255, 0.866)' borderRadius='20px' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} onClick={handlePlayt2}>
                      {playt2?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                    </Button>:
                    <Button bgColor='rgba(255, 186, 255, 0.866)' borderRadius='20px' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} onClick={fhandlePlayt2}>
                    {playt2?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                  </Button>}
                </HStack>
                  
                    <RadioGroup value={t2} isDisabled={t2disabler}>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio onChange={handleChanget2} value="ஆம்" colorScheme='blue'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={handleChanget2} colorScheme='blue'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                  
              </Box>
              <Box border='2px' borderRadius='10px' p={6}>
              <HStack>
                  <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 3:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                  {t3ren?<Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px' onClick={handlePlayt3}>
                      {playt3?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                    </Button>:
                    <Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px' onClick={fhandlePlayt3}>
                    {playt3?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                  </Button>}
                </HStack>
                  
                    <RadioGroup value={t3} isDisabled={t3disabler}>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio onChange={handleChanget3} value="ஆம்" colorScheme='blue'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={handleChanget3} colorScheme='blue'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                  
              </Box>
            </VStack>
            </AccordionPanel>}
      </div>
    </div>
  )
}

export default Questions
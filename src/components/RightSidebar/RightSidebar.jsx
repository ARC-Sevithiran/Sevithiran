import { useContext,useEffect,useRef } from 'react'
import { Box, VStack, Heading, Divider, Text, Button, HStack, Image} from '@chakra-ui/react'
import React from 'react'
import './RightSidebar.css'
import AudioContext from '../../context/audioContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const RightSidebar = (props) => {

  const audioNameRef = useRef(null)
  const pageNameRef = useRef(null)
  const insRef = useRef(null)

  const handlePlay = () =>{
    audioNameRef.current.currentTime = 0;
    audioNameRef.current.play()
  }
  const handleIns = () =>{
    insRef.current.currentTime = 0;
    insRef.current.play()
  }
  const handlePageName = () =>{
    pageNameRef.current.currentTime = 0;
    pageNameRef.current.play()
  }

  const {audioData, T1, setT1, T2, setT2, T3, setT3, T1st, setT1st, T2st, setT2st, T3st, setT3st  } = useContext(AudioContext)

  useEffect(() =>{
    setT1('')
    setT2('')
    setT3('')
    setT1st(false)
    setT2st(false)
    setT3st(false)
  },[audioData,setT1,setT2,setT3,setT1st,setT2st,setT3st])

  let score =0
  if(T1st ===true){
    score++
  }
  if(T2st===true){
    score++
  }
  if(T3st===true){
    score++
  }

  console.log(props.data.file_code);

  return (
    <div className='boxer'>
      
      <Box borderLeft='2px' height='90%' borderLeftRadius='30px' bgColor='rgba(255, 236, 216, 0.60)' borderColor='rgb(255, 178, 97)' p={5} flexWrap='wrap' overflowY='scroll'>
        <VStack height='100%' width='100%' justifyContent='center'>
          <Box height='25%%' border='2px' color='rgb(255, 178, 97)' width='100%' borderRadius='30px' p={4}> 
            <VStack alignItems='flex-start'> 
              <Heading size='sm' textAlign='center'>தேர்வு விவரங்கள்</Heading>  
              <Divider borderColor='rgb(255, 178, 97)' />
              <Heading size='sm' fontWeight='normal'>{props.page_head}</Heading>
              <HStack flexWrap='wrap'>
                <audio ref={pageNameRef} src={props.dispData.name} />
                <audio ref={insRef} src={props.dispData.instructions} />
                <Button bgColor='rgb(255, 178, 97)' _hover={{bgColor:'rgb(252, 151, 42)'}} color='rgb(255, 236, 216)' borderRadius='20px' onClick={handleIns} width='fit-content' textOverflow='ellipsis'>அறிவுறுத்தல்கள்</Button>
                <Button bgColor='rgb(255, 178, 97)' _hover={{bgColor:'rgb(252, 151, 42)'}} color='rgb(255, 236, 216)' borderRadius='20px' onClick={handlePageName}>நிலை பெயர்</Button>
              </HStack>
            </VStack>
          </Box>
          <Box height='100%' border='2px' color='rgb(255, 178, 97)' width='100%' borderRadius='30px' p={4}>
            <VStack><Heading size='md' textAlign='center'>கேள்வி விவரங்கள்</Heading>
             <Divider borderColor='rgb(255, 178, 97)' />
              {props.level==='Level_1' && <Box border='2px'  color='rgb(255, 178, 97)' width='100%' borderRadius='30px' p={2} align='center' height='100%'>
                <Text pb='5px' fontWeight='semibold'>காட்சி குறிப்பு: </Text>
                <Image src={audioData.v_cue} boxSize='150' borderRadius='10px' p={0} />
              </Box>} 
             <Box border='2px' color='rgb(255, 178, 97)' width='100%' borderRadius='30px' p={4} >
                <VStack alignItems='flex-start'>
                  <HStack justifyContent='center' flexWrap='wrap'>
                    <Heading size='sm'>{audioData.t_name}</Heading>
                    <audio ref={audioNameRef} src={audioData.name_audio} />
                    <Button bgColor='rgb(255, 178, 97)' _hover={{bgColor:'rgb(252, 151, 42)'}} color='rgb(255, 236, 216)' borderRadius='20px' onClick={handlePlay}>ஒலி பெயர்</Button>
                    <Text border='2px' p={2} borderRadius='30px'>{score}/3</Text>
                  </HStack>                
                <Divider borderColor='rgb(255, 178, 97)' />                   
                  {T1st?<Text>சோதனை 1: {T1} <FontAwesomeIcon icon={faCheck} beat size="xs" /></Text>: <Text>சோதனை 1: {T1} <FontAwesomeIcon icon={faXmark} beatFade size="xs" /></Text>}
                  {T2st?<Text>சோதனை 1: {T2} <FontAwesomeIcon icon={faCheck} beat size="xs" /></Text>: <Text>சோதனை 1: {T2} <FontAwesomeIcon icon={faXmark} beatFade size="xs" /></Text>}
                  {T3st?<Text>சோதனை 1: {T3} <FontAwesomeIcon icon={faCheck} beat size="xs" /></Text>: <Text>சோதனை 1: {T3} <FontAwesomeIcon icon={faXmark} beatFade size="xs" /></Text>}
                </VStack>
              </Box>
              
            </VStack>
          </Box>
        </VStack>
      </Box>
    </div>
  )
}

export default RightSidebar
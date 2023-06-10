import React from 'react'
import { Heading, Image, RadioGroup, Radio,VStack, HStack, Box, Button, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause } from "@fortawesome/free-solid-svg-icons";
import  './QuestionTab.css'

const QuestionTab = (props) => {
  return (
    <>
      <div className="B1qt-main-container">
        <div className="B1qt-content-container">
          <div className="B1qt-top">
            <div className="B1qt-headings">
              <Heading size='xl' width="70%" textAlign='left'>{props.data.test_name}</Heading>  
              <Button size="lg">கேள்வி பெயர்</Button>            
            </div>
            <div className="B1qt-instructions">
              <HStack justifyContent='space-between' pr='10%'>
                <Heading size='lg'>வழிமுறைகள்</Heading>
                <Button ><FontAwesomeIcon icon={faPlay} size="sm"/></Button>
              </HStack>
              <Heading size='md' fontWeight='normal'>படங்களில் கொடுக்கப்பட்டுள்ளபடி, கேட்கும் இரண்டு ஒலிகள் ஒன்ரேயென்றால், ஆம் குறியை அழுத்தவும். வேறு ஒலிகள் என்றால், இல்லை குறியை அழுத்தவும்.</Heading>
              
            </div>
            <div className="B1qt-image-box">
              <Heading size='lg'>சித்திர குறிப்பு</Heading>
              <div className="B1qt-images">
                <Image src={props.data.p1} border='2px solid rgb(169, 255, 100)' borderRadius='20px' />
                <Image src={props.data.p2} border='2px solid rgb(169, 255, 100)' borderRadius='20px'/>
              </div>
            </div>
          </div>          
          <div className="B1qt-bottom">
            
            <VStack width="100%" color= "rgb(0, 111, 56)" border='3px solid rgb(1, 200, 100)' borderRadius='20px' p='3%'>
              <Heading pb="5%" color='rgb(1, 200, 100)'>சோதனைகள்</Heading>
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6} >
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 1:  </strong>ஒலிகளில் வேறுபாடு உள்ளதா?</Heading>
                    {true?<Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px' >
                        {true?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                      </Button>:
                      <Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px'>
                      {true?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                    </Button>}
                    
                  </HStack>
                    <RadioGroup  colorScheme='blue'>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்"  colorScheme='blue'>ஆம்</Radio>
                        <Radio value="இல்லை"  colorScheme='blue'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                    
                </Box>
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6}>
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 2:  </strong>ஒலிகளில் வேறுபாடு உள்ளதா?</Heading>
                    {true?<Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px' >
                        {true?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                      </Button>:
                      <Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px'>
                      {true?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                    </Button>}
                    
                  </HStack>
                    <RadioGroup  colorScheme='blue'>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்"  colorScheme='blue'>ஆம்</Radio>
                        <Radio value="இல்லை"  colorScheme='blue'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                    
                </Box>
                <Box  borderRadius='10px' backgroundColor='rgba(1, 200, 100, 0.432)' p={6}>
                  <HStack>
                    <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 3:  </strong>ஒலிகளில் வேறுபாடு உள்ளதா?</Heading>
                    {true?<Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px' >
                        {true?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                      </Button>:
                      <Button bgColor='rgba(255, 186, 255, 0.866)' _hover={{bgColor:'rgba(255, 148, 244, 0.866)'}} borderRadius='20px'>
                      {true?<FontAwesomeIcon icon={faPause} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />:<FontAwesomeIcon icon={faPlay} size="sm" style={{color: "rgba(0, 128, 255, 0.866)",}} />}
                    </Button>}
                    
                  </HStack>
                    <RadioGroup  colorScheme='blue'>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio value="ஆம்"  colorScheme='blue'>ஆம்</Radio>
                        <Radio value="இல்லை"  colorScheme='blue'>இல்லை</Radio>
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

import React from 'react'
import vidbg from '../../assets/TestAMenuBg.mp4'
import { Box, Vstack, HStack,Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navcard = (props) => {
  return (
    <div style={{width:'100%'}}>
      <Link to={`/${props.linker}`}>
        <Box bgColor={props.bColor} textAlign='center'  transition='0.3s' _hover={{bgColor:props.hColor}} color={props.tColor} borderColor={props.tColor} borderRadius='20px' borderWidth='2px' p={4}>
          <Heading size='lg'>{props.text}</Heading>
        </Box>
      </Link>
    </div>
  )
}

export default Navcard

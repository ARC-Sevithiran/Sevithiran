import React from 'react'
import { Box, RadioGroup, Radio, Text,HStack, Heading } from '@chakra-ui/react'
import { useState } from 'react'

const FbQuestion = (props) => {

    const [fbans, setfbans] = useState("")

  return (
    <div>
      <Box bgColor='rgba(0, 158, 95, 0.774)' p={4} textAlign='center' margin='2' borderRadius='30px' width='100%'>
        <Heading size='md'>{props.obj}</Heading>
        <RadioGroup value={fbans} onChange={setfbans}>
            <HStack justifyContent='space-evenly'>
                <Radio colorScheme='green' value='4'>4</Radio>
                <Radio colorScheme='green' value='2'>2</Radio>
                <Radio colorScheme='green' value='0'>0</Radio>
            </HStack>
        </RadioGroup>
      </Box>
    </div>
  )
}

export default FbQuestion

import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import userContext from '../../context/userContext'
import { getDocs, query, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import Navbar from '../../components/Navbar/Navbar'
import { Heading, Accordion, AccordionItem,   AccordionButton, AccordionPanel,  AccordionIcon, HStack, Text, Image  } from '@chakra-ui/react'
import happykid from '../../assets/happy_kid.png'
import sadkid from '../../assets/sad_kid.png'
import './TestResults.css'

const TestResults = () => {
  const {uid} = useContext(userContext)
  const [data, setData] = useState([]);
  
  useEffect(() =>{
    const getTrDoc = async() =>{
      const TestData= await getDocs(collection(db, `users/${uid}/TestADetails`))
      const newData = TestData.docs.map((obj)=>(obj.data()))
      setData(newData);
      console.log(data)
      console.log(TestData.docs[1].data().TimeStamp['seconds'])
    }
    getTrDoc()
    
  },[uid])

  const dateConverter = (TS) =>
  {
      const milliseconds = TS['seconds'] * 1000 + Math.floor(TS['nanoseconds'] / 1e6);
      const date = new Date(milliseconds); 
      const formattedDateTime = date.toLocaleString('en-UK');
      return formattedDateTime;
  }

    
  return (
    <div className='tr-out-container'>
      <div className="tr-main-container">
        <Navbar/>
        <div className="tr-content-container">
          <Heading textAlign='center' size='2xl' mt='0.7%'>Test Results</Heading>
          {data.length>0 ?
           <div className='tr-acc-container'>
            <Accordion allowToggle allowMultiple={true}>
              {data.map((test,index)=>{
                if(test.Score < test.PassScore){                  
                  return(
                  <AccordionItem key={index} width='100%' bgColor='rgb(255, 189, 189)' color='rgb(255, 68, 68)' borderRadius='20px' border='3px solid' shadow='md' mt='2%'>
                    <AccordionButton borderRadius='20px'>
                      <div className="tr-testButton">
                        <Heading size='xl' fontWeight='medium'>{test.TestType}</Heading>
                        <Heading size='md' fontWeight='medium'>{dateConverter(test.TimeStamp)}</Heading>
                        <AccordionIcon />
                      </div>
                    </AccordionButton>
                    <AccordionPanel borderTop="1px solid ">
                      <div className='tr-test-container'>
                        <div className="tr-testDetails">
                          <Heading size='lg' fontWeight='medium' >Test Name: {test.TestName}</Heading>
                          <Heading size='lg' fontWeight='medium'>Score Obtained: {test.Score}/{test.TotalScore}</Heading>
                          <Heading size='lg' fontWeight='medium'>Pass Score: {test.PassScore}</Heading>
                          <Heading size='lg' fontWeight='bold' border='1px solid' borderRadius='10px' p='2%' alignSelf='center'>Failed❌</Heading>
                        </div>
                        <Image src={sadkid} width='14%'/>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                  )
                }
                else{
                  return(
                    <AccordionItem key={index} width='100%' bgColor='rgb(210, 255, 189)' color='rgb(61, 192, 0)' borderRadius='20px' border='3px solid' shadow='md' mt='2%'>
                      <AccordionButton borderRadius='20px'>
                        <div className="tr-testButton">
                          <Heading size='xl' fontWeight='medium'>{test.TestType}</Heading>
                          <Heading size='md' fontWeight='medium'>{dateConverter(test.TimeStamp)}</Heading>
                          <AccordionIcon />
                        </div>
                      </AccordionButton>
                      <AccordionPanel borderTop="1px solid ">
                        <div className='tr-test-container'>
                          <div className="tr-testDetails">
                            <Heading size='lg' fontWeight='medium' >Test Name: {test.TestName}</Heading>
                            <Heading size='lg' fontWeight='medium'>Score Obtained: {test.Score}/{test.TotalScore}</Heading>
                            <Heading size='lg' fontWeight='medium'>Pass Score: {test.PassScore}</Heading>
                            <Heading size='lg' fontWeight='bold' border='1px solid' borderRadius='10px' p='2%' alignSelf='center'>Passed✅</Heading>
                          </div>
                          <Image src={happykid} width='14%'/>
                        </div>
                      </AccordionPanel>
                    </AccordionItem>
                    )
                }
              })}
            </Accordion>
            </div>:<p>Loading</p>
          }
        </div>
      </div>  
    </div>
  )
}

export default TestResults

import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
import QuestionTab from './QuestionTab'
import './TestBMainbar.css'
import { useContext } from 'react'
import { PointsContext } from '../../context/BpointsContext'
import SoundIndicator from './SoundIndicator';

const TestBMainbar = (props) => {

  const {score, soundBox} = useContext(PointsContext)

  return (
    <>
      <div className="tbm-main-container">
        
          <Tabs variant='soft-rounded' colorScheme='green' size='lg' height='100%'>   
            <div className="tbm-content-container">   
              <div className="tbm-QuestionSpace">
              <TabPanels width="100%" height="100%">
              {
                props.data.map((obj) => (
                  <TabPanel width="100%" height="100%"><QuestionTab data={obj}/></TabPanel>
                ))
              }
              </TabPanels>
              </div>
              <div className="tbm-right-container">
                <div className="tbm-point-box">
                  <Heading size='md' fontWeight='medium'>Your Score: {score}</Heading>
                </div>
                <SoundIndicator colourBox = {soundBox}/>
                <div className="tbm-QuestionNav">
                  <TabList flexWrap='wrap' gap='10px'>
                    {
                      props.data.map((obj) => (
                        <Tab borderRadius='20%' fontSize='2xl'>{obj.id}</Tab>
                      ))
                    }
                  </TabList>
                </div>
                
              </div>
              
            </div>
          </Tabs> 
        
      </div>
    </>
  )
}

export default TestBMainbar

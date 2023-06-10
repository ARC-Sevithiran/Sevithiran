import React from 'react'
import { useEffect,useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import QuestionTab from './QuestionTab'
import './TestBMainbar.css'

const TestBMainbar = (props) => {

 
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
          </Tabs> 
        
      </div>
    </>
  )
}

export default TestBMainbar

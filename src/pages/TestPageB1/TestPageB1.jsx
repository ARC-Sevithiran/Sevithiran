import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { Heading,
  Button
 } from '@chakra-ui/react'
import './TestPageB1.css'
import TestBMainbar from '../../components/TestBMainbar/TestBMainbar'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'

const TestPageB1 = () => {

  const location = useLocation()
  let page_head = ''
  let json_getter = '';
  let level = '';

  switch(location.pathname){
    case '/TestB1/Level1':
      page_head='நிலை 1 - காட்சி குறிப்புகளுடன்'
      json_getter='I'
      level='Level_1'
      break;
    case '/TestB1/Level2':
      page_head = 'நிலை 2 - காட்சி குறிப்புகள் இல்லாமல்'
      json_getter='II'
      level='Level_2'
      break;
    case '/TestB1/Level3':
      page_head = 'நிலை 3 - அருகிலுள்ள ஒலிகள்'
      json_getter='III'
      level='Level_3'
      break;
    case '/TestB1/Level4':
      page_head = 'நிலை 4 - தூர ஒலிகள்'
      json_getter='IV'
      level='Level_4'
      break;
    case '/TestB1/Level5':
      page_head = 'நிலை 5 - அமைதியான சூழ்நிலையில்'
      json_getter='V'
      level='Level_5'
      break;
    case '/TestB1/Level6':
      page_head = 'நிலை 6 - பின்னணி இரைச்சல் முன்னிலையில்'
      json_getter='VI'
      level='Level_6'
      break;
    default:
      page_head = ''
      json_getter=''
      level=''
      break;
  }

  const [tableData,settableData] = useState({Data:{
    length:0
  }})
  useEffect(()=>{
    axios
    .get(`db_json/Test2_B_1/Test2_${json_getter}_B_1.json`)
    .then(response =>{
      settableData(response.data)
    })   
    .catch(error => {
      console.log('Error fetching data:',error)
    })
  },[json_getter])


  return (
    <>
      <div className='B1-main-container'>
        <Navbar/>
        <div className='B1-content-container'>
          <div className="B1-left-container">
            <LeftSidebar testname="B1"/>
          </div>
          <div className="B1-right-container">
            <div className="B1-heading-container">
              <div className="B1-headings">
                <Heading size='2xl'>செவிவழி வேறுபாடு</Heading>
                <Heading size='xl'>ஒலிகலின் வேறுபாட்டை அறிக</Heading>
                <Heading size='lg'>{page_head}</Heading>
              </div> 
              <div className="B1-head-buttons">
                <Button size="lg" colorScheme='whatsapp'>சோதனை தலைப்பு</Button>
                <Button size="lg" colorScheme='whatsapp'>நிலை தலைப்பு</Button>
              </div>
            </div>
               
            {tableData.Data.length>0 && (<div className="B1-tab-container">
              <TestBMainbar data={tableData.Data}/>
            </div>)}       
          </div>
        </div>
      </div>
      
    </>
  )
}

export default TestPageB1

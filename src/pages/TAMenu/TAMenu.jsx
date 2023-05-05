import React from 'react'
import vidbg from '../../assets/TestAMenuBg.mp4'
import Navbar from '../../components/Navbar/Navbar'
import Navcard from '../../components/NavCardNew/Navcard'
import { HStack, Heading } from '@chakra-ui/react'
import './TAMenu.css'

const TAMenu = () => {
  return (
    <div className='TAM'>
      <div className="TAM-main-container">
          <video className='TAM-vid' autoPlay loop muted>
            <source src={vidbg} type='video/mp4' />
          </video>
        <div className="TAM-menu">
          <div className="TAM-header">
            <div className="header-container">
              <Heading size='3xl' color='rgb(255, 86, 86)' lineHeight='110%'>உரத்த சுற்றுச்சூழல் ஒலிகள்</Heading> 
            </div>            
          </div>
          <div className="TAM-options">
            <div className="option-header">
              <Heading size='xl' color='rgb(255, 70, 86)' lineHeight='110%'>ஒரு சோதனையைத் தேர்ந்தெடுக்கவும் :</Heading>
            </div>
            <>
              <HStack width='100%'>
                <Navcard linker='TestA1/Level1' text='உரத்த சுற்றுச்சூழல் ஒலிகள்' bColor='rgba(205, 238, 255, 1)' hColor='rgba(147, 214, 247, 1)' tColor='rgba(29, 156, 203, 1)' />
                <Navcard linker='TestA2/Level1' text='இசை' bColor='rgba(147, 247, 209, 1)' hColor='rgba(77, 254, 186, 1)' tColor='rgba(0, 202, 125, 1)' />
              </HStack>
            </>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TAMenu

import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { VStack, Heading, Text } from '@chakra-ui/react'
import Navcard from '../../components/NavCardNew/Navcard'
import vidbg from '../../assets/testA1MenuVid.mp4'
import './Home.css'

const Home = () => {
  return (
    <div className='home-ext-container'>     
      <div className="home-container">
          <video autoPlay loop muted className="vid-container">
            <source src={vidbg} type='video/mp4'/>
          </video>
          <Navbar/>
        <div className="content-container">
            <div className="home-info">
              <Heading size='4xl' pb='5%'>வரவேற்பு</Heading>
              <Heading size='md' lineHeight='140%' fontWeight='medium'>காது கேளாத குழந்தைகளுக்கு செவித்திறனைக் கண்டறிதல் மற்றும் செவிவழிப் வேறுபாடு ஆகியவற்றைப் பயிற்றுவிப்பதற்கான தமிழ் மொழியில் ஒரு பொருள் மற்றும் துணை தயாரிப்பாக பெற்றோர் பயிற்சி கையேடு. இது NewGen IEDC SRM இன் நிதியுதவியின் கீழ் உருவாக்கப்பட்டது மற்றும் நெறிமுறை எண்ணுடன் பதிவு செய்யப்பட்டுள்ளது.</Heading>
            </div>
            <div className="menu-options">
              <Heading color='rgb(255, 216, 44)' pb='10%' size='2xl'>பட்டியல்</Heading>
              <VStack>
                <Navcard linker='TestA1Menu' text='செவிவழி விழிப்புணர்வு' bColor='rgba(205, 238, 255, .85)' hColor='rgba(147, 214, 247, .85)' tColor='rgba(29, 156, 203, 1)' />
                <Navcard linker='TestA2/Level1' text='செவிவழி வேறுபாடு' bColor='rgba(147, 247, 209, .85)' hColor='rgba(77, 254, 186, .85)' tColor='rgba(0, 192, 115, 1)' />
                <Navcard linker='TestA2/Level1' text='கற்றல்' bColor='rgba(255, 137, 137, 0.822)' hColor='rgba(255, 111, 111, 0.822)' tColor='rgba(230, 0, 0, 0.822)' />
                <Navcard linker='TestA2/Level1' text='அமைப்புகள்' bColor='rgba(255, 241, 177, 0.85)' hColor='rgb(207, 189, 125)' tColor='rgb(255, 200, 0)' />
                <Navcard linker='TestA2/Level1' text='உதவி' bColor='rgba(255, 152, 198, 0.85)' hColor='rgba(255, 118, 180, 0.85)' tColor='rgba(252, 0, 113, 0.999)' />
              </VStack>
            </div>
        </div>  
      </div>     
    </div>
  )
}

export default Home


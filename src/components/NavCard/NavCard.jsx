import React from 'react'
import { Link } from 'react-router-dom'
import {Heading, Box, Image} from '@chakra-ui/react'

import './NavCard.css'

const NavCard = (props) => {
//   return (
//     <div className='outer-box' style={{backgroundImage:`url(${props.bgImage})`}}>
//       <div className='menu-option'>
//         <Heading size='lg'>{props.menuOpt}</Heading>
//       </div>
//       <div className="link-button">
//         <Link to={`/${props.linker}`} className='navi-btn'/>
//       </div>
//     </div>
//   )

return (
<Link to={`/${props.linker}`}>
  <Box borderWidth='1px' borderRadius='lg' backgroundColor={props.bgColor} color={props.textColor} borderColor={props.bgColor} className='outer-box'>  
    <Box >
      <Image src={props.bgImage} alt='image' borderRadius='lg' fit='cover' className='card-obj'/>
    </Box>  
    <Box p='6'>
      <Box>
        <Heading size='lg' fontWeight='bold' >{props.menuOpt}</Heading>
      </Box> 
    </Box>
    </Box>
  </Link>
)
}

export default NavCard

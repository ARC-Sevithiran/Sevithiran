import React from 'react'
import { motion } from 'framer-motion'
import { Heading } from '@chakra-ui/react'
import './SoundIndicator.css'

const SoundIndicator = (props) => {
    const divVariants1 = {
        initial: {
            backgroundColor: '#ffbcbcc5',
            border: '2px solid rgb(255, 140, 134)',
        },
        animate: {
            backgroundColor: props.colourBox === 1?'#64c466': '#ffbcbcc5',     
            border: props.colourBox === 1?'2px solid rgb(123, 255, 187)':'2px solid rgb(255, 140, 134)',       
            transition: {
                duration: .5,
            }
        }
    }
    const divVariants2 = {
        initial: {
            backgroundColor: '#ffbcbcc5',
            border: '2px solid rgb(255, 140, 134)',
        },
        animate: {
            backgroundColor: props.colourBox === 2?'#64c466': '#ffbcbcc5',  
            border: props.colourBox === 2?'2px solid rgb(123, 255, 187)':'2px solid rgb(255, 140, 134)',           
            transition: {
                duration: .5,
            }
        }
    }
  return (
    <div className='SI-main-container'>
        <motion.div
            initial="initial"
            animate="animate"
            variants={divVariants1}
            className='SI-box-1'
        >
            <Heading size='md' fontWeight='medium' noOfLines='1'>ஒலி 1</Heading>
        </motion.div>
        <motion.div
            initial="initial"
            animate="animate"
            variants={divVariants2}
            className='SI-box-2'
        >
            <Heading size='md' fontWeight='medium'  noOfLines='1' >ஒலி 2</Heading>
        </motion.div>
    </div>
  )
}

export default SoundIndicator
  
import React from 'react'
import Questions from './Questions'
import {  Accordion, AccordionItem } from '@chakra-ui/react'



const QuestionList = (props) => {



  // const soundPlay = (src) =>{
  //   const sound = new Howl ({
  //     src,
  //     html5: true
  //   })
  //   sound.play()
  // }


  
  return (
    <div>
      <Accordion allowToggle allowMultiple={false} pt="8%" pb="10%" >
      
        {props.tableData.map((object) =>{
          if(object.id<=props.tableData.length-1){
          return(
          <AccordionItem border='2px' borderRadius='30px' mb='4%' bgColor="rgba(205, 238, 255, 0.822)" color='rgba(29, 156, 203, 0.866)' >
            <Questions key={object.id} data={object} level={props.level} />
          </AccordionItem>
          )}
          else{
            return(<div/>)
          }
        })
        }
      </Accordion>
    </div>
  )
}

export default QuestionList

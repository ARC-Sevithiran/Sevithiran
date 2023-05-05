import React, { useEffect, useState } from 'react'
import QuestionList from './QuestionList'
import './TestMainbar.css'

const TestMainbar = (props) => {
  return (
    <div className='tm-main-container'>
      <QuestionList tableData={props.tableData} level={props.level}/>
    </div>
  )
}

export default TestMainbar




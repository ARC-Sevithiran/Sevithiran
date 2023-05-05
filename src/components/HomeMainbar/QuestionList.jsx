import React from 'react'
import Questions from './Questions'
const QuestionList = ({audioList}) => {
    return (
        <>
            {
                audioList.map((question) => (
                    <Questions question={question} key={question._id}/>
                ))
            }
        </>
    )
}

export default QuestionList

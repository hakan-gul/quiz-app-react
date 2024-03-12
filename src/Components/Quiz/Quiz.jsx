import React, { useState } from 'react'
import './quiz.css'
import {data} from "../../assets/data.js"

const Quiz = () => {
   let [index, setIndex] = useState(0);
   let [question, setQuestion] = useState(data[index]);
   let [trueQuestion, setTrueQuestion] = useState(1);
   let [lock, setLock] = useState(false);

   const checkAns = (ans) =>{
    if (lock === false){
      if(question.ans==ans){
      setTrueQuestion(trueQuestion + 1);
      setLock(true);
      console.log(trueQuestion)
    }
    }
   }
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index + 1} {question.question}</h2>
        <ul>
            <li onClick={()=>{checkAns(1)}}>{question.option1}</li>
            <li onClick={()=>{checkAns(2)}}>{question.option2}</li>
            <li onClick={()=>{checkAns(3)}}>{question.option3}</li>
            <li onClick={()=>{checkAns(4)}}>{question.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
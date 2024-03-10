import React, { useState } from 'react'
import './quiz.css'
import {data} from "../../assets/data.js"
import { useRef } from 'react'

const Quiz = () => {
   let [index, setIndex] = useState(0);
   let [question, setQuestion] = useState(data[index]);
   let [trueQuestion, setTrueQuestion] = useState(1);
   let [lock, setLock] = useState(false);

   let Option1 = useRef(null);
   let Option2 = useRef(null);
   let Option3 = useRef(null);
   let Option4 = useRef(null);

   let option_array = [Option1,Option2,Option3,Option4];

   const checkAns = (ans) =>{
    if (lock === false){
      if(question.ans==ans){
      setTrueQuestion(trueQuestion + 1);
      setLock(true);
      console.log(trueQuestion)
    }else{
      setLock(true);
      option_array[question.ans-1].current.classList.add("correct");
    }
    }
   }
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>{index + 1} {question.question}</h2>
        <ul>
            <li ref={Option1} onClick={()=>{checkAns(1)}}>{question.option1}</li>
            <li ref={Option2} onClick={()=>{checkAns(2)}}>{question.option2}</li>
            <li ref={Option3} onClick={()=>{checkAns(3)}}>{question.option3}</li>
            <li ref={Option4} onClick={()=>{checkAns(4)}}>{question.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
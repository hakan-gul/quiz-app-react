import React, { useRef, useState } from 'react'
import './quiz.css'
import {data} from "../../assets/data.js"

const Quiz = () => {
   let [index, setIndex] = useState(0);
   let [question, setQuestion] = useState(data[index]);
   let [score, setScore] = useState(0);
   let [lock, setLock] = useState(false);

   let Option1 = useRef(null);
   let Option2 = useRef(null);
   let Option3 = useRef(null);
   let Option4 = useRef(null);


   let option_array = [Option1, Option2, Option3, Option4];

   const checkAns = (ans) =>{
    option_array.map((option)=>(
      option.current.classList.remove("correct")
    ))
     option_array[ans-1].current.classList.add("correct");
    if (lock === false){
      if(question.ans==ans){
      setLock(true);
      setScore(prev=> prev + 1);
      

    }else{
      setLock(true);
    }
    }
   }

   const next = () =>{
    if(lock === true){
      setIndex(index++)
      setQuestion(data[index]);
      setLock(false);
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
        <button onClick={next}>Next</button>
        <div className="index">{index +1} of {data.length} questions</div>
    </div>
  )
}

export default Quiz
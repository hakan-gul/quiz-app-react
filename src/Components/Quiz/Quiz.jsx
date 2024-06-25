import React, { useState } from 'react'
import './quiz.css'
import {data} from "../../assets/data.js"
import { useRef } from 'react'

const Quiz = () => {
   let [index, setIndex] = useState(0);
   let [question, setQuestion] = useState(data[index]);
   let [lock, setLock] = useState(false);
   let [score, setScore] = useState(0);
   let [result,setResult] = useState(false)

   let Option1 = useRef(null);
   let Option2 = useRef(null);
   let Option3 = useRef(null);
   let Option4 = useRef(null);

   let option_array = [Option1,Option2,Option3,Option4];

   const checkAns = (ans) =>{
     if (lock === false){
      option_array.map((option)=>(
        option.current.classList.remove("correct")
      ))
       option_array[ans-1].current.classList.add("correct");
       setLock(true);
       if(question.ans==ans){
        setScore(prev=> prev + 1);
    }
    }
   }

  const next = () =>{
    if (lock===true) {
      if(index ===data.length-1){
        setResult(true);
        return 0;
      }
      setIndex(++index)
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>(
        option.current.classList.remove("correct")
      ))
    }
  }

  const reset = ()=>{
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }
  return (
    <>
    <div className='h-screen bg-sky-200'>
      <h1 className='text-5xl text-center pt-20 pb-5'>Depresyon Testi</h1>
      <div className='flex justify-center items-center'>
        <div className='py-16 px-10 rounded-lg lg:w-1/3 md:w-2/3 bg-white mt-4 flex justify-center items-center mx-3'>
          <div className='container'>
              {result?<>
              <div className='flex items-center justify-center'>
                <div className='font-bold text-xl mb-7'>
                  skorunuz %{score*20} tebrikler
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button onClick={reset}>Tekrar Başlat</button><button>Anasayfa</button></div></>:<><h2 className='pb-4'>{index + 1} {question.question}</h2>
              <ul>
                  <li ref={Option1} onClick={()=>{checkAns(1)}}>{question.option1}</li>
                  <li ref={Option2} onClick={()=>{checkAns(2)}}>{question.option2}</li>
                  <li ref={Option3} onClick={()=>{checkAns(3)}}>{question.option3}</li>
                  <li ref={Option4} onClick={()=>{checkAns(4)}}>{question.option4}</li>
              </ul>
              <div className='flex items-center justify-center'>
                <button onClick={next}>Next</button>
              </div>
              <div className="index flex items-center justify-center pt-3">{index+1} / {data.length} Soru</div></>}
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Quiz
import React from 'react'
import './quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>1. Which device is required for the internet connection?</h2>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>Lan Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
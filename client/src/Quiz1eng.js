import React, { useState } from "react";
import "./quizeng.css";
import Catto from './audios/quiz.m4a';
import Qs1 from './audios/English L1 Q1.m4a';
import Qs2 from './audios/English L1 Q2.m4a';
import Qs3 from './audios/English L1 Q3.m4a';
import Qs4 from './audios/English L1 Q4.m4a';
import Qs5 from './audios/English L1 Q5.m4a';
import { Howl} from 'howler';
import engpic from './englishbg.jpg';
import { useEffect, useRef } from 'react';

function Quiz() {
  // Properties
  
  const soundRef = useRef(null);
  const q1ref = useRef(null);
  const q2ref = useRef(null);
  const q3ref = useRef(null);
    const q4ref = useRef(null);
    const q5ref = useRef(null);
  
  useEffect(() => {
    const sound = new Howl({
      src: [Catto],
      autoplay: false,
      preload: true,
    });
    soundRef.current = sound;
    
    const q1Sound = new Howl({
      src: [Qs1],
      autoplay: false,
      preload: true,
    });
    q1ref.current = q1Sound;
    
    const q2Sound = new Howl({
      src: [Qs2],
      autoplay: false,
      preload: true,
    });
    q2ref.current = q2Sound;
    
    const q3Sound = new Howl({
      src: [Qs3],
      autoplay: false,
      preload: true,
    });
    q3ref.current = q3Sound;

    const q4Sound = new Howl({
      src: [Qs4],
      autoplay: false,
      preload: true,
    });
    q4ref.current = q4Sound;

    const q5Sound = new Howl({
      src: [Qs5],
      autoplay: false,
      preload: true,
    });
    q5ref.current = q5Sound;
    return () => {
      soundRef.current.stop();
      q1ref.current.stop();
      q2ref.current.stop();
      q3ref.current.stop();
      q4ref.current.stop();
      q5ref.current.stop();
    };
  }, []);


    const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "A verb is:",
      options: [
        { id: 0, text: "An action word", isCorrect: true },
        { id: 1, text: "A helping word", isCorrect: false },
        { id: 2, text: "A descriptive word", isCorrect: false },
        { id: 3, text: "A past tense word", isCorrect: false },
      ],
    },
    {
      text: "An adjective is:",
      options: [
        { id: 0, text: "An action word", isCorrect: false },
        { id: 1, text: "A proposition", isCorrect: false },
        { id: 2, text: "A descriptive word", isCorrect: true },
        { id: 3, text: "An assertion", isCorrect: false },
      ],
    },
    {
      text: "There are a total of __ alphabets",
      options: [
        { id: 0, text: "40", isCorrect: false },
        { id: 1, text: "36", isCorrect: false },
        { id: 2, text: "22", isCorrect: false },
        { id: 3, text: "26", isCorrect: true },
      ],
    },
    {
      text: "The word ‘butterfly’ is:",
      options: [
        { id: 0, text: "A noun", isCorrect: true },
        { id: 1, text: "An adjective", isCorrect: false },
        { id: 2, text: "A proverb", isCorrect: false },
        { id: 3, text: "A superlative", isCorrect: false },
      ],
    },
    {
      text: "The word ‘Hello’ is:",
      options: [
        { id: 0, text: "A noun", isCorrect: false },
        { id: 1, text: "A verb", isCorrect: true },
        { id: 2, text: "A greeting", isCorrect: true },
        { id: 3, text: "A predicate", isCorrect: false },
      ],
    },
  ];


  const playSound = (sound) => {
    console.log(`Playing ${sound} sound...`);
    if (soundRef.current && soundRef.current.playing()) {
      soundRef.current.stop();
    }
    switch (sound) {
      case "Catto":
        if (soundRef.current) {
           
          soundRef.current.seek(0);
          soundRef.current.play();
        }
        break;
      case "Qs1":
        if (q1ref.current) {
           
          q1ref.current.seek(0);
          q1ref.current.play();
        }
        break;
      case "Qs2":
        if (q2ref.current) {
           
          q2ref.current.seek(0);
          q2ref.current.play();
        }
        break;
      case "Qs3":
        if (q3ref.current) {
           
          q3ref.current.seek(0);
          q3ref.current.play();
        }
        break;
      case "Qs4":
        if (q4ref.current) {
           
          q4ref.current.seek(0);
          q4ref.current.play();
        }
        break;
      case "Qs5":
        if (q5ref.current) {
           
          q5ref.current.seek(0);
          q5ref.current.play();
        }
        break;
      default:
        break;
    }
  };
  
  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }
  
    if (currentQuestion + 1 < questions.length) {
      // Stop the current question's audio
      if (currentQuestion === 0 && q1ref.current) {
        q1ref.current.stop();
      } else if (currentQuestion === 1 && q2ref.current) {
        q2ref.current.stop();
      } else if (currentQuestion === 2 && q3ref.current) {
        q3ref.current.stop();
      } else if (currentQuestion === 3 && q4ref.current) {
        q4ref.current.stop();
      } else if (currentQuestion === 4 && q5ref.current) {
        q5ref.current.stop();
      }
  
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Stop the final question's audio
      if (currentQuestion === 4 && q5ref.current) {
        q5ref.current.stop();
      }
  
      setShowResults(true);
    }
  };
  
  return (
    <div style={{ backgroundImage: `url(${engpic})`, height: "100vh" }}>
      {/* 1. Header  */}
      <h1 id="headingeng">Quiz</h1>
      <button className="btn btn-primary my-btn glowing" id="englishbtn" onClick={() => soundRef.current.play()}><i className="fa-solid fa-volume-high"></i></button><br/>

      

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div id="finalreseng" className="final-results">
          <h1 id="finalreseng">Final Results</h1>
          <h2>
            {score} out of {questions.length} correct 
          </h2>
          <a href="Lesson1eng"><button id="buttonquizeng">Lesson</button></a>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card" id="qscardeng">
            
          {/* Current Question  */}

          <h2 className="question-text">
            Question: {currentQuestion + 1} out of {questions.length}
            <br/>
            
          </h2>
          {/* 2. Add button to play sound */}
          {currentQuestion === 0 && (
        <button id='quizaudioeng' onClick={() => playSound("Qs1")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 1 && (
        <button id='quizaudioeng' onClick={() => playSound("Qs2")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 2 && (
        <button id='quizaudioeng' onClick={() => playSound("Qs3")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 3 && (
        <button id='quizaudioeng' onClick={() => playSound("Qs4")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 4 && (
        <button id='quizaudioeng' onClick={() => playSound("Qs5")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li id="lieng"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );

}

export default Quiz;
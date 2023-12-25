import React, { useState } from "react";
import "./quizeng.css";
import Catto from './audios/quiz.m4a';
import Qs1 from './audios/sci l4 q1.m4a';
import Qs2 from './audios/sci l4 q2.m4a';
import Qs3 from './audios/sci l4 q3.m4a';
import Qs4 from './audios/sci l4 q4.m4a';
import Qs5 from './audios/sci l4 q5.m4a';
import { Howl} from 'howler';
import starrysky from './starrysky.jpg';
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
    };
  }, []);

    const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "A chart describing animals relations to each other with regards to the food cycle is called? ",
      options: [
        { id: 0, text: "Food chart", isCorrect: false },
        { id: 1, text: "Food table", isCorrect: false },
        { id: 2, text: "Food chain", isCorrect: true },
        { id: 3, text: "Food group", isCorrect: false },
      ],
    },
    {
      text: "Humans are __vores",
      options: [
        { id: 0, text: "Carni", isCorrect: false },
        { id: 1, text: "Herbi", isCorrect: false },
        { id: 2, text: "Omni ", isCorrect: true },
      ],
    },
    {
      text: "What category of consumer do bears belong to?",
      options: [
        { id: 0, text: "Carnivores", isCorrect: false },
        { id: 1, text: "Herbivores", isCorrect: false },
        { id: 2, text: "Omnivores", isCorrect: true },
      ],
    },
    {
      text: "What do you call a place where animals of a certain type reside?",
      options: [
        { id: 0, text: "Home", isCorrect: false },
        { id: 1, text: "Habitat", isCorrect: true },
        { id: 2, text: "Gynea", isCorrect: false },
        { id: 3, text: "Race", isCorrect: false },
      ],
    },
    {
      text: "Cats species is called",
      options: [
        { id: 0, text: "Lupine", isCorrect: false },
        { id: 1, text: "Elephant", isCorrect: false },
        { id: 2, text: "Feline", isCorrect: true },
        { id: 3, text: "Carnivore", isCorrect: false },
      ],
    },
    
  ];

  
  const playSound = (sound) => {
    console.log(`Playing ${sound} sound...`);
    switch (sound) {
      case 'Catto':
        soundRef.current.play();
        break;
      case 'Qs1':
        q1ref.current.play();
        break;
      case 'Qs2':
        q2ref.current.play();
        break;
        case 'Qs3':
        q3ref.current.play();
        break;
        case 'Qs4':
        q4ref.current.play();
        break;
        case 'Qs5':
        q5ref.current.play();
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
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  

  return (
    <div style={{ backgroundImage: `url(${starrysky})`, height: "100vh" ,backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      {/* 1. Header  */}
      <h1 id="headingsci">Quiz</h1>
      <button className="btn btn-primary my-btn glowing" id="englishbtn" onClick={() => soundRef.current.play()}><i className="fa-solid fa-volume-high"></i></button><br/>

      

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div id="finalressci" className="final-results">
          <h1 id="finalressci">Final Results</h1>
          <h2>
            {score} out of {questions.length} correct 
          </h2>
          <a href="Lesson3sci"><button id="buttonquizsci">Lesson</button></a>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card" id="qscardsci">
            
          {/* Current Question  */}

          <h2 className="question-text">
            Question: {currentQuestion + 1} out of {questions.length}
            <br/>
            
          </h2>
          {/* 2. Add button to play sound */}
      {currentQuestion === 0 && (
        <button id='quizaudiosci' onClick={() => playSound("Qs1")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 1 && (
        <button id='quizaudiosci' onClick={() => playSound("Qs2")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 2 && (
        <button id='quizaudiosci' onClick={() => playSound("Qs3")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 3 && (
        <button id='quizaudiosci' onClick={() => playSound("Qs4")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
      {currentQuestion === 4 && (
        <button id='quizaudiosci' onClick={() => playSound("Qs5")}><i class="fas fa-circle-question fa-2x"></i>
</button>
      )}
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li id="lisci"
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
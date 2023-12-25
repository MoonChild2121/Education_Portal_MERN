import React, { useEffect, useRef,useState  } from 'react';
import abc from './abc.png';
import math from './math.png';
import science from './science.png';
import './Subjectscss.css';
import './Style.css';
import { ProgressBar } from 'react-bootstrap';
import subjectMainvn from './audios/subjects tutorial.m4a';
import { Howl } from 'howler';
import axios from 'axios';
import jwt_decode from "jwt-decode";


function Subjects() {
  const soundRef = useRef(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [listOfUsers, setListOfUsers] = useState([]);
  const [token,setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({}); // the current user logged in
  const [subjectsProgess, setSubjectsProgress] = useState([0,0,0]);

  useEffect(() => {
    axios.get("http://localhost:3001/getUser").then((response) => {
      setListOfUsers(response.data);
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        const decodedToken = jwt_decode(storedToken);
        const { name: decodedName, password: decodedPassword } = decodedToken;
        setName(decodedName);
        setPassword(decodedPassword);
  
        // Filter out the current user directly from the response data
        const currentUser = response.data.find(
          (user) => user.name === decodedName && user.password === decodedPassword
        );
        setCurrentUser(currentUser);
      }
    });
  }, []);

  // set current user

  useEffect(() => {
    listOfUsers.map(user => {
      if (user.name === name && user.password === password) {
        setCurrentUser(user);
      }
    });
    console.log("current user: ", currentUser);
  }, [listOfUsers]);


  useEffect(() => {
    const sound = new Howl({
      src: [subjectMainvn],
      autoplay: false,
      preload: true,
    });

    soundRef.current = sound;

    return () => {
      soundRef.current.stop();
    };
  }, []);

  // get progess of each subject and store in subjectsProgress
  useEffect(() => {
    let engProgress = 0;
    let mathsProgress = 0;
    let scienceProgress = 0;
  
    if (currentUser.LessonsEnglish) {
      const totalEnglishLessons = currentUser.LessonsEnglish.length * 4;
      engProgress = (currentUser.LessonsEnglish.reduce((acc, lesson) => acc + lesson.state, 0) * 100) / totalEnglishLessons;
      mathsProgress = (currentUser.LessonsMaths.reduce((acc, lesson) => acc + lesson.state, 0) * 100) / totalEnglishLessons;
      scienceProgress = (currentUser.LessonsScience.reduce((acc, lesson) => acc + lesson.state, 0) * 100) / totalEnglishLessons;
  
      setSubjectsProgress([engProgress, mathsProgress, scienceProgress]);
    }
  }, [currentUser]);

  return (
    <div>
      <section className="bg overflow-hidden">
        <h1>Subjects</h1>
        <button className="btn btn-primary" id="subjectButton" onClick={() => soundRef.current.play()}>
          <i className="fa-solid fa-volume-high"></i>
        </button>
        <br />
        <div className="bg d-flex justify-content-between align-items-start flex-wrap">
          {/* Render English Progress */}
          <div className="bg col-md-4 mb-3">
            <div className="bg subject-card">
              <a href="/English"><img src={abc} alt="english" /></a>
              <p>English</p>
              {currentUser && (
                <div key={currentUser.id}>
                  <ProgressBar
                    now={subjectsProgess[0]}
                    label={`${subjectsProgess[0]}%`}
                    animated
                    variant="success"
                    style={{ width: 'auto', height: 20 }}
                    aria-valuenow={subjectsProgess[0]}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Render Maths Progress */}
          <div className="bg col-md-4 mb-3">
            <div className="bg subject-card">
              <a href="/Maths"><img src={math} alt="maths" /></a>
              <p>Mathematics</p>
              {currentUser && (
                <div key={currentUser.id}>
                  <ProgressBar
                    now={subjectsProgess[1]}
                    label={`${subjectsProgess[1]}%`}
                    animated
                    variant="success"
                    style={{ width: 'auto', height: 20 }}
                    aria-valuenow={subjectsProgess[1]}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Render Science Progress */}
          <div className="bg col-md-4 mb-3">
            <div className="bg subject-card">
              <a href="/Science"><img src={science} alt="science" /></a>
              <p>Science</p>
              {currentUser && (
                <div key={currentUser.id}>
                  <ProgressBar
                    now={subjectsProgess[2]}
                    label={`${subjectsProgess[2]}%`}
                    animated
                    variant="success"
                    style={{ width: 'auto', height: 20 }}
                    aria-valuenow={subjectsProgess[2]}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subjects;


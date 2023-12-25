import React,{useState} from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import vid from './vidplay.png';
import quiz from './quizpic.png';
import read from './read.png';
import './LessonStyle.css';
import { Howl } from 'howler';
import { useEffect, useRef } from 'react'; 
import Lessonvn from './audios/lesson 3 button tutorial.m4a';
import './Style.css';

function Lesson2eng() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [listOfUsers, setListOfUsers] = useState([]);
    const [token,setToken] = useState('');
  
    useEffect(() => { 
      // get the list of users from the database
      axios.get("http://localhost:3001/getUser").then((response) => {
        setListOfUsers(response.data);
      });
    }, []); 
  
    useEffect(() => {
      // check if the token is stored in local storage
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        // decode the token to get the username
        const decodedToken = jwt_decode(storedToken);
        setName(decodedToken.name);
        setPassword(decodedToken.password);
        setToken(storedToken);
      }
    }, []);
  
    const incUserEnglish = (id) => {
      axios.post("http://localhost:3001/incUserEnglish", {
        name: name,
        password: password,
        id: id
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if (response.data === "User not found") {
          console.log("User not found");
        } else {
          // update the progressinEnglish state of the user
          const updatedUsers = listOfUsers.map(user => {
            if (user.name === name && user.password === password) {
              if (user.LessonsEnglish[id - 1].state == 1) {
                // lesson already completed
                return { ...user, LessonsEnglish: user.LessonsEnglish };
              }else{
                // lesson not completed
                return {
                  ...user,
                  LessonsEnglish: user.LessonsEnglish.map(lesson => {
                    if (lesson.id === id) {
                      return { ...lesson, state: 1 };
                    }
                    return lesson;
                  })
                };
              }
            }
            setListOfUsers(updatedUsers);
            return user;
          });}
      });
    };


    const soundRef = useRef(null);
      
        useEffect(() => {
          const sound = new Howl({
            src: [Lessonvn],
            autoplay: false,
            preload: true,
          });
      
          soundRef.current = sound;
      
          return () => {
            soundRef.current.stop();
          };
        }, []);
    return (
        <div>
            <section id="pc">
    <div  className="container">
    <a href='./Subjects'><button className='btn btn-primary homebtn' ><i class="fa-solid fa-house"></i></button></a>
        <div  className="row justify-content-center gapsectionsecond">
            <div  className="col-lg-7 text-center">
                <div  className="title-big">
                    <h1 id='lesson1heading'>Lesson 2</h1>
                    <button  className="btn btn-primary my-btn glowing" id="lessonbutton" onClick={() => soundRef.current.play()}><i class="fa-solid fa-volume-high"></i></button><br/>
                </div>
            </div>
        </div>
        <div  className="row"> 
            <div  className="col-lg-4 pb-5 pb-lg-0">
            <a href='https://www.youtube.com/watch?v=BgcokHqAXUk '  target="_blank">       
                <div  className="wrap-price float-left">
                <div  className="price-innerdetail text-center float-left">
                <   img src={vid} alt="vid" /> 
                </div>
                </div>
            </a>
            </div>
            
            <div  className="col-lg-4 pb-5 pb-lg-0">
            <a href='https://drive.google.com/drive/folders/1-53Q5E9SO3CNdy3DmEmjj7yWcuuAuUJe'  target="_blank">  {/* Link to reading */}
                <div  className="wrap-price float-left">
                <div  className="price-innerdetail text-center float-left">
                <   img src={read} alt="read" /> 
                </div>
                </div>
            </a>
            </div>
            <div  className="col-lg-4 pb-5 pb-lg-0">
            <a href='./Quiz2eng' onClick={()=>incUserEnglish(2)}> {/* Link to quiz */}
                <div  className="wrap-price float-left">
                <div  className="price-innerdetail text-center float-left">
                <   img src={quiz} alt="quiz" /> 
                </div>
                </div>
            </a>
            </div>
                </div>
            </div>
</section>
        </div>
    )

}
export default Lesson2eng;
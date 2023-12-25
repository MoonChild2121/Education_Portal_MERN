import './Logincss.css';
import './Style.css';
import React, { useEffect, useRef,useState} from 'react';
import icon from './icon.png';
import loginvn from './audios/wrong username.m4a';
import helpvn from './audios/website homepage tutorial.m4a';
import { Howl} from 'howler';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import axios from "axios";


function Loginpage() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); 

  const createUser = () => {
    axios.post("http://localhost:3001/createUser", {
      name: name,
      password: password,
      LessonsEnglish:[{ id:1,state:0 },{ id:2,state:0 },{ id:3,state:0},{ id:4,state:0} ],
      LessonsMaths:[{ id:1,state:0 },{ id:2,state:0 },{ id:3,state:0},{ id:4,state:0} ],
      LessonsScience:[{ id:1,state:0 },{ id:2,state:0 },{ id:3,state:0},{ id:4,state:0}]
    }).then((response) => {
      if (response.data.error) {
        // user already exists, display an error message
        alert(response.data.error);
      }
      if(response.data.err){
        alert(response.data.err);
      }
      });
    setListOfUsers([
      ...listOfUsers,
      { name: name, password: password, LessonsEnglish:[{ id:1,state:0 },{ id:2,state:0 },{ id:3,state:0},{ id:4,state:0} ], LessonsMaths:[{ id:1,state:0 },{ id:2,state:0 },{ id:3,state:0},{ id:4,state:0} ], LessonsScience:[{ id:1,state:0 },{ id:2,state:0 },{ id:3,state:0},{ id:4,state:0}]}
    ]);
  };

  //create a function verufy the user and paswword from the database and then proceed others display error on the frontend
 
  const verifyUser = () => {
    axios.post("http://localhost:3001/verifyUser", {
      name: name,
      password: password,
    }).then((response) => {
      if (response.data.error) {
        // Authentication failed or user not found, display an error message
        alert(response.data.error);
        soundRef.current.play();
        setTimeout(() => {
          window.location.reload();
        }, 6100);
      } else {
        // Authentication successful, store the token in the browser's storage
        localStorage.setItem("token", response.data.token);
        // Authentication successful, redirect to the Subjects page
        window.location.href = "./Subjects";
      }
    });
  };
  

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      verifyUser();
    }
  } 

  const soundRef = useRef(null);
  const helpRef = useRef(null);
      
  useEffect(() => {
    const sound = new Howl({
      src: [loginvn],
      autoplay: false,
      preload: true,
    });
    const helpbtn = new Howl({
      src: [helpvn],
      autoplay: false,
      preload: true,
    });
  
    soundRef.current = sound;
    helpRef.current = helpbtn;
  
    return () => {
      soundRef.current.stop();
      helpRef.current.stop();
    };
  }, []);
  

  return (
    <div className='content'>
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={icon}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Sabaq</h4>
            </div>

            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(event) => {setName(event.target.value)}} onKeyPress={handleKeyPress}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='text' onChange={(event) => {setPassword(event.target.value)}} onKeyPress={handleKeyPress}/>


            <div className="text-center pt-1 mb-5 pb-1" >
              <MDBBtn className="mb-4 w-100 border-0" id='signin' onClick={verifyUser}>Sign in</MDBBtn>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <a href="./loginpage">  
              <MDBBtn className='mx-2' id='signup' onClick={createUser}>
                Sign Up
              </MDBBtn></a>
            </div>
          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-black px-3 py-4 p-md-5 mx-md-4">
              <button  className="btn btn-primary my-btn btn-lg" id='firstbutton' onClick={() => helpRef.current.play()}><i class="fa-solid fa-volume-high"></i></button><br/>
              <a href="https://www.youtube.com/watch?v=G2HHxRWiCVM" target="_blank" rel="noreferrer">
            <button  className="btn btn-primary my-btn btn-lg" id='vidbtn'>
                <i  className="fab fa-youtube"></i> 
                </button>
                
                <br/>
                </a>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    <footer class=" text-light text-center gradient-custom-2 ">
  <div class="container p-4 pb-0">
    <section class="mb-4" >
      <h6 style={{marginBottom :"10px", marginRight: "5px"}}>Contact us</h6> 
      <a class="btn btn-outline-light btn-floating m-1" href="https://instagram.com/sabaqwebapp?igshid=NTc4MTIwNjQ2YQ==" role="button" target='_blank'><i class="fab fa-instagram"></i></a>
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/@Sabaq-xg3vj/featured" role="button" target='_blank'><i class="fab fa-youtube"></i></a>
    </section>
  </div>
</footer>
    </div>
  );
}

export default Loginpage;
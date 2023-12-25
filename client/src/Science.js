import React from 'react';
import './Style.css';
import './English.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import subjectvn from './audios/lessons tutorial.m4a';
import { Howl} from 'howler';
import { useEffect, useRef } from 'react';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';
function Science() {
    const soundRef = useRef(null);
        useEffect(() => {
          const sound = new Howl({
            src: [subjectvn],
            autoplay: false,
            preload: true,
          });
      
          soundRef.current = sound;
      
          return () => {
            soundRef.current.stop();
          };
        }, []);
    
        return ( <div>
            <div  className="container">
            <a href='./Subjects'><button className='btn btn-primary homebtn' ><i class="fa-solid fa-house"></i></button></a>

    <div  className="text-center mb-5">
      <h1 id='englishheading'>Science Lessons</h1>
      <button  className="btn btn-primary my-btn glowing" id="englishbtn" onClick={() => soundRef.current.play()}><i class="fa-solid fa-volume-high"></i></button><br/>

    </div>
    <a href='./Lesson1sci'><div className="card mb-3 d-flex align-items-center"><img src={one} id='lessonimg' /> <p id='lessontext'>Lesson 1</p>
    </div></a>
    <a href='./Lesson2sci'><div className="card mb-3 d-flex align-items-center"><img src={two} id='lessonimg' /> <p id='lessontext'>Lesson 2</p>
    </div></a>
    <a href='./Lesson3sci'><div className="card mb-3 d-flex align-items-center"><img src={three} id='lessonimg' /> <p id='lessontext'>Lesson 3</p>
    </div></a>
    <a href='./Lesson4sci'><div className="card mb-3 d-flex align-items-center"><img src={four} id='lessonimg' /> <p id='lessontext'>Lesson 4</p>
    </div></a>
      </div>
             </div> )
}
export default Science;

import React from 'react';
import './animation.css';
import Catto from './audios/catsound.mp3';
import { Howl} from 'howler';
import { useEffect, useRef } from 'react';
function MyComponent() {
    const soundRef = useRef(null);
      
        useEffect(() => {
          const sound = new Howl({
            src: [Catto],
            autoplay: false,
            preload: true,
          });
      
          soundRef.current = sound;
      
          return () => {
            soundRef.current.stop();
          };
        }, []);
  return (
    <div >
      <button  className="btn btn-primary" id="subjectbutton" onClick={() => soundRef.current.play()}><i class="fa-solid fa-volume-high"></i></button><br/>
    </div>
  );
}
export default MyComponent;
import Subjects from './Subjects';
import English from './English';
import Maths from './Maths';
import Science from './Science';
import Lesson1eng from './Lesson1eng'; 
import Lesson2eng from './Lesson2eng';
import Lesson3eng from './Lesson3eng';
import Lesson4eng from './Lesson4eng';
import Lesson1maths from './Lesson1maths';
import Lesson2maths from './Lesson2maths';
import Lesson3maths from './Lesson3maths';
import Lesson4maths from './Lesson4maths';
import Lesson1sci from './Lesson1sci';
import Lesson2sci from './Lesson2sci';
import Lesson3sci from './Lesson3sci';
import Lesson4sci from './Lesson4sci';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Loginpage from './Loginpage';
import Quiz1 from './Quiz1eng';
import Quiz2 from './Quiz2eng';
import Quiz3 from './Quiz3eng';
import Quiz4 from './Quiz4eng';
import Quiz1maths from './Quiz1maths';
import Quiz2maths from './Quiz2maths';
import Quiz3maths from './Quiz3maths';
import Quiz4maths from './Quiz4maths';
import Quiz1sci from './Quiz1sci';
import Quiz2sci from './Quiz2sci';
import Quiz3sci from './Quiz3sci';
import Quiz4sci from './Quiz4sci';
import Checkanim from './checkanim';
// import Progressbar from './progressbar';


function AppRoutes() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Loginpage/>} ></Route>
        <Route path="/Loginpage" element = {<Loginpage/>} ></Route>
        <Route path='/Subjects' element = {<Subjects/>} ></Route>
        <Route path='/English' element = {<English/>} ></Route>
        <Route path='/Science' element = {<Science/>} ></Route>
        <Route path='/Lesson1eng' element = {<Lesson1eng/>} ></Route>
        <Route path='/Lesson2eng' element = {<Lesson2eng/>} ></Route>
        <Route path='/Lesson3eng' element = {<Lesson3eng/>} ></Route>
        <Route path='/Lesson4eng' element = {<Lesson4eng/>} ></Route>
        <Route path='/Maths' element = {<Maths/>} ></Route>
        <Route path='/Lesson1maths' element = {<Lesson1maths/>} ></Route>
        <Route path='/Lesson2maths' element = {<Lesson2maths/>} ></Route>
        <Route path='/Lesson3maths' element = {<Lesson3maths/>} ></Route>
        <Route path='/Lesson4maths' element = {<Lesson4maths/>} ></Route>
        <Route path='/Lesson1sci' element = {<Lesson1sci/>} ></Route>
        <Route path='/Lesson2sci' element = {<Lesson2sci/>} ></Route>
        <Route path='/Lesson3sci' element = {<Lesson3sci/>} ></Route>
        <Route path='/Lesson4sci' element = {<Lesson4sci/>} ></Route>
        <Route path='/checkanim' element = {<Checkanim/>} ></Route>
        <Route path='/Quiz1eng' element = {<Quiz1/>} ></Route>
        <Route path='/Quiz2eng' element = {<Quiz2/>} ></Route>
        <Route path='/Quiz3eng' element = {<Quiz3/>} ></Route>
        <Route path='/Quiz4eng' element = {<Quiz4/>} ></Route>
        <Route path='/Quiz1maths' element = {<Quiz1maths/>} ></Route>
        <Route path='/Quiz2maths' element = {<Quiz2maths/>} ></Route>
        <Route path='/Quiz3maths' element = {<Quiz3maths/>} ></Route>
        <Route path='/Quiz4maths' element = {<Quiz4maths/>} ></Route>
        <Route path='/Quiz1sci' element = {<Quiz1sci/>} ></Route>
        <Route path='/Quiz2sci' element = {<Quiz2sci/>} ></Route>
        <Route path='/Quiz3sci' element = {<Quiz3sci/>} ></Route>
        <Route path='/Quiz4sci' element = {<Quiz4sci/>} ></Route>
        {/* <Route path='/progressbar' element = {<Progressbar/>} ></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default AppRoutes;
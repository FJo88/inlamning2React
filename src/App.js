import Activity from './components/Activity';
import './App.css';
import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import { useState } from 'react';

function App() {
  const [showActivty, setshowActivty] = useState(false);

  return (
    <div className="App">
    <h3>Inlämningsuppgift 2</h3>
    <h1>Activity Application</h1>
    <div className='content'>
        <button className='button' onClick={() => {setshowActivty(!showActivty)
        }}>{showActivty ? "Hide Activity": "Show Activity"}</button>  
        
    </div>
    <div className='radio'>
    <input type="radio" name='participants' value= "0" id="random"/>
      <label htmlFor="random">Random participant(s)</label>
      <input type="radio" name='participants' value= "1" id="part1"/>
      <label htmlFor="part1">1 participant</label>
      <input type="radio" name='participants' value= "2" id='part2' />
      <label htmlFor="part2">2 participants</label>
      <input type="radio" name='participants' value= "4" id='part4' />
      <label htmlFor="part4">4 participants</label>
    </div>
      {showActivty && <Activity/>}
      <footer className='foot'><strong>Copyright Filip J</strong></footer>
    </div>
  );
}

export default App;

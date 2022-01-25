import Activity from './components/Activity';
import './App.css';
import { useState } from 'react';

function App() {
  const [startButton, setstartButton] = useState(false);

  return (
    // Har en startknapp för att starta applikationen. När den klickas på så försvinner den och komponenten renderas.
    // Den första aktiviteten hämtas då.
    <div className="App">
      <h3>Inlämningsuppgift 2</h3>
      <h1>Activity Application</h1>
      <div>
      
       {!startButton ? (<button className='start' onClick={() => {setstartButton(true)
        }}>Start Application</button>) 
        : 
        (<Activity/>)}
      </div>
      <footer className='foot'><strong>Copyright Filip J</strong></footer>
    </div>
  );
}

export default App;

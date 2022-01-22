import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from "./Loading";

export default function Activity() {
let radioButtons = document.querySelectorAll('input[name="participants"]');
    let selectedValue = 0;
    let url = "";
    const [activities, setactivities] = useState({});
    const [clicked, setclicked] = useState(1);
    let [loading, setLoading] = useState(false);
    
    {radioButtons.forEach((button) => {
        if(button.checked){
            selectedValue = button.value;
        }
       return selectedValue;
    })}
   
    (selectedValue != 0 ? url ="http://www.boredapi.com/api/activity?participants="+selectedValue: 
    url ="http://www.boredapi.com/api/activity/")
        
    useEffect(() =>
    {axios.get(url)
        .then(response => setactivities(response.data));
        setTimeout(() =>{
            setLoading(true);
        }, 3500);
        
    },[clicked]
        );

    let handleClick = () => {
      setclicked(clicked+1);
      setLoading(false)
    }
    console.log(selectedValue);
    console.log(clicked);
return (
    <div> 
        <h2>Choose how many participants or do not choose?</h2>
        <div className='radio'>
        <input type="radio" name='participants' value= "0" id="random"/>
        <label htmlFor="random">Reset random participant(s)</label>
        <input type="radio" name='participants' value= "1" id="part1"/>
        <label htmlFor="part1">1 participant</label>
        <input type="radio" name='participants' value= "2" id='part2' />
        <label htmlFor="part2">2 participants</label>
        <input type="radio" name='participants' value= "4" id='part4' />
        <label htmlFor="part4">4 participants</label>
        </div> 
        <div className='act'>
            <button className='button' onClick={handleClick}>New Activity</button>
            <div>
            {loading ? <h3><span>Activity:</span>{activities.activity}</h3>: <Loading/>}
            {loading ? <h3><span>Type:</span> {activities.type}</h3>: <Loading/>}
            {loading ? <h3><span>Participants:</span> {activities.participants}</h3>: <Loading/>}
            </div> 
        </div>
    </div>
  );
    
}

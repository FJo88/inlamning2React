import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from "./Loading";

export default function Activity() {
    // Diverse variabler för komponenten
    let radioButtons = document.querySelectorAll('input[name="participants"]');
    let selectedValue = 0;
    let url = "";
    // Olika state. Ett för att spara datan som hämtas
    // Ett för att kontrollera om knappen är klickad på
    // Och ett för att styra Loading-komponenten 
    const [activities, setactivities] = useState({});
    const [clicked, setclicked] = useState(1);
    let [loading, setLoading] = useState(false);
    // Loopar igenom och kontrollerar om någon radiobutton är itryck. Sätter då selectedValue till input.value (button).
    {radioButtons.forEach((button) => {
        if(button.checked){
            selectedValue = button.value;
        }
       return selectedValue;
    })}
    // Villkoret för hur url:en ska se ut beroende på om någon radiobutton är itryckt eller om den ska väls slumpat
    // antal deltagare
    (selectedValue != 0 ? 
    url ="http://www.boredapi.com/api/activity?participants="+selectedValue: 
    url ="http://www.boredapi.com/api/activity/")
     
    // Hämtar data från url:en. Använder Axios för att spara en .then samt fördelar med felhantering om det skulle uppstå. 
    // Läste en del dokumentation angående fördelar med axios.
    // I denna har jag även lagt en timer- då det tar en stund att hämta data från API:et. Denna timern styr hur länge. 
    // 3.5 sekunder så verkade den kunna hämta nästan alla aktiviteter. 
    // Loading-komponenetn ska visas. När den sätts till true Renderas aktiviteten.
    // useEffecten kontrollerar när clicked-statet förändras
    useEffect(() =>
    {axios.get(url)
        .then(response => setactivities(response.data));
        setTimeout(() =>{
            setLoading(true);
        }, 3500);
        
    },[clicked]
        );
    // Hanterar klicket på den skapade knappen. Sätter även loading-statet till false för att köra loadingkomponenten
    let handleClick = () => {
      setclicked(clicked+1);
      setLoading(false)
    }
  
return (
    // Returnerar en komponent med Radiobuttons där man sätter value efter antalet deltagare.
    // Längre ner skapas resten av komponenten för att visa utskrift av aktivitet samt en knapp för ny aktivitet.
    <div> 
        <h2>Choose how many participants or do not choose?</h2>
        <div className='radio'>
        <input type="radio" name='participants' value= "0" id="random"/>
        <label htmlFor="random">Random number of participants</label>
        <input type="radio" name='participants' value= "1" id="part1"/>
        <label htmlFor="part1">1 participant</label>
        <input type="radio" name='participants' value= "2" id='part2' />
        <label htmlFor="part2">2 participants</label>
        <input type="radio" name='participants' value= "4" id='part4' />
        <label htmlFor="part4">4 participants</label>
        </div> 
        {/* Skapar här utskriften tillsammans med en knapp för att hämta ny aktivitet. Kör även en loading-komponent
        för användarupplevelsen. Så länge loading-statet är false så körs Loading-komponenten */}
        <div className='act'>
            <button className='button' onClick={handleClick}>New Activity</button>
            <div>
            {loading ? <h3>Activity: {activities.activity}</h3>: <Loading/>}         
            {loading ? <h3>Type: {activities.type}</h3>: <Loading/>}                                                       
            {loading ? <h3>Participants: {activities.participants}</h3>: <Loading/>}           
            </div> 
        </div>
    </div>
  );
    
}

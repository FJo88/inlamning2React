import React, { Component } from 'react';
import { useState, useEffect } from 'react';

export default function Activity() {
let radioButtons = document.querySelectorAll('input[name="participants"]');
    let selectedValue = 0;
    let url = "";

    {radioButtons.forEach((button) => {
        if(button.checked){
            selectedValue = button.value;
        }
       return selectedValue;
    })}
    console.log(selectedValue);
   
    (selectedValue != 0 ? url ="http://www.boredapi.com/api/activity?participants="+selectedValue: 
    url ="http://www.boredapi.com/api/activity/")
        
    useEffect(
        () =>{fetch(url)
        .then(response => response.json())
        .then(json => setactivities(json));
    },[]
        );
    const [activities, setactivities] = useState({});
    

      

  return (
    <div> 
        <div className='act'>
            <h3><span>Activity:</span> {activities.activity}</h3>
            <h3><span>Type:</span> {activities.type}</h3>
            <h3><span>Participants:</span> {activities.participants}</h3>
        </div>
    </div>
  );

}

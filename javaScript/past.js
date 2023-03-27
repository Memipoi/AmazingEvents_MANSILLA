import {filtersNameCheck, createCheckBoxes, createCards } from './functions.js'

let eventos
async function getEvent(){
    await fetch('../amazing.json')
    .then(response => response.json())
        .then(data=>{
            eventos = filterPastEvents(data)
            console.log(eventos)
            createCards(eventos);
            createCheckBoxes(eventos); 
    }).catch(err => console.error(err))
}
getEvent()


function filterPastEvents(data){
  let pastEvents=[];
  for(let pastEvent of data.events){
    if(pastEvent.date<data.currentDate){
      pastEvents.push(pastEvent);
  }
}
return pastEvents;
}

const input = document.getElementById("search")
const contenedorCheck = document.getElementById("checkContainer")

input.addEventListener('input',() => filtersNameCheck(eventos))
contenedorCheck.addEventListener('change',() => filtersNameCheck(eventos))



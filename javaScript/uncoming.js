import {filtersNameCheck, createCheckBoxes, createCards } from './functions.js'

let eventos
async function getEvent(){
    await fetch('../amazing.json')
    .then(response => response.json())
        .then(data=>{
            eventos = filterUncomingEvents(data)
            console.log(eventos)
            createCards(eventos);
            createCheckBoxes(eventos); 
    }).catch(err => console.error(err))
}
getEvent()


function filterUncomingEvents(data){
  let uncomingEvents=[];
  for(let uncomingEvent of data.events){
    if(uncomingEvent.date>data.currentDate){
      uncomingEvents.push(uncomingEvent);
  }
}
return uncomingEvents;
}
const input = document.getElementById("search")
const contenedorCheck = document.getElementById("checkContainer")

input.addEventListener('input',() => filtersNameCheck(eventos))
contenedorCheck.addEventListener('change',() => filtersNameCheck(eventos))


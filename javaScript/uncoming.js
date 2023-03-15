
function filterUncomingEvents(){
  let uncomingEvents=[];
  for(uncomingEvent of data.events){
    if(uncomingEvent.date>data.currentDate){
      uncomingEvents.push(uncomingEvent);
  }
}
return uncomingEvents;
}

let uncomingEvents= filterUncomingEvents()

input.addEventListener('input',() => filtersNameCheck(uncomingEvents))
contenedorCheck.addEventListener('change',() => filtersNameCheck(uncomingEvents))
createCards(uncomingEvents);
createCheckBoxes(uncomingEvents);

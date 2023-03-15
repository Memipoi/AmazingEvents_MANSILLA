
function filterPastEvents(){
  let pastEvents=[];
  for(pastEvent of data.events){
    if(pastEvent.date<data.currentDate){
      pastEvents.push(pastEvent);
  }
}
return pastEvents;
}

let pastEvents= filterPastEvents();

input.addEventListener('input',() => filtersNameCheck(pastEvents))
contenedorCheck.addEventListener('change',() => filtersNameCheck(pastEvents))
createCards(pastEvents);
createCheckBoxes(pastEvents);


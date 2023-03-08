
function filterUncomingEvents(){
  let uncomingEvents=[];
  for(uncomingEvent of data.events){
    if(uncomingEvent.date>data.currentDate){
      uncomingEvents.push(uncomingEvent);
  }
}
return uncomingEvents;
}

const cards= document.getElementById('cardsConteiner');
let uncomingEvents= filterUncomingEvents()

for(card of uncomingEvents){
    const cardContent= document.createElement('div');
    cardContent.classList ='col col-lg-4 col-md-6 d-flex justify-content-center';
    cardContent.innerHTML= ` 
    <div class="card colorCard" style="width: 18rem;">
    <img src="${card.image}" class="card-img-top" alt="${card.category}">
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text text-start">${card.description}</p>
      </div>
      <ul class="list-group list-group-flush colorCard">
      <li class="list-group-item colorCard">Category: ${card.category}</li>
      <li class="list-group-item colorCard">Date: ${card.date}</li>
      <li class="list-group-item colorCard">Price: ${card.price}</li>
    </ul>
    <div class="card-footer">
    <a href="../pages/details.html?id=${card._id}" class="btn btn-primary colorButtonCard">Details</a>
    </div> 
  </div>`; 
    cards.appendChild(cardContent);
}
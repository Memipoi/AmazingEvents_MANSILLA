const contenedor = document.getElementById('cardsConteiner')
const contenedorCheck = document.getElementById('checkContainer')
const input = document.querySelector('input')

export function filtersNameCheck(events){
    let firstFilter = filterText(events, input.value)
    let secondFilter = filterCheckBox(firstFilter)
    createCards(secondFilter)
}


//createCards(data.events)
//createCheckBoxes(data.events)

export function createCheckBoxes(array){
    let arraycategory = array.map(e => e.category)
    let setCategory = new Set(arraycategory)
    let arrayChecks = Array.from(setCategory)
    let checkboxes = ''
    arrayChecks.forEach(category => {
        checkboxes += `
        <div class="gap-1 d-flex m-2 form-check form-switch" style="color:white;">
        <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
        <label class="form-check-label" for="${category}">${category}</label>
    </div>
    `
    })
    contenedorCheck.innerHTML = checkboxes
}

export function createCards(array){
    var fragment = document.createDocumentFragment();
    contenedor.innerHTML = ""
    if(array.length == 0){
        const element = document.createElement("div")
        element.innerHTML =`<h2 class="display-4" style="color:white;" >No results found</h2>`
        fragment.appendChild(element) 
        contenedor.appendChild(fragment)
        return
    }
    array.forEach( evento => {
        const cardContent= document.createElement('div');
        cardContent.classList ='col col-lg-4 col-md-6 d-flex justify-content-center';
        cardContent.innerHTML = ` 
        <div class="card colorCard" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top" alt="${evento.category}">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text text-start">${evento.description}</p>
          </div>
          <ul class="list-group list-group-flush colorCard">
          <li class="list-group-item colorCard"><b>Category:</b> ${evento.category}</li>
          <li class="list-group-item colorCard"><b>Date:</b> ${evento.date}</li>
          <li class="list-group-item colorCard"><b>Price:</b> ${evento.price}</li>
        </ul>
        <div class="card-footer">
        <a href="../pages/details.html?id=${evento._id}" class="btn btn-primary colorButtonCard">Details</a>    </div> 
      </div>`
      fragment.appendChild(cardContent)

    })
    contenedor.appendChild(fragment)
}

function filterText(array,text){
    let arrayFilter = array.filter(elemento => elemento.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFilter
}

 function filterCheckBox(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    let arrayFilter = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.category))
    if(arrayChecksChecked.length > 0){
        return arrayFilter
    }
    return array
}





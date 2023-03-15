

input.addEventListener('input',() => filtersNameCheck(data.events))
contenedorCheck.addEventListener('change',() => filtersNameCheck(data.events))
createCards(data.events);
createCheckBoxes(data.events);


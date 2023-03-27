const tbodyEvents = document.getElementById("tabody1");
const tbodyUpcoming = document.getElementById("tabody2");
const tbodyPast = document.getElementById("tabody3");

async function getStats() {
  await fetch("../amazing.json")
    .then((response) => response.json())
    .then((data) => {
      events = data.events;
      date = data.currentDate;
      dibujarTR(tablaEvent(events), tbodyEvents);
      tablaStatistics(events, date, tbodyUpcoming, true);
      tablaStatistics(events, date, tbodyPast, false);

      //let generos = sacarGeneros(animeList)
      //tablaDos(animeList, generos)
    })
    .catch((err) => console.error(err));
}
getStats();

function tablaEvent(array) {
  let eventoMenosAsistencias = array.reduce((prev, current) =>
    (prev.assistance ? prev.assistance : prev.estimate / prev.capacity) * 100 <
    (current.assistance
      ? current.assistance
      : current.estimate / current.capacity) *
      100
      ? prev
      : current
  ).name;
  let eventoMasAsistencias = array.reduce((prev, current) =>
    (prev.assistance ? prev.assistance : prev.estimate / prev.capacity) * 100 >
    (current.assistance
      ? current.assistance
      : current.estimate / current.capacity) *
      100
      ? prev
      : current
  ).name;
  let eventoMayorCapacidad = array.reduce((prev, current) =>
    prev.capacity > current.capacity ? prev : current
  ).name;

  let resultado = {
    eventoMenosAsistencias: eventoMenosAsistencias,
    eventoMasAsistencias: eventoMasAsistencias,
    eventoMayorCapacidad: eventoMayorCapacidad,
  };
  console.log(resultado);
  return resultado;
}


function tablaStatistics(array, date, container, isUpcoming) {
  let events = array.filter(
    (element) => isUpcoming ? Date.parse(element.date) > Date.parse(date) : Date.parse(element.date) < Date.parse(date)
  );
  
  let categorias = sacarCategorias(events);
  categorias.forEach((categoria) => {
    let estimado = 0;
    let ganancias = 0;
    let capacidad = 0;

    events.forEach((e) => {
      if (e.category.toLowerCase() === categoria) {
        estimado += isUpcoming ? e.estimate : e.assistance ;
        capacidad += e.capacity;
        ganancias += e.price * (isUpcoming ? e.estimate : e.assistance);
      }
    });
    let porcentajeAssist = (estimado / capacidad) * 100;
    let resultado = {
      category: categoria,
      revenues: ganancias,
      porcentajeAssist: porcentajeAssist.toFixed(2) + "%",
    };
    dibujarTR(resultado, container);
  });
}

function sacarCategorias(array) {
  return [
    ...new Set(
      array
        .map((item) => item.category)
        .flat()
        .map((item) => item.toLowerCase())
    ),
  ];
}

function dibujarTR(datos, container) {
  let tr = document.createElement("tr");
  for (let clave in datos) {
    console.log(datos[clave]);
    let td = document.createElement("td");
    td.innerText = datos[clave];
    tr.appendChild(td);
  }
  container.appendChild(tr);
}

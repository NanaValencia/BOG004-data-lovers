import { filterPersonajes, ordenamientoDataAZ, ordenamientoDataZA, estadisticaVivos } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//Trayendo Data de rickandmorty.js
let dataResults = data.results
let contenedorPersonajes = document.getElementById("contenedorPersonajes");
console.log(ordenamientoDataAZ(dataResults));
console.log(ordenamientoDataZA(dataResults));
console.log(estadisticaVivos(dataResults));

function listarPersonajes(data) {
    let grupoPersonajes = "";
    data.forEach(element => {
        let personaje = `
            <div class="cards">
                <section class="fotoPersonaje">
                    <img src="${element.image}"/>
                </section>
                <section class="datos">
                    <h3>${element.name}</h3>
                    <h5>${element.status}</h5>
                    <h5>Última vez visto en: ${element.origin.name}</h5>
                    <h5>Lugar de origen: ${element.location.name}</h5>
                </section>
            </div>   
        `
        grupoPersonajes = grupoPersonajes + personaje
    });
    contenedorPersonajes.innerHTML = grupoPersonajes
}
listarPersonajes(dataResults);

// Console.log de filter (data.js)
// console.log(filterPersonajes(data.results, "Alive"));
// console.log(filterPersonajes(data.results, "Dead"));
// console.log(filterPersonajes(data.results, "unknown"));

//Función para capturar evento filter
function filtrarPersonajes() {
    let seleccionLista = document.getElementById("listaDeSeleccion");
    // console.log('selección lista "el nodo" ', seleccionLista);

    document.addEventListener('change', () => {
        // console.log('se hizo el change');
        let personajesFiltrados = seleccionLista.value;
        //Variable que pinta el resultado del filtro en pantalla
        const resultadoFiltrado = filterPersonajes(data.results, personajesFiltrados);
        listarPersonajes(resultadoFiltrado);
    });
}
filtrarPersonajes();

//Boton "portal" para ir a pantalla personajes <3
let btnPersonajes = document.getElementById("btnPersonajes");

function displayPersonajes() {
    document.getElementById("pantallaPersonajes").style.display = "block";
    document.getElementById("home").style.display = "none";
}

btnPersonajes.addEventListener("click", displayPersonajes);
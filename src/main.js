import { filterPersonajes } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//Trayendo Data de rickandmorty.js
let dataResults = data.results
let contenedorPersonajes = document.getElementById("contenedorPersonajes");

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
console.log(filterPersonajes(data.results, "Alive"));
console.log(filterPersonajes(data.results, "Dead"));
console.log(filterPersonajes(data.results, "unknown"));

//Función para capturar evento filter
function filtrarPersonajes() {
    let seleccionLista = document.getElementById("listaDeSeleccion");
    let personajesFiltrados = seleccionLista.value;

    document.addEventListener('change', () => {
        let result = document.querySelectorAll(personajesFiltrados);
        console.log(result);
    })
    document.getElementById("resultadoSeleccion").innerHTML = (personajesFiltrados);
}
filtrarPersonajes();

//Boton "portal" para ir a pantalla personajes
let displayCharacters = document.getElementById("btnPersonajes");
displayCharacters.addEventListener("change", () => {
    document.home.style.display = "block";
    document.pantallaPersonajes.style.display = "none";
});
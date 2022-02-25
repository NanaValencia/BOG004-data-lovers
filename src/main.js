import { filterPersonajes } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

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

//Boton ir a personajes

let characters = document.getElementById("btnPersonajes")
let regresarHome = document.getElementById("btnHome")

function btnPersonajes() {
    document.getElementById("pantallaPersonajes").style.display = "block";
    document.getElementById("home").style.display = "none";
}

function btnHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("pantallaPersonajes").style.display = "none";
}

characters.addEventListener("click", btnPersonajes);
regresarHome.addEventListener("click", btnHome);

console.log(filterPersonajes(data.results, "Alive"));
console.log(filterPersonajes(data.results, "Dead"));
console.log(filterPersonajes(data.results, "unknown"));
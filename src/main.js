import data from './data/rickandmorty/rickandmorty.js';
import {filter} from './data.js';

let dataResults = data.results
let contenedorPersonajes = document.getElementById("contenedorPersonajes");

function listarPersonajes (data) {
let grupoPersonajes = "";
dataResults.forEach(element => {
    let personaje = `
        <div class="cardsPpal">
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
listarPersonajes(dataResults)




//Elementos
let characters = document.getElementById("btnPersonajes")

//Funciones
function btnPersonajes() {
    document.getElementById("home").style.display = "block";
    document.getElementById ("pantallaPersonajes").style.display = "none";
}

//Eventos
characters.addEventListener("click",btnPersonajes)














// let personajes = [];
// fetch('./data/rickandmorty/rickandmorty.json')
// .then(choice => choice.json())
// .then(data => personajes =data.results)
// .then(() => traerPersonje(personajes))
// .catch(error => {
//     throw(error);
// })

// function listaPersonajes(personajes){
//     let btnPersonajes = document.getElementById("btnPersonajes")
// //     btnPersonajes.onclick = listaPersonajes()  
//    //const listaPersonajes = document.getElementById('portalPersonajes');
     
// }





//cómo recorrer un arreglo
    //mostrar uno a uno los elementos del arrreglo en consola
    //imprimir en la sección de personajes cada uno de mis elementos 
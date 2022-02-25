import data from './data/rickandmorty/rickandmorty.js';
// import {filter} from './data.js';

let dataResults = data.results
let contenedorPersonajes = document.getElementById("contenedorPersonajes");

//Elementos
let characters = document.getElementById("btnPersonajes") 
document.getElementById("pantallaPersonajes").style.display = "none";

// let startHome = document.getElementById("btnHome") 
// document.getElementById("home").style.display = "none";

//Funciones
function btnPersonajes() {
    document.getElementById("home").style.display = "none";
    document.getElementById ("pantallaPersonajes").style.display = "block";
}

// function btnHome() {
//     document.getElementById("pantallaPersonajes").style.display = "none";
//     document.getElementById ("home").style.display = "block";
// }

function listarPersonajes (data) {
    let grupoPersonajes = "";
    dataResults.forEach(element => {
        let personaje = `
        <div class="cardPpal">
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
        </div>    
        `
        grupoPersonajes = grupoPersonajes + personaje
    });
    contenedorPersonajes.innerHTML = grupoPersonajes
    }
    listarPersonajes(dataResults)
    
 
//Eventos
characters.addEventListener("click",btnPersonajes)

// startHome.addEventListener("click",btnHome)












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
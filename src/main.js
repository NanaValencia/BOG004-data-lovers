import data from './data/rickandmorty/rickandmorty.js';
import {filter} from './data.js';
console.log (data)

export let personajes = document.getElementById("portalPersonajes");




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
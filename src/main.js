import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let personajes = [];
fetch('./data/rickandmorty/rickandmorty.json')
.then(choice => choice.json())
.then(data => personajes =data.results)
.then(() => traerPersonje(personajes))
.catch(error => {
    throw(error);
})

function listaPersonajes(personajes){
    let btnPersonajes = document.getElementById("btnPersonajes")
    btnPersonajes.onclick = listaPersonajes()  
   //const listaPersonajes = document.getElementById('portalPersonajes');
     
}





//cómo recorrer un arreglo
    //mostrar uno a uno los elementos del arrreglo en consola
    //imprimir en la sección de personajes cada uno de mis elementos 
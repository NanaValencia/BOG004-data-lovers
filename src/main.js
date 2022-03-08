import { filterPersonajes, ordenamientoDataAZ, ordenamientoDataZA, estadisticaVivos, estadisticaMuertos, estadisticaDesconocidos, estadisticaHuman, estadisticaAlien, estadisticaHumanoid } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//Trayendo Data de rickandmorty.js para contenedor personajes
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

//Función para capturar evento filter
function filtrarPersonajes() {
    let seleccionLista = document.getElementById("listaDeSeleccion");
    // console.log('selección lista "el nodo" ', seleccionLista);

    document.addEventListener('change', () => {
        // console.log('se hizo el change');
        let personajesFiltrados = seleccionLista.value;
        //Variable que pinta el resultado del filtro en pantalla
        const resultadoFiltrado = filterPersonajes(dataResults, personajesFiltrados);
        listarPersonajes(resultadoFiltrado);
    });
}
filtrarPersonajes()

// Pintando estadísticas en pantalla curiosidades
function mostrarEstadisticasVivos() {
    let vivos = document.getElementById("resultadoVivos");
    let resultado = estadisticaVivos(dataResults);
    vivos.innerHTML += resultado + '%'
}
mostrarEstadisticasVivos()

function mostrarEstadisticasMuertos() {
    let muertos = document.getElementById("resultadoMuertos");
    let resultado = estadisticaMuertos(dataResults);
    muertos.innerHTML = resultado
}
mostrarEstadisticasMuertos()

function mostrarEstadisticasDesconocidos() {
    let desconocidos = document.getElementById("resultadoDesconocidos");
    let resultado = estadisticaDesconocidos(dataResults);
    desconocidos.innerHTML = resultado
}
mostrarEstadisticasDesconocidos()

function mostrarEstadisticasHumanos() {
    let humanos = document.getElementById("resultadoHumanos");
    let resultado = estadisticaHuman(dataResults);
    humanos.innerHTML = resultado
}
mostrarEstadisticasHumanos()

function mostrarEstadisticasAliens() {
    let aliens = document.getElementById("resultadoAliens");
    let resultado = estadisticaAlien(dataResults);
    aliens.innerHTML = resultado
}
mostrarEstadisticasAliens()

function mostrarEstadisticasHumanoides() {
    let humaniodes = document.getElementById("resultadoHumanoides");
    let resultado = estadisticaHumanoid(dataResults);
    humaniodes.innerHTML = resultado
}
mostrarEstadisticasHumanoides()


//Funión para capturar evento de ordenamiento AZ
function ordenarPersonajesAZ() {
    let btnAZ = document.getElementById("btnAZ").addEventListener('click', function() {
        let ordenador = ordenamientoDataAZ(dataResults, btnAZ);
        listarPersonajes(ordenador);
    });
}
ordenarPersonajesAZ()

//Funión para capturar evento de ordenamiento ZA
function ordenarPersonajesZA() {
    let btnZA = document.getElementById("btnZA").addEventListener('click', function() {
        let ordenador = ordenamientoDataZA(dataResults, btnZA);
        listarPersonajes(ordenador);
    });
}
ordenarPersonajesZA()


//Boton "portal" para ir a pantalla Personajes
let btnPersonajes = document.getElementById("verPersonajes");

function displayPersonajes() {
    document.getElementById("pantallaPersonajes").style.display = "block";
    document.getElementById("home").style.display = "none";
}

btnPersonajes.addEventListener("click", displayPersonajes);

//Botón portal para ir a pantalla Home
let btnHomePersonajes = document.getElementById("btnHomePersonajes");

function backHomePersonajes() {
    document.getElementById("home").style.display = "block";
    document.getElementById("pantallaPersonajes").style.display = "none";
}

btnHomePersonajes.addEventListener('click', backHomePersonajes);

//Boton "portal" para ir a pantalla Curiosidades
let btnCuriosidades = document.getElementById("verCuriosidades");

function displayCuriosidades() {
    document.getElementById("pantallaCuriosidades").style.display = "block";
    document.getElementById("home").style.display = "none";
}

btnCuriosidades.addEventListener("click", displayCuriosidades);

//Botón portal para ir a pantalla home
let btnHomeCuriosidades = document.getElementById("btnHomeCuriosidades");

function backHomeCuriosidades() {
    document.getElementById("home").style.display = "block";
    document.getElementById("pantallaCuriosidades").style.display = "none";
}

btnHomeCuriosidades.addEventListener('click', backHomeCuriosidades);
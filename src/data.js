export const data = () => {
    return 'data';
};

//Función para filtro
export const filterPersonajes = (arrayPersonajes, palabraClave) => {
    const estado = arrayPersonajes.filter(personaje => personaje.status === palabraClave);
    return estado;
};

//Funciones para ordenamiento
export const ordenamientoDataAZ = (arregloPersonajes) => {
    const sortedPersonajes = [...arregloPersonajes];
    return sortedPersonajes.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
    });
};

export const ordenamientoDataZA = (arregloPersonajes) => {
    return ordenamientoDataAZ(arregloPersonajes).reverse()
}

//Funciones para estadísticas
export const estadisticaVivos = (arrayPersonajes) => {
    let listaVivos = [];
    arrayPersonajes.forEach(personaje => {
        if (personaje.status === "Alive") {
            listaVivos.push(personaje);
        }
    });

    let sumaVivos = listaVivos.length
    let promedio = sumaVivos / arrayPersonajes.length * 100;
    let promedioRedondeado = Math.round((promedio) * 100) / 100;
    return promedioRedondeado;
}

export const estadisticaMuertos = (arregloPersonajes) => {
    let listaMuertos = [];
    arregloPersonajes.forEach(personaje => {
        if (personaje.status === "Dead") {
            listaMuertos.push(personaje);
        }
    });
    console.log(listaMuertos);

    let sumaMuertos = listaMuertos.length
    let promedio = sumaMuertos / arregloPersonajes.length * 100;
    let promedioRedondeado = Math.round((promedio) * 100) / 100;
    return promedioRedondeado;
}

export const estadisticaDesconocidos = (arrayPersonajes) => {
    let listaDesconocidos = [];
    arrayPersonajes.forEach(personaje => {
        if (personaje.status === "unknown") {
            listaDesconocidos.push(personaje);
        }
    });
    console.log(listaDesconocidos);

    let sumaDesconocidos = listaDesconocidos.length
    let promedio = sumaDesconocidos / arrayPersonajes.length * 100;
    let promedioRedondeado = Math.round((promedio) * 100) / 100;
    return promedioRedondeado;
}

export const estadisticaHuman = (arrayPersonajes) => {
    let listaHuman = [];
    arrayPersonajes.forEach(personaje => {
        if (personaje.species === "Human") {
            listaHuman.push(personaje);
        }
    });
    console.log(listaHuman);

    let sumaHuman = listaHuman.length
    let promedio = sumaHuman / arrayPersonajes.length * 100;
    let promedioRedondeado = Math.round((promedio) * 100) / 100;
    return promedioRedondeado;
}

export const estadisticaAlien = (arrayPersonajes) => {
    let listaAlien = [];
    arrayPersonajes.forEach(personaje => {
        if (personaje.species === "Alien") {
            listaAlien.push(personaje);
        }
    });
    console.log(listaAlien);

    let sumaAlien = listaAlien.length
    let promedio = sumaAlien / arrayPersonajes.length * 100;
    let promedioRedondeado = Math.round((promedio) * 100) / 100;
    return promedioRedondeado;
}

export const estadisticaHumanoid = (arrayPersonajes) => {
    let listaHumanoid = [];
    arrayPersonajes.forEach(personaje => {
        if (personaje.species === "Humanoid") {
            listaHumanoid.push(personaje);
        }
    });
    console.log(listaHumanoid);

    let sumaHumanoid = listaHumanoid.length
    let promedio = sumaHumanoid / arrayPersonajes.length * 100;
    let promedioRedondeado = Math.round((promedio) * 100) / 100;
    return promedioRedondeado;
}
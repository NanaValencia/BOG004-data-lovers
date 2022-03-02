export const data = () => {
    return 'data';
};

export const filterPersonajes = (arrayPersonajes, palabraClave) => {
    const estado = arrayPersonajes.filter(personaje => personaje.status === palabraClave);
    return estado;
};

export const ordenamientoDataAZ = (arregloPersonajes) => {
    const sortedPersonajes = [...arregloPersonajes];
    return sortedPersonajes.sort((a, b) => {
        return a.name > b.name ? -1 : 1;
    });
};

export const ordenamientoDataZA = (arregloPersonajes) => {
    return ordenamientoDataAZ(arregloPersonajes).reverse()
}

// export const ordenamientoData = (arregloPersonajes, especie) => {
//     const arrayEspecie = arregloPersonajes.filter(personaje => personaje.species === especie);
//     return arrayEspecie;
// };
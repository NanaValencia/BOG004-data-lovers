export const data = () => {
    return 'data';
};

export const filterPersonajes = (arrayPersonajes, palabraClave) => {
    const estado = arrayPersonajes.filter(personaje => personaje.status === palabraClave);
    return estado;
};

// export const ordenamientoData = (arregloPersonajes) => {
//     return arregloPersonajes.sort((a, b) => {
//         return a.name > b.name ? -1 : 1;
//     });
// };

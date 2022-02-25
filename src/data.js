export const data = () => {
    return 'data';
};

export const filterPersonajes = (arrayPersonajes, palabraClave) => {
    const estado = arrayPersonajes.filter(personaje => personaje.status === palabraClave);
    return estado;
};
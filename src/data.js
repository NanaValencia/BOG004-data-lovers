function filtrar() {
    filterPersonajes => (filterPersonajes.length > 20)
    resultadoFiltro.addEventListener("click", btnFilterPersonajes);
}
export const filterPersonajes = (data) => {
    let resultadoFiltro = data.filter(filtrar)

    console.log(resultadoFiltro)
}
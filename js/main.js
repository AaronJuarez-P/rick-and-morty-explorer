let paginaActual = 1;

const botonAnterior = document.getElementById("anterior");

const botonSiguiente = document.getElementById("siguiente");

const textoPagina = document.getElementById("pagina");



function actualizarBotones(data){

    textoPagina.textContent = `
        Página ${paginaActual} de ${data.info.pages}
    `;



    if(data.info.prev === null){

        botonAnterior.style.display = "none";

    } else {

        botonAnterior.style.display = "inline-block";

    }



    if(data.info.next === null){

        botonSiguiente.style.display = "none";

    } else {

        botonSiguiente.style.display = "inline-block";

    }

}



botonSiguiente.addEventListener("click", () => {

    paginaActual++;

    cargarPersonajes(paginaActual);

});



botonAnterior.addEventListener("click", () => {

    paginaActual--;

    cargarPersonajes(paginaActual);

});



cargarPersonajes(paginaActual);
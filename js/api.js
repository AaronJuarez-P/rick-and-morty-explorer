const contenedor = document.getElementById("contenedor-personajes");



async function cargarPersonajes(pagina){

    try{

        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${pagina}`
        );

        const data = await response.json();



        contenedor.innerHTML = "";



        data.results.forEach(personaje => {

            contenedor.innerHTML += `
            
            <article class="card ${personaje.status}">

                <img src="${personaje.image}" alt="${personaje.name}">

                <h2>${personaje.name}</h2>

                <p>Estado: ${personaje.status}</p>

                <p>Especie: ${personaje.species}</p>

                <p>Origen: ${personaje.origin.name}</p>

            </article>
            
            `;

        });



        actualizarBotones(data);

    }

    catch(error){

        console.error("Error al cargar personajes:", error);

    }

}
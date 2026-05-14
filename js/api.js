const contenedor = document.getElementById("contenedor-personajes");

function cargarPersonajes(pagina){

    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)

    .then(response => response.json())

    .then(data => {

        contenedor.innerHTML = "";



        data.results.forEach(personaje => {

            contenedor.innerHTML += `
            
            <article class="card">

                <img src="${personaje.image}" alt="${personaje.name}">

                <h2>${personaje.name}</h2>

                <p>Estado: ${personaje.status}</p>

                <p>Especie: ${personaje.species}</p>

                <p>Origen: ${personaje.origin.name}</p>

            </article>
            
            `;

        });



        actualizarBotones(data);

    });

}
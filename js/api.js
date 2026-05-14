fetch("https://rickandmortyapi.com/api/character")

.then(response => response.json())

.then(data => {

    console.log(data);

    const contenedor = document.getElementById("contenedor-personajes");

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

});
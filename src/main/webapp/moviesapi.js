/*Método para consumir api de Rick and Morty*/

let contenedorPersonajes = document.querySelector(".card-news-container")

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((datos) => {

        datos.results.forEach((elementos) => {

            const contenedorCreado = document.createElement('div')
            contenedorCreado.classList.add("card-news");

            contenedorCreado.innerHTML = `
            <img src="${elementos.image}">
            <div class="card-content">
                        <h3>${elementos.name}</h3>
                        <p>Estado:${elementos.status}</p>
                    </div>                
                `;

            contenedorPersonajes.append(contenedorCreado)

        });

    })
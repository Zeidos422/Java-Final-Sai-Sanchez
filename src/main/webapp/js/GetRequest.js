console.log("Entro a GetRequest");
document.addEventListener("DOMContentLoaded", function () {

    const movieSection = document.getElementById("pelis");
    const movies = [];

    function loadMovieList() {
        console.log("Entro a loadMovieList");
        fetch("/saipochocleraspelis/movies?action=getAll")
            .then(response => response.json())
            .then(data => {
                console.log("data : ", data);
                data.forEach(movie => {
                    console.log("movie : ", movie);
                    movies.push(movie);
                    movieSection.innerHTML += `
                        <tr>
                            <td>${movie.nombre}</td>
                            <td>${movie.descripcion}</td>
                            <td>${movie.genero}</td>
                            <td>${movie.calificacion}</td>
                            <td>${movie.anio}</td>
                        </tr>
                    `;
                });
                // Inicializa DataTables
                $('#pelis').DataTable();
            })
            .catch(error => console.error('Error fetching movies:', error));
    }
    loadMovieList();
});
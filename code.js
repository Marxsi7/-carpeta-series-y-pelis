var container = document.getElementById("grid");

fetch("peliculas.json")
  .then((response) => response.json())
  .then((data) => {
    for (peli of data) {
      container.insertAdjacentHTML(
        "beforeend",
        `<aside class="afiche">
        <a href="charlie.html">
        <img src=${peli.imagen} alt="">
        <h2>${peli.nombre}</h2>
        <p>${peli.sinopsis}</p>
        <p>${peli.duracion}</p>
        </a>
        </aside>`
      );
    }
  });

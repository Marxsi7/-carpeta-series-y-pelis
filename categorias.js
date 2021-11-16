function mostrarAnimacion(){
    fetch("peliculas.json")
    .then(response => response.json())
    .then((data) => {
        var resultado = ``;
        for (i of data){
            if(i.genero=="drama"){
                resultado+=
                `
                <div>
                    <img src="${i.imagen}" width="200px" heigth="250px">
                    <p>${i.nombre}</p>
                </div>
                `
            }
        }
        document.getElementById("grid").innerHTML = resultado
    }) .catch(console.log("que anda"))
};
//document.getElementById("drama").addEventListener("click", mostrarAnimacion)
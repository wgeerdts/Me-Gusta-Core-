
let botonesLike = document.querySelectorAll(".boton-like");

for (let i = 0; i < botonesLike.length; i++) {
    botonesLike[i].addEventListener("click", function () {
        let cantidadLikes = botonesLike[i].closest(".conteo-likes").querySelector(".like").textContent
        cantidadLikes++;
        botonesLike[i].closest(".conteo-likes").querySelector(".like").textContent = cantidadLikes;
    });
}
const imagen = document.querySelector("#imagen");
const atras = document.querySelector("#atras");
const adelante = document.querySelector("#adelante");
const puntosContainer = document.querySelector("#puntos");

const imagenes = [
    "assets/image_1.jpg",
    "assets/image_2.jpeg",
    "assets/image_3.jpeg"
];

let indiceActual = 0;

const actualizarCarrusel = () => {
    imagen.style.opacity = 0;
    setTimeout(() => {
        imagen.src = imagenes[indiceActual];
        imagen.style.opacity = 1;
    }, 300);

    puntosContainer.innerHTML = "";
    imagenes.forEach((_, index) => {
        const punto = document.createElement("span");
        if (index === indiceActual) punto.classList.add("activo");
        puntosContainer.appendChild(punto);
    });

    atras.classList.toggle("desactivado", indiceActual === 0);
    adelante.classList.toggle("desactivado", indiceActual === imagenes.length - 1);
};

adelante.addEventListener("click", () => {
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;
        actualizarCarrusel();
    }
});

atras.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        actualizarCarrusel();
    }
});

actualizarCarrusel();

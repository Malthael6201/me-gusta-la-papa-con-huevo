const botonConsejo = document.getElementById("botonConsejo");
const mensajeConsejo = document.getElementById("mensajeConsejo");

botonConsejo.addEventListener("click", function () {
    mensajeConsejo.textContent = "Consejo: antes de entregar, ejecuta git status y git log --oneline para comprobar tus cambios y tus tres commits.";
});

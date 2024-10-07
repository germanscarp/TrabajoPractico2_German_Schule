// Selecciona los elementoss del DOM
var changeColorBtn = document.getElementById('change-color-btn');
var changeTextBtn = document.getElementById('change-text-btn');
var boxes = document.querySelectorAll('.box');
/**
 * Función para cambiar el color de las cajas.
 */
function changeBoxColors() {
    boxes.forEach(function (box) {
        // revisa el color que esta y lo cambia por el nuevo
        var currentColor = box.style.backgroundColor;
        box.style.backgroundColor = (currentColor === 'lightgray' || currentColor === '') ? 'lightblue' : 'lightgray';
    });
}
/**
 * Función para cambiar el texto de las cajas.
 */
function changeBoxText() {
    boxes.forEach(function (box, index) {
        box.textContent = "Nuevo Texto ".concat(index + 1);
    });
}
// Asignar eventos a los botones
changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);

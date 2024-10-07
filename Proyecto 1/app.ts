// Selecciona los elementoss del DOM
const changeColorBtn = document.getElementById('change-color-btn') as HTMLButtonElement;
const changeTextBtn = document.getElementById('change-text-btn') as HTMLButtonElement;
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

/**
 * Función para cambiar el color de las cajas.
 */
function changeBoxColors(): void {
  boxes.forEach((box) => {
    // revisa el color que esta y lo cambia por el nuevo
    const currentColor = box.style.backgroundColor;
    box.style.backgroundColor = (currentColor === 'lightgray' || currentColor === '') ? 'lightblue' : 'lightgray';
  });
}

/**
 * Función para cambiar el texto de las cajas.
 */
function changeBoxText(): void {
  boxes.forEach((box, index) => {
    box.textContent = `Nuevo Texto ${index + 1}`;
  });
}

// Asignar eventos a los botones
changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);

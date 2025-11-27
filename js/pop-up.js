const evento = document.querySelector(".evento");
const popupBg = document.getElementById("popupBg");
const cerrar = document.getElementById("cerrar");

evento.addEventListener("click", () => {
    popupBg.style.display = "flex";  // aparece centrado
});

cerrar.addEventListener("click", () => {
    popupBg.style.display = "none";  // se oculta
});

// Cerrar al hacer click fuera del popup
popupBg.addEventListener("click", (e) => {
    if (e.target === popupBg) {
        popupBg.style.display = "none";
    }
});
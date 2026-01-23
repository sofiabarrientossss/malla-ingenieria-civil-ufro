const ramos = document.querySelectorAll(".ramo");

ramos.forEach(ramo => {
  ramo.addEventListener("click", () => {
    ramo.classList.toggle("aprobado");
  });
});
const texto = document.getElementById("progreso-texto");
const barra = document.getElementById("progreso-relleno");

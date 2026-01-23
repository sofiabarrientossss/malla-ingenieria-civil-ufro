document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  const texto = document.getElementById("progreso-texto");
  const barra = document.getElementById("progreso-relleno");

  function actualizarProgreso() {
    const total = ramos.length;
    const aprobados = document.querySelectorAll(".ramo.aprobado").length;
    const porcentaje = Math.round((aprobados / total) * 100);

    texto.textContent = `${porcentaje}% completado`;
    barra.style.width = `${porcentaje}%`;
  }

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      ramo.classList.toggle("aprobado");
      actualizarProgreso();
    });
  });

  actualizarProgreso();
});

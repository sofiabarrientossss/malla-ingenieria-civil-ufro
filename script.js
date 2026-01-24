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
// ===== SELECCIONAR RAMOS =====
const ramos = document.querySelectorAll('.ramo');

// ===== CARGAR PROGRESO =====
const progresoGuardado = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

// restaurar estado
ramos.forEach((ramo, index) => {
  if (progresoGuardado.includes(index)) {
    ramo.classList.add('aprobado');
  }

  // click para marcar / desmarcar
  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');
    guardarProgreso();
    actualizarProgreso();
  });
});

// ===== GUARDAR =====
function guardarProgreso() {
  const aprobados = [];
  ramos.forEach((ramo, index) => {
    if (ramo.classList.contains('aprobado')) {
      aprobados.push(index);
    }
  });
  localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
}

// ===== BARRA DE PROGRESO =====
function actualizarProgreso() {
  const total = ramos.length;
  const aprobados = document.querySelectorAll('.ramo.aprobado').length;
  const porcentaje = Math.round((aprobados / total) * 100);

  document.getElementById('progreso-relleno').style.width = porcentaje + '%';
  document.getElementById('progreso-texto').textContent = porcentaje + '% completado';
}

// iniciar barra
actualizarProgreso();

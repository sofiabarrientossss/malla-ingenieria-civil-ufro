document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    ramo.classList.toggle('aprobado');
  });
});

// 1. Seleccionar todos los elementos que queremos observar
const elementos = document.querySelectorAll('.fade-in');

// 2. Crear el observador
const observer = new IntersectionObserver(function(entries) {
  // 3. Por cada elemento observado...
  entries.forEach(function(entry) {
    // 4. Si está visible en pantalla...
    if (entry.isIntersecting) {
      // 5. Añadir la clase 'visible'
      entry.target.classList.add('visible');
    }
  });
});

// 6. Decirle al observador qué elementos vigilar
elementos.forEach(function(elemento) {
  observer.observe(elemento);
});
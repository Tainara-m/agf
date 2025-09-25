const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden'); // Remover a classe hidden!
    }
  });
}, {
  threshold: 0.2 // ativa quando 20% da seção aparecer
});

sections.forEach(section => {
  observer.observe(section);
});

// Détection de la section active au scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section-block');
  const navLinks = document.querySelectorAll('.fixed-nav a');
  
  function updateActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  // Mettre à jour au scroll
  window.addEventListener('scroll', updateActiveLink);
  
  // Mettre à jour au chargement
  updateActiveLink();
  
  // Smooth scroll pour les liens
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Gestion des boxes dépliables
document.addEventListener('DOMContentLoaded', function() {
  const collapsibleBoxes = document.querySelectorAll('.box-collapsible');
  
  collapsibleBoxes.forEach(box => {
    const toggle = box.querySelector('.box-toggle');
    const content = box.querySelector('.box-content');
    
    if (toggle && content) {
      toggle.addEventListener('click', function() {
        box.classList.toggle('expanded');
      });
    }
  });
});
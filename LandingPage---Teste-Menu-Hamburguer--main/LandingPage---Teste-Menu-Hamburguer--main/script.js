document.addEventListener ('DOMContentLoaded', function() {
     // Seleciona o botâo do menu e a lista de navegaçâo
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector ('.nav-list');
    const navLinks = document.querySelectorAll ('.nav-list a');

    // Funçâo para alternar a visibilidade do menu
    function toggleMenu () {
        navList.classList.toggle('active'); //Adiciona/remove a classe 'active'

    }
})
   // Adiciona um ouvinte de evento ao botâo de alternar menu
   if (menuToggle) {
    menuToggle.addEventListener('click, toggleMenu');
   }
    //Fecha o menu quando um link è clicado (ùtil em mobile)
    navLinks.forEach(linl=> {
        link.addEventListener('click', function)() {
            if(navList.classList.contains('active')) {
                navList.classList.remove('active');
        
    }
        
        } 
    }
      // Implentando scroll suave para as âncoras 
      document.querySelectorAll('a[href^="#]'). forEach(anhor=>{
        anchor.addEventListener('click , funcion (e) {}
            e.preventDefault(); // Impede o comportamento padrâo do link

            const targetId= this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posiçâo de rolagem, ajustando para o header fixo
                const headerOffset = document. querySelector('.main-header'). offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Rolagem suave

                    

                })


            }


            
      })
            
        
            
        

   

    

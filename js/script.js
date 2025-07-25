// Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const body = document.body;
        
        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            themeToggle.innerHTML = currentTheme === 'dark-mode' ? 
                '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
            localStorage.setItem('theme', theme);
            
            themeToggle.innerHTML = body.classList.contains('dark-mode') ? 
                '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Scroll to Top Button
        const scrollTopBtn = document.querySelector('.scroll-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Form Submission
        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            form.reset();
        });
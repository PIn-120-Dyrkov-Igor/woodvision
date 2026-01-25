// Плавная прокрутка для навигационных ссылок
document.addEventListener('DOMContentLoaded', function() {
    // Навигация с плавной прокруткой
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Управление вкладками модулей
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Убираем активный класс у всех кнопок
            tabBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Скрываем все вкладки
            tabPanes.forEach(pane => pane.classList.remove('active'));
            // Показываем выбранную вкладку
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Изменение стиля навигации при прокрутке
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Подсветка активного раздела в навигации
    const sections = document.querySelectorAll('section');
    
    function highlightNavLink() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Инициализация активного состояния для навигации
    highlightNavLink();
    
    // Анимация появления элементов при прокрутке
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .flow-step, .tech-item, .demo-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Устанавливаем начальные стили для анимации
    document.querySelectorAll('.feature-card, .flow-step, .tech-item, .demo-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Запускаем один раз при загрузке
    animateOnScroll();
    
    // Консольное сообщение при загрузке
    console.log('Wood Quality Control System website loaded successfully.');
    console.log('Project: Automated wood quality control system with computer vision');
    console.log('Modules: 1. Image Capture | 2. YOLO Detection | 3. Sorting & Visualization');
});
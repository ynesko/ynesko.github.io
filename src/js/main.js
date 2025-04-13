// Инициализация меню
const initMenu = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.main-nav ul');
  
    burger.addEventListener('click', () => {
      navList.classList.toggle('active');
      burger.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  };
  
  // Кнопка "Наверх"
  const initScrollTop = () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
  
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.opacity = window.scrollY > 300 ? '1' : '0';
    });
  
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };
  
  // Генерация карточек команды
  const initTeam = () => {
    const team = [
      { name: "Наталья", role: "Начальник отдела", initial: "Н" },
      { name: "Анастасия", role: "Старший менеджер", initial: "А" },
      { name: "Екатерина", role: "Старший менеджер", initial: "Е" },
      { name: "Евгений", role: "Менеджер", initial: "Е" }
    ];
  
    const teamContainer = document.getElementById('teamContainer');
  
    team.forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'team-card';
      card.setAttribute('data-aos', 'fade-up');
      card.style.animationDelay = `${index * 0.1}s`;
      card.innerHTML = `
        <div class="avatar">${member.initial}</div>
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      `;
      teamContainer.appendChild(card);
    });
  };
  
  // Анимации при скролле
  const initAnimations = () => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
  
      elements.forEach(el => observer.observe(el));
    };
  
    window.addEventListener('load', animateOnScroll);
  };
  
  // Частицы в hero-секции
  const initParticles = () => {
    if (document.getElementById('particles-js')) {
      particlesJS('particles-js', {
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: "#ff2d75" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
          }
        }
      });
    }
  };
  
  // Инициализация всего
  document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initScrollTop();
    initTeam();
    initAnimations();
    initParticles();
  });
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize animations
  initAnimations();
  
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    
    // Close menu when nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });
  }
  
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
    
    // Set theme based on local storage or user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
  
  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
      } else {
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // Project Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Initialize animations for scroll reveal
  function initAnimations() {
    // Fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    fadeElements.forEach(element => {
      fadeObserver.observe(element);
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
          timelineObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    timelineItems.forEach(item => {
      timelineObserver.observe(item);
    });
    
    // Animate education items
    const educationItems = document.querySelectorAll('.education-item');
    
    const educationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
          educationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    educationItems.forEach(item => {
      educationObserver.observe(item);
    });
    
    // Animate certification items
    const certificationItems = document.querySelectorAll('.certification-item');
    
    const certificationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
          certificationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    certificationItems.forEach(item => {
      certificationObserver.observe(item);
    });
    
    // Animate skill items
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
          }, index * 50);
          skillsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    skillItems.forEach(item => {
      item.style.transform = 'translateY(20px)';
      item.style.opacity = '0';
      item.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      skillsObserver.observe(item);
    });
    
    // Animate project cards
    const projectItems = document.querySelectorAll('.project-card');
    
    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
          }, index * 100);
          projectsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    projectItems.forEach(item => {
      item.style.transform = 'translateY(30px)';
      item.style.opacity = '0';
      item.style.transition = 'transform 0.6s ease, opacity 0.6s ease, box-shadow 0.3s ease';
      projectsObserver.observe(item);
    });
    
    // Animate stats
    const statItems = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    
    statItems.forEach(item => {
      statsObserver.observe(item);
    });
  }
  
  // Animate numbers in stats section
  function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000;
    const step = 30;
    let current = 0;
    const increment = target / (duration / step);
    
    const timer = setInterval(() => {
      current += increment;
      
      if (current >= target) {
        element.textContent = target + "+";
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + "+";
      }
    }, step);
  }
  
  // Typed effect for hero subtitle
  const subtitle = document.querySelector('.hero .subtitle');
  if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start the typing effect after a delay
    setTimeout(typeWriter, 1500);
  }
});
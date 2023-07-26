const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

  /* Verificando se a constante existe */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  /* Menu escondido */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  /* Removendo o menu mobile */
  const navLink = document.querySelectorAll(".nav__link");

  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
  }

  navLink.forEach(n => n.addEventListener('click', linkAction))

  /* Mudando o fundo do cabeçalho */
  const bgHeader = () => {
    const header = document.getElementById('header')
    // Quando o scroll é maior que 50 viewport height, adicionamos a classe bg-header à tag header
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
  }

  window.addEventListener('scroll', bgHeader)

  /* ANIMAÇÃO GSAP */
  gsap.from('.home__img-2', 1.2, { opacity: 0, y: 200, delay: .1 })
  gsap.from('.home__img-3', 1.2, { opacity: 0, y: 200, delay: .5 })
  gsap.from('.home__data', 1.2, { opacity: 0, y: -60, delay: 1 })
  gsap.from('.home__bird-1', 1.2, { opacity: 0, x: -80, delay: 1.1 })
  gsap.from('.home__bird-2', 1.2, { opacity: 0, x: 80, delay: 1.2 })
  gsap.from('.home__img-1', 1.2, { opacity: 0, y: 200, delay: 1.2 })
  gsap.from('.home__img-4', 1.2, { opacity: 0, x: 200, delay: 1.3 })
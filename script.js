document.addEventListener("DOMContentLoaded", function () {
  // Parte do botão "Ver mais"
  const btnMore = document.querySelector(".btn-more");
  const hiddenIcons = document.querySelector(".hidden-icons");

  if (btnMore && hiddenIcons) {
    btnMore.addEventListener("click", function () {
      if (hiddenIcons.classList.contains("show")) {
        hiddenIcons.classList.remove("show");
        setTimeout(() => {
          hiddenIcons.style.display = "none";
        }, 500);
        btnMore.innerHTML = '<span class="arrow">▼</span> Ver mais';
      } else {
        hiddenIcons.style.display = "flex";
        setTimeout(() => {
          hiddenIcons.classList.add("show");
        }, 10);
        btnMore.innerHTML = '<span class="arrow">▲</span> Ver menos';
      }
    });
  }

  // Parte do menu mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-menu");

  mobileMenu.innerHTML = `
     <span class="close-menu">✖</span>
  <ul class="mobile-menu-list">
    <li class="mobile-dropdown">
      <a href="#">Destaques</a>
      <ul class="dropdown-menu">
        <li><a href="https://www.senior.com.br/" target="_blank">Reforma Tributária</a></li>
        <li><a href="#">eDocs</a></li>
        <li><a href="#">NFe / NFCe</a></li>
        <li><a href="#">CT-e</a></li>
        <li><a href="#">SPED</a></li>
        <li><a href="#">DIRBI</a></li>
        <li><a href="#">DCTFWEB</a></li>
        <li><a href="#">Simples Nacional</a></li>
        <li><a href="#">FGTS Digital</a></li>
        <li><a href="#">ICMS ST</a></li>
        <li><a href="#">EFD - Reinf</a></li>
        <li><a href="#">DIFAL</a></li>
        <li><a href="#">Bloco K / Portaria 671</a></li>
        <li><a href="#">Congresso Nacional</a></li>
      </ul>
    </li>
    <li class="mobile-dropdown">
      <a href="#">Calendário</a>
      <ul class="dropdown-menu">
        <li><a href="#">ERP XT</a></li>
        <li><a href="#">HCM XT</a></li>
        <li><a href="#">TMS XT</a></li>
        <li><a href="#">eDocs</a></li>
        <li><a href="#">ERP X</a></li>
        <li><a href="#">ERP MEGA XT</a></li>
        <li><a href="#">UAU XT</a></li>
      </ul>
    </li>
    <li class="mobile-dropdown">
      <a href="#">Notícias</a>
      <ul class="dropdown-menu">
        <li><a href="#">Todas as notícias</a></li>
      </ul>
    </li>
    <li class="mobile-dropdown">
      <a href="#">Outros</a>
      <ul class="dropdown-menu">
        <li><a href="#">Opção 1</a></li>
        <li><a href="#">Opção 2</a></li>
        <li><a href="#">Opção 3</a></li>
      </ul>
    </li>
  </ul>
`;
  document.body.appendChild(mobileMenu);
  const closeMenu = mobileMenu.querySelector(".close-menu");

  function resetDropdowns() {
    const dropdowns = mobileMenu.querySelectorAll(".dropdown-menu");
    dropdowns.forEach(menu => {
      menu.classList.remove("open");
      menu.style.maxHeight = "0px";
      menu.style.opacity = "0";
    });
  }

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("show");
    document.body.classList.add("menu-open");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
    resetDropdowns();
  });

  document.addEventListener("click", function (e) {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove("show");
      document.body.classList.remove("menu-open");
      if (window.innerWidth <= 768) {
        // menuToggle.style.display = "block"; // agora controlado por CSS
      }
      resetDropdowns();
    }
  });

  document.querySelectorAll(".mobile-dropdown > a").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;

      if (submenu && submenu.classList.contains("dropdown-menu")) {
        if (submenu.classList.contains("open")) {
          submenu.classList.remove("open");
          submenu.style.maxHeight = "0px";
          submenu.style.opacity = "0";
        } else {
          mobileMenu.querySelectorAll(".dropdown-menu").forEach((menu) => {
            menu.classList.remove("open");
            menu.style.maxHeight = "0px";
            menu.style.opacity = "0";
          });

          submenu.classList.add("open");
          submenu.style.maxHeight = submenu.scrollHeight + "px";
          submenu.style.opacity = "1";
        }
      }
    });
  });

  window.addEventListener("resize", function () {
    const isDesktop = window.innerWidth > 768;
    const desktopMenu = document.querySelector(".menu");

    mobileMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
    resetDropdowns();

    if (desktopMenu) {
      desktopMenu.style.display = isDesktop ? "flex" : "none";
      desktopMenu.classList.remove("show");
    }

    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.style.removeProperty("max-height");
      menu.style.removeProperty("opacity");
      menu.style.removeProperty("display");
    });
  });

  const videosContainer = document.querySelector('.videos');
  const iframes = videosContainer.querySelectorAll('iframe');
  const btnNext = document.querySelector('.carousel-next');
  const btnPrev = document.querySelector('.carousel-prev');

  let currentIndex = 0;
  const visibleVideos = 3;

  function updateCarousel() {
    const offset = -currentIndex * 310;
    videosContainer.style.transform = `translateX(${offset}px)`;
  
    iframes.forEach(iframe => iframe.classList.remove('highlighted'));
    const middleIndex = currentIndex;
    if (iframes[middleIndex]) {
      iframes[middleIndex].classList.add('highlighted');
    }
  }

  btnNext.addEventListener('click', () => {
    if (currentIndex + visibleVideos < iframes.length) {
      currentIndex++;
      updateCarousel();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  updateCarousel();
});

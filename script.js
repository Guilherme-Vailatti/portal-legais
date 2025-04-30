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
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/reforma-tributaria.htm" target="_blank">Reforma Tributária</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/gp/destaque/esocial.htm" target="_blank">eSocial</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/nfe.htm" target="_blank">NFe / NFCe</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/cte.htm" target="_blank">CT-e</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/sped.htm" target="_blank">SPED</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/dirbi.htm" target="_blank">DIRBI</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/gp/destaque/dctfweb.htm" target="_blank">DCTFWEB</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/simples-nacional.htm" target="_blank">Simples Nacional</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/gp/destaque/fgts-digital.htm" target="_blank">FGTS Digital</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/icms-st.htm" target="_blank">ICMS ST</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/efd-reinf.htm" target="_blank">EFD - Reinf</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/difal.htm" target="_blank">DIFAL</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/bloco-k.htm" target="_blank">Bloco K / Portaria 671</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/erp/destaques/congresso-nacional.htm" target="_blank">Congresso Nacional</a></li>
      </ul>
    </li>
    <li class="mobile-dropdown">
      <a href="#">Calendário</a>
      <ul class="dropdown-menu">
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/calendario-de-liberacao/erp.htm" target="_blank">ERP XT</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#calendario-de-liberacao/erp-x.htm" target="_blank">ERP X</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#calendario-de-liberacao/erp-mega-xt.htm" target="_blank">ERP MEGA XT</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#calendario-de-liberacao/uau-xt.htm" target="_blank">UAU XT</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/calendario-de-liberacao/hcm.htm" target="_blank">HCM XT</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/calendario-de-liberacao/tms.htm" target="_blank">TMS XT</a></li>
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#calendario-de-liberacao/edocs.htm" target="_blank">eDocs</a></li>
      </ul>
    </li>
    <li class="mobile-dropdown">
      <a href="#">Notícias</a>
      <ul class="dropdown-menu">
      <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#trabalhista-previdenciario.htm" target="_blank">Previdenciário/Trabalhista</a></li>
      <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#federal.htm" target="_blank">Federal</a></li>
      <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#estadual.htm">Estadual</a></li>
      <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/todas-noticias-exigencias-legais.htm" target="_blank">Todas as notícias</a></li>
      </ul>
    </li>
    <li class="mobile-dropdown">
      <a href="#">Outros</a>
      <ul class="dropdown-menu">
        <li><a href="https://documentacao.senior.com.br/exigenciaslegais/#materias/documentoseletronicos/cidades-homologadas-para-envio-e-recebimento-de-nfse.htm">NFS-e - Cidades Homologadas</a></li>
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
  const thumbs = Array.from(videosContainer.querySelectorAll('.video-thumb'));
  const btnNext = document.querySelector('.carousel-next');
  const btnPrev = document.querySelector('.carousel-prev');
  
  let currentIndex = 0;
  
  function isMobile() {
    return window.innerWidth <= 768;
  }
  
  function updateCarousel() {
    const itemWidth = thumbs[0].offsetWidth;
    const offset = -currentIndex * itemWidth;
    videosContainer.style.transition = 'transform 0.5s ease-in-out';
    videosContainer.style.transform = `translateX(${offset}px)`;
  
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('highlighted', i === currentIndex);
    });
  }
  
  function addClickListener(thumb) {
    const videoId = thumb.dataset.videoId;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    thumb.style.backgroundImage = `url('${thumbnailUrl}')`;
  
    thumb.addEventListener('click', () => {
      if (thumb.classList.contains('playing')) return;
  
      thumb.classList.add('playing');
      thumb.style.backgroundImage = 'none';
      thumb.style.backgroundColor = '#000';
      thumb.innerHTML = '';
  
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&enablejsapi=1`;
      iframe.allowFullscreen = true;
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('loading', 'lazy');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
  
      thumb.appendChild(iframe);
    });
  }
  
  btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbs.length;
    updateCarousel();
  });
  
  btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    updateCarousel();
  });
  
  thumbs.forEach(addClickListener);
  
  window.addEventListener('resize', () => {
    updateCarousel();
  });
  
  updateCarousel();
  
  
});

// MODAL FEEDBACK //

// Abre o modal ao clicar em qualquer botão de feedback
document.querySelectorAll('.btn-feedback').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('feedbackModal').style.display = 'block';
  });
});

// Fecha o modal ao clicar no "X"
document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('feedbackModal').style.display = 'none';
});

// Fecha ao clicar fora da área do modal
window.addEventListener('click', (event) => {
  const modal = document.getElementById('feedbackModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('enviarComentario').addEventListener('click', () => {
  const comentario = document.getElementById('comentario').value.trim();
  const consentimento = document.getElementById('consentimento').checked;

  if (!comentario) {
    alert('Por favor, escreva um comentário.');
    return;
  }

  if (!consentimento) {
    alert('É necessário concordar com a Política de Privacidade.');
    return;
  }

  // Aqui poderia enviar o comentário via fetch() ou integração
  alert('Comentário enviado com sucesso! Obrigado pelo feedback.');

  // Fecha o modal após envio
  document.getElementById('feedbackModal').style.display = 'none';

  // Limpa campos
  document.getElementById('comentario').value = '';
  document.getElementById('nomeEmail').value = '';
  document.getElementById('consentimento').checked = false;
});



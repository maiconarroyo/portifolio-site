document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".main-header");
    let lastScrollTop = 0; // Armazena a última posição de rolagem

    window.addEventListener("scroll", function () {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Rolando para baixo
            header.style.top = "-70px"; // Ajuste o valor conforme a altura do seu cabeçalho
        } else {
            // Rolando para cima
            header.style.top = "0";
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para navegadores compatíveis com back-to-top
    });
})
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".main-header");
    let lastScrollTop = 0; 
    window.addEventListener("scroll", function () {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Rolando para baixo
            header.style.top = "-70px"; 
        } else {
            header.style.top = "0";
        }
        
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    });
})
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a"); // Sélectionne tous les liens de navigation

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien

            const targetUrl = this.getAttribute("href"); // Obtient l'URL de destination
            const content = document.querySelector("main"); // Sélectionne le contenu principal

            if (content) { // Vérifie si le contenu existe
                content.classList.add("fade"); // Ajoute la classe fade

                // Attends la fin de la transition avant de changer la page
                content.addEventListener("transitionend", () => {
                    content.classList.add("hidden"); // Cacher le contenu après la transition
                    window.location = targetUrl; // Change de page
                }, { once: true }); // Écoute l'événement une seule fois
            } else {
                // Si pas de balise <main>, redirige immédiatement
                window.location = targetUrl;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("show"); // Ajoute ou enlève la classe 'show'
    });
});

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
}

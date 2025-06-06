document.addEventListener("DOMContentLoaded", function () {

    // Función para cargar un componente HTML en un elemento específico
    const loadHTML = (url, elementId) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar el recurso: " + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                // Después de cargar el header, llamamos a la función para activar el enlace
                if (elementId === 'header-placeholder') {
                    setActiveLink();
                }
            })
            .catch(error => console.error('Error al cargar el componente:', error));
    };

    loadHTML('../components/header.html', 'header-placeholder');
    loadHTML('../components/footer.html', 'footer-placeholder');

    // Función para marcar el enlace de navegación activo
    const setActiveLink = () => {
        const currentPage = window.location.pathname.split('/').pop();
        const targetPage = currentPage === "" ? "index.html" : currentPage;
        const navLinks = document.querySelectorAll('#navbarNav .nav-link');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === targetPage) {
                link.classList.add('active');
            }
        });
    };
});
class Navbar extends HTMLElement {
    constructor() {
        super()
        let item_active = ["", "", "", ""]
        const pages = ["index", "objetivos", "resultados", "contacto"]

        for (var i = 0; i < pages.length; i++) {
            if (window.location.pathname.includes(pages[i])) item_active[i] = "active"
        }

        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold" href="index.html">
                    <img src="assets/logo_twitter.webp" class="rounded-circle me-2" alt="" width="30" height="30"
                        class="d-inline-block align-text-top">
                    Segovia HistóRica
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link ${item_active[0]}" href="index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link ${item_active[1]}" href="objetivos.html">Objetivos</a></li>
                        <li class="nav-item"><a class="nav-link ${item_active[2]}" href="resultados.html">Resultados</a></li>
                        <li class="nav-item"><a class="nav-link ${item_active[3]}" href="contacto.html">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    }
}

customElements.define("navbar-component", Navbar)

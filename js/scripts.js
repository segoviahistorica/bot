/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const MAX_ITEM_CAROUSEL = 3

function loadCarouselImages() {

    fetch("assets/metadata.json")
        .then(results => results.json())
        .then(data => {

            const keys = Object.keys(data)
            var carousel_inner = document.getElementById("carousel-fototeca")
            var imgs_selected = new Set()

            // Carga de imágenes aleatorias, sin reptir, cada vez que se accede a la web
            while (imgs_selected.size < MAX_ITEM_CAROUSEL) {
                key_id = keys[Math.floor(Math.random() * keys.length)]
                if (!imgs_selected.has(key_id)) {
                    carousel_inner.appendChild(createCarouselItem(key_id, data[key_id], imgs_selected.size))
                    imgs_selected.add(key_id)
                }

            }

        })

    const fechaInicial = new Date('2023-06-01');
    const fechaActual = new Date();
    const diferenciaEnMilisegundos = fechaActual - fechaInicial;
    const diasPasados = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    let media_posts = document.getElementById("number_media_posts")
    media_posts.innerText = diasPasados
}

function createCarouselItem(img_id, img_metadata, iter) {

    let div_carousel_item = document.createElement("div")
    div_carousel_item.classList.add("carousel-item")
    // Si es el primero que se crea tiene que tener la clase "active". [doc de Bootstrap]
    if (iter == 0) div_carousel_item.classList.add("active")

    div_carousel_item.appendChild(createCarouselImage(img_id, img_metadata["Link"]))
    div_carousel_item.appendChild(createCarouselCaption(img_metadata["Autor"], img_metadata["Nombre"]))

    return div_carousel_item
}

function createCarouselCaption(autor, nombre) {
    let h5_autor = document.createElement("h5");
    h5_autor.textContent = autor
    let p_nombre = document.createElement("p")
    p_nombre.textContent = nombre

    let div_carousel_caption = document.createElement("div")
    div_carousel_caption.classList.add("carousel-caption", "d-none", "d-md-block")
    div_carousel_caption.appendChild(h5_autor)
    div_carousel_caption.appendChild(p_nombre)


    return div_carousel_caption
}

function createCarouselImage(img_id, link) {
    let img = document.createElement("img")
    let img_href = document.createElement("a")
    img_href.href = link
    img_href.target = "_blank"
    img.src = "assets/" + img_id + ".png"
    img.classList.add("d-block", "w-100")
    img_href.appendChild(img)

    return img_href
}

window.onload = loadCarouselImages


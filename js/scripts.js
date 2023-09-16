
// Cálculo de las imagenes que lleva publicadas el bot
const first_date = new Date('2023-06-01');
const today_date = new Date();
const diference_ms = today_date - first_date;
const diference_days = Math.floor(diference_ms / (1000 * 60 * 60 * 24));
let media_posts = document.getElementById("number_media_posts")
media_posts.innerText = diference_days

function loadCarouselImages() {

    const MAX_ITEM_CAROUSEL = document.querySelectorAll('.carousel-indicators > button').length

    /* Si se quisiera añadir más imágenes al carousel bastaría con añadir en el html más botones dentro del 
    div con clase .carousel-indicators */

    fetch("assets/metadata.json")
        .then(results => results.json())
        .then(data => {

            const keys = Object.keys(data)
            var carousel_inner = document.getElementsByClassName("carousel-inner")[0]
            var imgs_selected = new Set()

            // Carga de imágenes aleatorias, sin repetir, cada vez que se accede a la web
            while (imgs_selected.size < MAX_ITEM_CAROUSEL) {
                key_id = keys[Math.floor(Math.random() * keys.length)]
                if (!imgs_selected.has(key_id)) {
                    carousel_inner.appendChild(createCarouselItem(key_id, data[key_id], imgs_selected.size))
                    imgs_selected.add(key_id)
                }
            }
        })
}

/** 
 * Crea cada elemento del carousel, incluyendo la imagen con el link a la página de la Fototeca
 * y la descripción con el nombre del autor y el título de la imagen. 
 * @param {String} img_id - ID en la Fototeca
 * @param {Map} img_metadata - Metadatos de la imagen a construir
 * @param {Number} iter - Número de images construidas en el carrousel
*/
function createCarouselItem(img_id, img_metadata, iter) {

    let div_carousel_item = document.createElement("div")
    div_carousel_item.classList.add("carousel-item")

    // Si es el primero que se crea tiene que tener la clase "active". [doc de Bootstrap]
    if (iter == 0) div_carousel_item.classList.add("active")

    div_carousel_item.appendChild(createCarouselImage(img_id, img_metadata["Link"]))
    div_carousel_item.appendChild(createCarouselCaption(img_metadata["Autor"], img_metadata["Nombre"]))

    return div_carousel_item
}

/** 
 * Crea el caption de la imagen con los metadatos recibidos 
 * @param {String} author - Autor de la imagen
 * @param {String} name - Nombre de la imagen
*/
function createCarouselCaption(author, name) {

    let h5_author = document.createElement("h5");
    h5_author.textContent = author
    let p_name = document.createElement("p")
    p_name.textContent = name

    let div_carousel_caption = document.createElement("div")
    div_carousel_caption.classList.add("carousel-caption", "d-none", "d-md-block")
    div_carousel_caption.appendChild(h5_author)
    div_carousel_caption.appendChild(p_name)

    return div_carousel_caption
}

/** 
 * Crea la imagen clickable 
 * @param {String} img_id - ID en la Fototeca
 * @param {String} link - Link permanente a la imagen en la Fototeca
*/
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


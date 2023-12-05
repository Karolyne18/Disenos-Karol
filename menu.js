//Menu-Hamburguesa
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})

// window.addEventListener('click', e=>{
//     if(menu.classList.contains('spread') && e.target != menu && e.target != nav-toggle){

//        menu.classList.toggle("spread")
//  }
// })

// Gallery
const imagenes = document.querySelectorAll('.img-gallery')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLigth = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.logo-img');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLigth.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLigth.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLigth.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}



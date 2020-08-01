// ==============================================================================
// animacion del menu de alimentos
// ==============================================================================
const MostrarRegrezar = (clase1, clase2, clase3, clase4, clasePadre, animacion1, animacion2, animacion3, animacion4) => {
    document.querySelector(`.${clase1}`).style.animationName = `${animacion1}`
    document.querySelector(`.${clase2}`).style.animationName = `${animacion2}`
    document.querySelector(`.${clase3}`).style.animationName = `${animacion3}`
    document.querySelector(`.${clase4}`).style.animationName = `${animacion4}`
    if (clasePadre === `segundaVistaMenuComida`) {
        document.querySelector(`.${clasePadre}`).style.zIndex = `20`
        document.querySelector(`.primeraVistaMenuComida`).style.zIndex = `1`
    } else {
        document.querySelector(`.${clasePadre}`).style.zIndex = `20`
        document.querySelector(`.segundaVistaMenuComida`).style.zIndex = `1`
    }
}
const imgs = document.querySelectorAll(`.contentImgMenuComida__img`)
const contentimgs = document.querySelectorAll(`.contentImgMenuComida`)
const modal = document.querySelector(`.contentModalMenu`)
const fuego = document.querySelectorAll(`.contentFueguito a`)
const imfFuego = document.querySelectorAll(`.contentFueguito a img`)


const agregarYquitarModal = (modal, animacion1, animacion2, terminaEn, opa) => {
    modal.style.animation = `${animacion1} 1s ${terminaEn}`
    document.querySelector(`.modalMenu`).style.animation = `${animacion2} 1s   ${terminaEn}`
    menuStiky.style.opacity = `${opa}`
}

// ==============================================================================
// cambiando el menu styki
// ==============================================================================

const titleMenu = document.querySelector(`.contentMenuDesaparecerMedia h2`)
const bcgtitleMenu = document.querySelector(`.contentMenuDesaparecerMedia`)
const menuStiky = document.querySelector(`.header__contentMenuAndLogo`)
const animate = document.querySelector(`.contenedorDiarioComida`)
let alturaAnimate = animate.offsetTop;
window.addEventListener(`scroll`, (e) => {
    if (scrollY + 100 > alturaAnimate) {
        menuStiky.style.animationName = `aparecerMenuStiky`
    } else {
        menuStiky.style.animationName = ``
    }
})


// ==============================================================================
//              media querys 
// ==============================================================================
const ipad = matchMedia(`screen and (max-width: 768px)`)



const validadion = (ipad) => {
    if (ipad.matches) {

        Layer_1.addEventListener(`click`, e => {
            menuTrasladacion.classList.add(`activo`)
        })
        closedx.addEventListener(`click`, e => {
            menuTrasladacion.classList.remove(`activo`)
        })

        window.addEventListener(`scroll`, (e) => {
            if (scrollY + 350 > alturaAnimate) {
                titleMenu.style.animationName = `desaserMenu`
                bcgtitleMenu.style.backgroundColor = `rgba(0,0,0,0)`
            }
        })



        // validacion del modulo
        fuego.forEach(fueguito => {
            fueguito.removeEventListener(`click`, e => { })
        })
        document.getElementById(`closed`).removeEventListener(`click`, () => { })
        // validacion del modulo



        // validacion de hover 
        contentimgs.forEach(contentimg => {
            contentimg.removeEventListener(`mouseover`, () => {})
            contentimg.removeEventListener(`mouseout`, () => { })
        })
        // validacion de hover 



        // validacion de menu de comida 
        document.querySelector(`.contenedorDiarioComida`).removeEventListener(`click`, e => { })
        // validacion de menu de comida 

    } else {
        Layer_1.removeEventListener(`click`, e => {
            menuTrasladacion.classList.add(`activo`)
        })
        closedx.removeEventListener(`click`, e => {
            menuTrasladacion.classList.remove(`activo`)
        })

        window.removeEventListener(`scroll`, (e) => {
            if (scrollY + 300 > alturaAnimate) {
                titleMenu.style.animationName = `desaserMenu`
                bcgtitleMenu.style.backgroundColor = `rgba(0,0,0,0)`
            }
        })




        // validacion del modulo
        fuego.forEach(fueguito => {
            fueguito.addEventListener(`click`, e => {
                e.preventDefault()
                modal.style.visibility = `visible`
                agregarYquitarModal(modal, `opacitiModal`, `modal`, `forwards`, `0`)
            })
        })
        document.querySelector(`.contentDescriptionModalMenu`).addEventListener(`click`, e => {
            switch (e.target) {
                case document.getElementById(`closed`):
                    agregarYquitarModal(modal, `opacitiModalClosed`, `modalClosed`, ``, `1`)
                    setTimeout(() => {
                        modal.style.visibility = `hidden`
                    }, 1000)
                    break;
                case comprar:
                    document.querySelector(`.hasComprado`).classList.add(`scaleGracias`)
                    
                    
                    setTimeout(() => {
                        document.querySelector(`.hasComprado`).classList.add(`scaleGraciasDevolver`)
                        setTimeout(() => {
                            document.querySelector(`.hasComprado`).classList.remove(`scaleGraciasDevolver`)
                            document.querySelector(`.hasComprado`).classList.remove(`scaleGracias`)

                        }, 700)
                    }, 4000)
                    break;
            
                default:
                    break;
            }

        })
    }
    // validacion del modulo


    // validacion de hover 
    contentimgs.forEach(contentimg => {
        contentimg.addEventListener(`mouseover`, (e) => {
            imgs.forEach(img => {
                img.style.filter = `brightness(.4)`
                contentimg.firstElementChild.style.filter = `brightness(1)`
            })
        })
        contentimg.addEventListener(`mouseout`, (e) => {
            imgs.forEach(img => {
                img.style.filter = `brightness(1)`
            })
        })
    })
    // validacion de hover 



    // validacion de menu de comida 
    document.querySelector(`.contenedorDiarioComida`).addEventListener(`click`, e => {
        switch (e.target) {
            case verMas:
                MostrarRegrezar(`primeraVistaMenuComida__img`, `contentTituloMenu`, `botonVerMenu`, `segundaVistaMenuComida`, `segundaVistaMenuComida`, `transladarDerecha`, `transladarIzquierda`, `transladarMedio`, `aparecerMenu`)
                break;
            case ocultarMenu:
                MostrarRegrezar(`primeraVistaMenuComida__img`, `contentTituloMenu`, `botonVerMenu`, `segundaVistaMenuComida`, `primeraVistaMenuComida`, `posicionOriginalDerecha`, `posicionOriginalIzquierda`, `transladarMedioAparecer`, `desaparecerMenu`)
                break;
            case ocultarMenu:
                MostrarRegrezar(`primeraVistaMenuComida__img`, `contentTituloMenu`, `botonVerMenu`, `segundaVistaMenuComida`, `primeraVistaMenuComida`, `posicionOriginalDerecha`, `posicionOriginalIzquierda`, `transladarMedioAparecer`, `desaparecerMenu`)
                break;
            default:
                imfFuego.forEach(img => {
                    if (e.target === img) {
                        document.querySelector(`.contentImgModalMenu img`).src = e.target.parentElement.parentElement.previousElementSibling.src
                    }
                })
                fuego.forEach(img => {
                    if (e.target === img) {
                        document.querySelector(`.contentImgModalMenu img`).src = e.target.parentElement.previousElementSibling.src
                    }
                })
                break
        }

    })
    // validacion de menu de comida 
}

addEventListener(`resize`, () => {
    validadion(ipad)
})
validadion(ipad)



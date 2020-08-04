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

// validacion del modulo
fuego.forEach(fueguito => {
    fueguito.addEventListener(`click`, e => {
        e.preventDefault()
        modal.style.visibility = `visible`
        agregarYquitarModal(modal, `opacitiModal`, `modal`, `forwards`, `0`)

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
    })
})
document.querySelector(`.modalMenu`).addEventListener(`click`, e => {
    e.preventDefault()
    const cerrar = document.querySelectorAll(`.closedx2`)
    cerrar.forEach(cerrado => {
        switch (e.target) {
            case cerrado:
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

        }
    })

})

// ==============================================================================
// cambiando el menu styki
// ==============================================================================

const titleMenu = document.querySelector(`.contentMenuDesaparecerMedia h2`)
const bcgtitleMenu = document.querySelector(`.contentMenuDesaparecerMedia`)
const menuStiky = document.querySelector(`.header__contentMenuAndLogo`)
const animate = document.querySelector(`.contenedorDiarioComida`)
let alturaAnimate = animate.getBoundingClientRect().top 
// let alturaAnimate = animate.offsetTop; image.getBoundingClientRect().top 


window.addEventListener(`scroll`, () => {
    if (scrollY + 100 > alturaAnimate) {
        menuStiky.style.animationName = `aparecerMenuStiky`
    } else {
        menuStiky.style.animationName = ``
    }
})


// ==============================================================================
//              media querys 
// ==============================================================================
window.addEventListener(`load`, e => {
    document.querySelector(`.animacionDes`).classList.add(`animacionDesACTIVO`)
    document.querySelector(`.imgPrincipal`).classList.add(`imgPrincipalANIMATION`)
    document.querySelector(`.h `).classList.add(`animacionLetrasANIMATE`)
    document.querySelector(`.o-1 `).classList.add(`animacionLetrasANIMATE`)
    document.querySelector(`.o-2 `).classList.add(`animacionLetrasANIMATE`)
    document.querySelector(`.o-3 `).classList.add(`animacionLetrasANIMATE`)
    document.querySelector(`.t `).classList.add(`animacionLetrasANIMATE`)
    document.querySelector(`.f `).classList.add(`animacionLetrasANIMATE`)
    document.querySelector(`.d `).classList.add(`animacionLetrasANIMATE`)
    
    
    document.body.classList.remove(`hiddenPreloader`)
    document.querySelector(`.contentPreloader `).classList.add(`scale0preloader`)
    document.querySelector(`.contentMenuDesaparecerMedia `).style.visibility = `visible`
    
})
// ==============================================================================
//              media querys 
// ==============================================================================
const ipad = matchMedia(`screen and (max-width: 768px)`)



const validadion = (ipad) => {
    if (ipad.matches) {

        Layer_1.addEventListener(`click`, () => {
            menuTrasladacion.classList.add(`activo`)
        })
        closedx.addEventListener(`click`, e => {
            menuTrasladacion.classList.remove(`activo`)
        })

        window.addEventListener(`scroll`, (e) => {
            // console.log()
            if (scrollY + 400 > alturaAnimate) {
                titleMenu.style.animationName = `desaserMenu`
                bcgtitleMenu.classList.add(`bgc0`)
                setTimeout(() => {

                    bcgtitleMenu.style.visibility = `hidden`
                },1000)
            }
        })

        // validacion de hover 
        contentimgs.forEach(contentimg => {
            contentimg.removeEventListener(`mouseover`, () => { })
            contentimg.removeEventListener(`mouseout`, () => { })
        })
        // validacion de hover 



        // validacion de menu de comida 
        document.querySelector(`.contenedorDiarioComida`).removeEventListener(`click`, () => { })
        // validacion de menu de comida 

    } else {
        Layer_1.removeEventListener(`click`, e => {
            menuTrasladacion.classList.add(`activo`)
        })
        closedx.removeEventListener(`click`, e => {
            menuTrasladacion.classList.remove(`activo`)
        })

        window.removeEventListener(`scroll`, () => {})






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

            }

        })
    }
    // validacion de menu de comida 
}

addEventListener(`resize`, () => {
    validadion(ipad)
})
validadion(ipad)



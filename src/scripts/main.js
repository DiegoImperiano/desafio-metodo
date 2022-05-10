/*  abre e fecha o menu quando clicar no icone: hamburguer e x */

const iconMenu = document.querySelector('#header div .icon-menu')
const iconClose = document.querySelector('#header div .icon-close')
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('#header .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    iconClose.classList.toggle('show')
    iconMenu.classList.toggle('show')
  })
}

/* mostra e esconde os cards de features e company */

const dropFeatures = document.querySelector('#features')
const cardFeatures = document.querySelector('#cardFeatures')
const arrowFeatures = document.querySelector('#arrowFeatures')

const dropCompany = document.querySelector('#company')
const cardCompany = document.querySelector('#cardCompany')
const arrowCompany = document.querySelector('#arrowCompany')

dropCompany.addEventListener('click', function () {
  dropCompany.classList.toggle('active')
  cardCompany.classList.toggle('active-company')
  arrowCompany.classList.toggle('arrow-company')
})

dropFeatures.addEventListener('click', function () {
  dropFeatures.classList.toggle('active')
  cardFeatures.classList.toggle('active-features')
  arrowFeatures.classList.toggle('arrow-features')
})

/* insere a imagem do aside dependendo do tamnho da tela */

const asideImage = document.querySelector('#asideImage')

function checkScreenSize() {
  let width = window.screen.width

  if (width < 769) {
    asideImage.src = './src/assets/images/image-hero-mobile.png'
  } else {
    asideImage.src = './src/assets/images/image-hero-desktop.png'
    nav.classList.remove('show')
    iconClose.classList.add('show')
    iconMenu.classList.remove('show')
  }
}

window.addEventListener('resize', function () {
  checkScreenSize()
})

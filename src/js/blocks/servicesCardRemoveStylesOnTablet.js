const cardsContainer = document.querySelector('.services__cards')
const cards = document.querySelectorAll('.services__card')
const cardsFront = document.querySelectorAll('.services__card-front')
const cardsBack = document.querySelectorAll('.services__card-back')

window.addEventListener('resize', () => {
    if(window.innerWidth <= 768) {
        cardsContainer.classList.remove('cards')
        cards.forEach( card => card.classList.remove('card'))
        cardsFront.forEach( card => card.classList.remove('card-face, card-front'))
        cardsBack.forEach( card => card.classList.remove('card-face, card-back'))
    } else {
        cardsContainer.classList.add('cards')    
        cards.forEach( card => card.classList.add('card'))
        cardsFront.forEach( card => card.classList.add('card-face, card-front'))
        cardsBack.forEach( card => card.classList.add('card-face, card-back'))
    }
});

let numbers = document.getElementsByClassName('header-mobile__whatsapp-link')
let modal = document.getElementsByClassName('modal micromodal-slide')[0]

modal.classList.remove('is-open')
modal.setAttribute('aria-hidden', false)
for (let i = 0; i < numbers.length; i++) {
    numbers[i].setAttribute('href', numbers[i].getAttribute('data-link'))
    numbers[i].addEventListener('click', (e) => {
        e.preventDefault()
        console.log('aaaaaaaaa')

    })
}


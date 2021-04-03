// modal.classList.remove('is-open')
// modal.setAttribute('aria-hidden', false)
let modalGlobal = document.getElementsByClassName('header-conversion-form-whatsapp-modal')[0]

let modal = document.getElementsByClassName('modal micromodal-slide')[0]
let numbers = document.getElementsByClassName('header-mobile__whatsapp-link')


for (let i = 0; i < numbers.length; i++) {
    numbers[i].setAttribute('href', numbers[i].getAttribute('data-link'))
    numbers[i].addEventListener('click', (e) => {
        e.preventDefault()
        console.log('aaaaaaaaa')
        if (modal.classList == 'modal micromodal-slide is-open') {
            modal.classList = 'modal micromodal-slide'
        }

    })
}


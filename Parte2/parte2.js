let modalPai = document.getElementsByClassName('header-conversion-form-whatsapp-modal')[0]
modalPai.parentNode.removeChild(modalPai)

let numbers = document.getElementsByClassName('header-mobile__whatsapp-link')
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        e.preventDefault()
        console.log(numbers[i].getAttribute('data-link'))
        numbers[i].setAttribute('href', numbers[i].getAttribute('data-link'))
        window.location.href = numbers[i].getAttribute('data-link')
    })
}


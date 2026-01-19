const input = document.querySelector('.phone-input')
const errorText = document.querySelector('.error')

input.addEventListener('input', () => {
    let value = input.value.replace(/\D/g, '')

    if (value.length > 10) {
        value = value.slice(0, 10)
    }

    let formattedNumber = ''

    if( value.length > 0 ) {
        formattedNumber = '+(' +  value.slice(0, 3)
    }

    if (value.length >= 4) {
        formattedNumber += ') ' + value.slice(3, 6)
    }

    if (value.length >= 7) {
        formattedNumber += '-' + value.slice(6, 10)
    }

    input.value = formattedNumber

    if (value.length < 10) {
        errorText.innerText = 'Please enter a valid 10-digit phone number'
        input.classList.add('error-border')
        input.classList.remove('success-border')
    } else {
        errorText.innerText = ''
        input.classList.remove('error-border')
        input.classlist.add('success-border')
    }
})


const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const count = document.querySelector('.count')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset')

incrementBtn.addEventListener('click', ()  => {
    const countValue = parseInt(count.innerText)
    console.log(countValue)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue
    
})


decrementBtn.addEventListener('click', ()  => {
    const countValue = parseInt(count.innerText)
    console.log(countValue)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
    
})

resetBtn.addEventListener('click', () => {
    count.innerText = 0
})
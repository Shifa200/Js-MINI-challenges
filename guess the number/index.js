const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const submitBtn = document.querySelector('.submit-btn')
const startGameBtn = document.querySelector('.start-game')
const guessesLeftText = document.querySelector('.guesses-left')

let allGuessesArray = []
let guessesLeft = 10
let guessRandom

submitBtn.disabled = true // prevent submit before start


startGameBtn.addEventListener('click', () => {
  guessRandom = Math.floor(Math.random() * 100) + 1
  guessesLeft = 10
  allGuessesArray = []

  result.innerText = 'Game started! 🎯'
  allGuesses.innerText = ''
  guessesLeftText.innerText = `You have ${guessesLeft} guesses remaining`

  userInput.value = ''
  submitBtn.disabled = false
  startGameBtn.disabled = true
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (guessesLeft === 0) return

  const userInputValue = Number(userInput.value)

  if (!userInputValue || userInputValue < 1 || userInputValue > 100) {
    result.innerText = '⚠️ Enter a number between 1 and 100'
    return
  }

  guessesLeft--
  allGuessesArray.push(userInputValue)

  if (userInputValue === guessRandom) {
    result.innerText = '🎉 You got it! Congrats!'
    guessesLeftText.innerText = `You won with ${guessesLeft} guesses remaining`
    endGame()
    return
  }

  if (userInputValue < guessRandom) {
    result.innerText = '📈 Too Low!'
  } else {
    result.innerText = '📉 Too High!'
  }

  guessesLeftText.innerText = `You have ${guessesLeft} guesses remaining`
  allGuesses.innerText = 'Your guesses: ' + allGuessesArray.join(', ')
  userInput.value = ''

  if (guessesLeft === 0) {
    result.innerText = `❌ Game Over! Number was ${guessRandom}`
    endGame()
  }
})


function endGame() {
  submitBtn.disabled = true
  startGameBtn.disabled = false
}

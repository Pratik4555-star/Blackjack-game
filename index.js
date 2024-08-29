let players = {
    name: "pratik",
    credit: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = document.querySelector("#player-el")
player.textContent = players.name + ": $" + players.credit

function getrandom() {
    let num = Math.floor(Math.random() * 13) + 1
    if (num === 10) {
        return 10
    } else if (num === 1) {
        return 11
    } else {
        return num
    }
}


function startGame() {
    isAlive = true
    let firstCard = getrandom()
    let secondCard = getrandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getrandom()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
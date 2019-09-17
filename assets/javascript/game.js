// generate array of random 100 numbers for random number user needs to get to
let randNumArr = []

for (let i=10; i<=100; i++) {
    randNumArr.push(Math.floor(Math.random() * 100))
}

// generates array of random 10 numbers to be values for pizzas
let pizzaValueArr = []

for (let i=1; i<=10; i++) {
    pizzaValueArr.push(Math.floor(Math.random() * 10))
}

// verifying arrays
console.log(randNumArr)
console.log(pizzaValueArr)

// counters for wins and losses
let wins = 0
let losses = 0
let userScore = 0

// starting values
let randNum = randNumArr()
let chzPizza = pizzaValueArr()
let pepPizza = pizzaValueArr()
let hawPizza = pizzaValueArr()
let meatPizza = pizzaValueArr()

// resets values
const reset = _ => {
    randNum = randNumArr()
    document.getElementById('randNum').textContend = randNum
    document.getElementById('userScore').textContend = userScore
    document.getElementById('wins').textContent = wins
    document.getElementById('wins').textContent = losses
}




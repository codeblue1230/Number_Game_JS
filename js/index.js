// Grabbing DOM Elements to be used later
const userNum = document.getElementById("numInput")
const checkButton = document.getElementById("numButton")
const userChance = document.getElementById("userChance")
const replay = document.getElementById("replayButton")
const clue = document.getElementById("clue")

// Arming variable to represent the randomly generated number
let randomNumber

// Function to generate random number and assign it to randomNumber
// variable above, this function runs when page loads
const getRandomNum = () => {
    userChance.innerHTML = `You have 5 chances left.`
    let randomNum = Math.floor(Math.random() * 51)
    randomNumber = randomNum
}

// Counter variable to keep track of chances left
let chances = 4

// This function has a few conditionals that determine if
// the user has won or lost as well as tells them how many
// chances they have left.  It also checks to make sure the user
// enters a valid whole number from 0 to 50
const numberCheck = () => {
    if (userNum.value.trim().length == 0 || Number(userNum.value) < 0 || Number(userNum.value) > 50) {
        clue.innerHTML = "Make sure to enter a valid whole number from 0 to 50"
    }
    else if (Number.isInteger(Number(userNum.value))) {
        if (Number(userNum.value) === randomNumber) {
            userChance.style.color = "rgb(101,254,8)"
            userChance.innerHTML = `You Win, ${randomNumber} was correct`
            clue.innerHTML = ""
            checkButton.style.display = "none"
            replay.style.display = "block"
        }
        else if (Number(userNum.value) !== randomNumber && chances !== 0) {
            if (chances === 1) {
                userChance.innerHTML = `You have 1 chance left`
            }
            else {
                userChance.innerHTML = `You have ${chances} chances left`
            }
            if (Number(userNum.value) > randomNumber) {
                clue.innerHTML = "Your guess was high"
            }
            else if (Number(userNum.value) < randomNumber) {
                clue.innerHTML = "Your guess was low"
            }
            chances--
        }
        else if (chances === 0) {
            userChance.innerHTML = `You Lose, ${randomNumber} was the right answer`
            clue.innerHTML = ""
            checkButton.style.display = "none"
            replay.style.display = "block"
            replay.style.textAlign = "center"
        }
    }
    else {
        clue.innerHTML = "Make sure to enter a valid whole number from 0 to 50"
    }
}

// When Check button is clicked the numberCheck function is called
checkButton.addEventListener("click", numberCheck)

// When Enter is clicked the numberCheck function is called
userNum.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        checkButton.click()
    }
})

let userName = "Andy"
let userAge = 45
let userPets = ["Cat", "Dog", "Horse"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingForPet = 6
let daysSurvived = 0

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingForPet * userPets.length
    userBalance -= spending
    daysSurvived++
}

console.log("Days survived " + daysSurvived)
console.log(`Days survived ${daysSurvived}.`)

function nameVertical(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }
    for (const index in name) {
        console.log(name[index])
    }
    let index = 0
    while (index < name.length) {
        console.log(name[index++])
    }
}

nameVertical("Sarah")

// Task 2

function code(number) {
    if (number >= 100 && number <= 199) {
        return "Informational"
    } else if (number <= 299) {
        return "Successful"
    }
    return "Not a valid code"
}

function code2(number) {
    return number >= 100 && number <= 199 ? "Informational" : number <= 299 ? "Successful" : "Not a valid code";
}


console.log("Code 198: " + code(198))
console.log("Code 250: " + code(250))
console.log("Code 999: " + code(999))

// Task 3

function compareVariables(var1, var2) {
    console.log(`\n\nvar1: ${var1}, var2: ${var2}`)
    if (var1 === var2) {
        console.log("The two variables are equal and have same type")
    } else if (var1 === var2 && typeof var1 === typeof var2) {
        console.log("Same value, different type")
    } else {
        console.log("Values and types are different")
    }
}

compareVariables("1", 1)
compareVariables(1, 1)
compareVariables("22", 10)

// Task 4


function fibonacci(number) {
    let number1 = 0, number2 = 1, nextNumber
    let numbers = []
    for (let i = 0; i < number; i++) {
        numbers.push(number1)
        nextNumber = number2 + number1
        number1 = number2
        number2 = nextNumber
        if (nextNumber > number) {
            break;
        }
    }
    return numbers
}

console.log(fibonacci(35))
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07
    let valueInYen = valueInEuro * 156.5
    return Math.round(valueInYen)
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5
    let valueInPound = valueInEuro * 0.87
    return Math.round(valueInPound * 100000) / 100000
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
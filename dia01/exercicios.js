// ! Quesito 1

// Resposta: Marte > Vênus > Júpiter

// ! Quesito 2

// Resposta: Marte > Júpiter > Vênus

// ! Quesito 3

// const getPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers'
//     }
//   }
//   console.log('Returned planet: ', mars)
// }

// setTimeout(() => console.log(getPlanet()), 4000) // Imprime Marte depois de 4 segundos

// ! Quesito 4

// const messageDelay = () => Math.floor(Math.random() * 5000)

// const getMarsTemperature = () => {
//   const maxTemperature = 58
//   return Math.floor(Math.random() * maxTemperature)
// }

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = (callback) => {
//   setTimeout(() => {
//     console.log(`A temperatura de Marte é ${callback} graus celsius`)
//   }, messageDelay())
// }

// sendMarsTemperature(getMarsTemperature()) // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// ! Quesito 5

// const messageDelay = () => Math.floor(Math.random() * 5000)

// const getMarsTemperature = () => {
//   const maxTemperature = 58
//   return Math.floor(Math.random() * maxTemperature)
// }

// const toFahrenheit = (degreeCelsius) => (Math.floor(degreeCelsius * (9 / 5)) + 32)

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`)

// const greet = (temperature) =>
//   console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`)

// // Definição da função sendMarsTemperature...

// const sendMarsTemperature = (callback) => {
//   setTimeout(() => {
//     if (callback === temperatureInFahrenheit) {
//       console.log(temperatureInFahrenheit(getMarsTemperature()))
//     } else {
//       console.log(greet(getMarsTemperature()))
//     }
//   }, messageDelay())
// }

// sendMarsTemperature(temperatureInFahrenheit) // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature(greet) // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

// ! Quesito 6

const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
  const maxTemperature = 58
  return Math.floor(Math.random() * maxTemperature)
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`)

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`)

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`)

// definição da função sendMarsTemperature...

const sendMarsTemperature = (onSuccess, callBack) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5
    if (didOperationSucceed) {
      return onSuccess(getMarsTemperature())
    } else {
      const errorMessage = 'Robot is busy'
      return callBack(errorMessage)
    }
  }, messageDelay())
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError)

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError)

// ? linhaDeProducao.js

// const TWO_SECONDS = 2000

// setTimeout(() => {
//   console.log('Comprar parafusos') // Comprar parafusos
//   console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, TWO_SECONDS)

// console.log('1 - Receber roda') // 1 - Receber roda
// console.log('2 - Encaixar parafusos') // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro') // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// todo;

// ? pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number)

// const numbers = []

// const THREE_SECONDS = 3000

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS)

// pushNumber(numbers, 2)
// pushNumber(numbers, 3)

// setTimeout(() => console.log(numbers), THREE_SECONDS) // ! dúvida

// Saída:
// [ 1, 2, 3 ]

// todo

// ? despesas.js

// const minhasDespesas = [
//   { academia: 99 },
//   { ifood: 200 },
//   { celular: 60 },
//   { internet: 100 }
// ]
// const somaGastos = (despesas) => {
//   const custo = despesas.map((valores) => Object.values(valores))
//   const gastoTotal = custo.reduce((a, b) => {
//     const soma = a + b[0] // ! dúvida
//     return soma
//   }, 0)
//   return gastoTotal
// }

// console.log(somaGastos(minhasDespesas))

// const minhaRenda = 1000

// const despesaMensal = (renda, gasto, callBack) => {
//   const despesaTotal = callBack(gasto)
//   const saldoFinal = renda - despesaTotal

//   console.log(`Balanço do mês:
//   Recebido; R$${renda}
//   Gasto: R$${despesaTotal}
//   Saldo: R$${saldoFinal}`)
// }

// console.log(despesaMensal(minhaRenda, minhasDespesas, somaGastos))

// todo

// ? callback.js

// // Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`

// // Definição da função getUser
// const getUser = (callback) => {
//   const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russo'
//   }
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return callback(user)
// }

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// console.log(getUser(userFullName))

// // Saída:
// // Olá! Meu nome é Ivan Ivanovich

// todo

// ? callbacks-para-fixar-01.js

// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`
// const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`

// const getUser = (callback) => {
//   const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russo'
//   }
//   return callback(user)
// }

// console.log(getUser(userFullName)) // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
// console.log(getUser(userNationality)) // Retorno esperado: "Ivan é Russo"

// todo

// ? callbacks-para-fixar-02.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds)

const getUser = (callBack) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo'
    }
    console.log(callBack(user)) // ! dúvida
  }, delay())
}

getUser(userFullName) // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
getUser(userNationality) // deve imprimir "Ivan é Russo" depois de um certo tempo

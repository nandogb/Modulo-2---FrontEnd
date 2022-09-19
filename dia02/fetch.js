const fetch = require('node-fetch')

const fetchJoke = (param) => {
  const url = `https://api.chucknorris.io/jokes/random?category=${param}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`))
}

fetchJoke('dev')

// Algo deu errado :(
// TypeError: Only absolute URLs are supported

// const alunos = [
//   { nome: 'Fernando', idade: 28 },
//   { nome: 'Camila', idade: 28 },
//   { nome: 'Jonathan', idade: 29 },
//   { nome: 'Laís', idade: 29 },
//   { nome: 'alicia', idade: 20 },
//   { nome: 'Lucas', idade: 22 }
// ]

// const age = ({ idade }) => {
//   return idade > 25
// }
// const velhos = alunos.filter(age)

// console.log(alunos.map(({ nome, idade }) => `Aluno ${nome}, idade ${idade}`))

// console.log(velhos.map(({ nome }) => nome))

// console.log(alunos.every(({ idade }) => idade > 25))

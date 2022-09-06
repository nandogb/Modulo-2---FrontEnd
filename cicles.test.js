// cicles.test.js

let cities = []

const addCity = (city) => {
  cities.push(city)
}

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city)
}

// beforeEach(() => {
//   cities = [...cities, 'Pindamonhagaba']
// })

afterEach(() => {
  cities = []
})

test('Testa a função addCity', () => {
  expect.assertions(5)
  addCity('Campinas')
  addCity('Goiania')
  addCity('Recife')
  expect(cities).toHaveLength(3)
  expect(cities).toContain('Campinas')
  expect(cities).toContain('Goiania')
  expect(cities).toContain('Recife')
  expect(cities).toContain('Pindamonhagaba')
})

test('Testa a função removeCity', () => {
  expect.assertions(2)
  removeCity('Campinas')
  expect(cities).toHaveLength(0)
  expect(cities).not.toContain('Pindamonhagaba')
  console.log(cities)
})

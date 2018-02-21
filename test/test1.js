const Pokemon = require('../pokemon');
const PokemonList = require('../pokemonlist');
const expect = require('chai').expect;

const pokemons = [
  { name: 'Picachu', level: 3, expect: 3 },
  { name: 'Raychu', level: 6, expect: 6 },
  { name: 'Charmander', level: 2, expect: 6 }
]

describe('Тест Pokemon', () => {
  const name = pokemons[0].name;
  const level = pokemons[0].level;

  it('Метод show. Ожидаем Hi! My name is Picachu, my level is 3', () => {
    const picachu = new Pokemon(name, level);
    expect(picachu.show(), 'show не работает').to.be.equal(`Hi! My name is ${name}, my level is ${level}`);
  })
})

describe('Тест PokemonList', () => {
  const name = pokemons[1].name;
  const level = pokemons[1].level

  describe('Метод add', () => {
    let Esch;
    let picachu;

    before(() => {
      Esch = new PokemonList();
      picachu = new Pokemon(name, level);
      Esch.add(name, level);
    })

    it('Это Pokemon', () => {
      expect(Esch[0] instanceof Pokemon, 'это не Pokemon').to.be.equal(true);
    });
    it(`Это ${name}`, () => {
      expect(Esch[0].name, `Не ${name}`).to.be.equal(picachu.name);
    });
    it(`Уровень равен ${level}`, () => {
      expect(Esch[0].level, `Не ${level}`).to.be.equal(picachu.level)
    })
  });

  describe('Метод show.', () => {


    const Esch = new PokemonList();
    const picachu = new Pokemon(name, level);
    Esch.add(name, level);

    it(`Ожидаем There are ${Esch.length} pokemons here.`, () => {
      expect(Esch.show(), 'Не соответствует').to.be.equal(`There are ${Esch.length} pokemons here.`)
    })
  });

  describe('Метод max', () => {
    const Brock = new PokemonList();

    pokemons.forEach(pokemon => {
      it(`Добавляем ${pokemon.name} с уровнем ${pokemon.level}. Ожидаем уровень ${pokemon.expect}.`, () => {
        Brock.add(pokemon.name, pokemon.level);
        expect(Brock.max().level, `Не ${pokemon.expect}`).to.be.equal(pokemon.expect);
      });
    })
  })

});
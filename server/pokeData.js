const pokemon = [
    {
        id: 1,
        name: 'Bulbasaur',
        type: 'Grass',
        attack: 49,
        defense: 49,
        hp: 45,
        speed: 45,
        moves: ['Tackle', 'Vine Whip', 'Leech Seed', 'Razor Leaf'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
        id: 2,
        name: 'Charmander',
        type: 'Fire',
        attack: 52,
        defense: 43,
        hp: 39,
        speed: 65,
        moves: ['Scratch', 'Ember', 'Flamethrower', 'Dragon Rage'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
        id: 3,
        name: 'Squirtle',
        type: 'Water',
        attack: 48,
        defense: 65,
        hp: 44,
        speed: 43,
        moves: ['Tackle', 'Bubble', 'Water Gun', 'Hydro Pump'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
        id: 4,
        name: 'Pikachu',
        type: 'Electric',
        attack: 55,
        defense: 40,
        hp: 35,
        speed: 90,
        moves: ['Thunder Shock', 'Thunderbolt', 'Thunder Wave', 'Thunder'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
        id: 5,
        name: 'Eevee',
        type: 'Normal',
        attack: 55,
        defense: 50,
        hp: 55,
        speed: 55,
        moves: ['Tackle', 'Quick Attack', 'Bite', 'Take Down'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    }
]

const users = [
    {
        id: 1,
        name: 'Ash',
        pokemonIds: [1, 2, 3, 4, 5],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    },
    {
        id: 2,
        name: 'Misty',
        pokemonIds: [1, 2, 4],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
]

module.exports = { pokemon, users };
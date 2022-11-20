const { pokemon, users } = require('../pokeData');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
} = require('graphql');

// Create types
const PokemonType = new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        attack: { type: GraphQLInt },
        defense: { type: GraphQLInt },
        hp: { type: GraphQLInt },
        speed: { type: GraphQLInt },
        moves: { type: new GraphQLList(GraphQLString) },
        image: { type: GraphQLString },
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        pokemon: { type: new GraphQLList(PokemonType) },
        image: { type: GraphQLString },
    })
})

// Create Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pokemon: {
            type: PokemonType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return pokemon.find(pokemon => pokemon.id == args.id)
            }
        },
        pokemons: {
            type: new GraphQLList(PokemonType),
            resolve(parent, args) {
                return pokemon
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return users.find(user => user.id == args.id)
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    // mutation,
});

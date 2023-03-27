const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema

const PokemonsSchema = new Schema({
    id: String,
    name: String,
    classification: String,
    types: [String],
    resistant: [String],
    weaknesses: [String],
    weight: {minimum: String,maximum: String},
    height: {minimum: String,maximum: String},
    fleeRate: Number,
    evolutionRequirements: {amount: Number, name: String},
    evolutions: [{id:Number,name:String}],
    maxCP:Number,
    maxHP:Number,
    attacks:{fast:[{name:String,type: { type: String },damage:Number}],special:[{name:String,type: { type: String },damage:Number}]}

})

PokemonsSchema.plugin(mongoosePaginate);

// "id": "001",
//       "name": "Bulbasaur",
//       "classification": "Seed Pokémon",
//       "types": ["Grass", "Poison"],
//       "resistant": ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//       "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
//       "weight": {
//         "minimum": "6.04kg",
//         "maximum": "7.76kg"
//       },
//       "height": {
//         "minimum": "0.61m",
//         "maximum": "0.79m"
//       },
//       "fleeRate": 0.1,
//       "evolutionRequirements": {
//         "amount": 25,
//         "name": "Bulbasaur candies"
//       },
//       "evolutions": [
//         {
//           "id": 2,
//           "name": "Ivysaur"
//         },
//         {
//           "id": 3,
//           "name": "Venusaur"
//         }
//       ],
//       "maxCP": 951,
//       "maxHP": 1071,
//       "attacks": {
//         "fast": [
//           {
//             "name": "Tackle",
//             "type": "Normal",
//             "damage": 12
//           },
//           {
//             "name": "Vine Whip",
//             "type": "Grass",
//             "damage": 7
//           }
//         ],
//         "special": [
//           {
//             "name": "Power Whip",
//             "type": "Grass",
//             "damage": 70
//           },
//           {
//             "name": "Seed Bomb",
//             "type": "Grass",
//             "damage": 40
//           },
//           {
//             "name": "Sludge Bomb",
//             "type": "Poison",
//             "damage": 55
//           }
//         ]
//       }

const Pokemons = mongoose.model('Pokemons', PokemonsSchema)

module.exports = Pokemons
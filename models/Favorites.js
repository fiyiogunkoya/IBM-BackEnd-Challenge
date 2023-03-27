const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema

const Pokemon_FavesSchema = new Schema({
    favorites: String
})

Pokemon_FavesSchema.plugin(mongoosePaginate);

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

const Pokemon_Faves = mongoose.model('Pokemon_Faves', Pokemon_FavesSchema)

module.exports = Pokemon_Faves
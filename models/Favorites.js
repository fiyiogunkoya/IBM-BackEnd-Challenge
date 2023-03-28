const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema

const Pokemon_FavesSchema = new Schema({
    favorites: String
})

Pokemon_FavesSchema.plugin(mongoosePaginate);

const Pokemon_Faves = mongoose.model('Pokemon_Faves', Pokemon_FavesSchema)

module.exports = Pokemon_Faves
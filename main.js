const fs = require('fs')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');
const dotenv = require('dotenv')

const Pokemons = require('./models/Pokemon')
const Pokemon_Faves = require('./models/Favorites')
const app = express()
app.use(express.json())
app.use(cors())
// 


async function main() {
//url for mongodb database
const uri = "mongodb://127.0.0.1:27017"
mongoose.connect(uri).then(() => console.log('db connected'))
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening to port ${port}`))
const data = JSON.parse(fs.readFileSync('./pokemons.json', 'utf-8'))


// import data to MongoDB and create Favorites collection(uncomment next line to create both data collections)
  
  // importData(data)
  getPokemonbyID()
  getPokemonbyName()
  // getPokemonbyFilters(category,'1000')
  // getPokemonTypes()
  // getPokemonPages()
  // AddFavePokemon()
  // getFavePokemons()
  // RemoveFavePokemon()
  
  }

  const importData = async (data) => {
    try {
      Pokemons.createCollection().then(function (pokemons) {
        console.log('Pokemon Collection is created!');
    });
      await Pokemons.create(data)
      console.log('data successfully imported')
      Pokemon_Faves.createCollection().then(function (fave_collection) {
        console.log('Favorites Collection is created!');
    });
      // to exit the process
      process.exit()
    } catch (error) {
      console.log('error', error)
    }
  }

async function getPokemonbyID() {

  app.get('/id', (req, res) => {
    const query = req.query;

    Pokemons.findOne({'id':query["id"]}).then((pokemon) => {
      if (pokemon != null){
        res.send({
          ID: pokemon,
        })
      }
      else{
        res.send("Invalid pokemon ID")
      }
    }).catch((err) => {
      //catch error
      console.log(err)
    });
  })

  

  }

async function getPokemonbyName(Name) {

  app.get('/name', (req, res) => {
    const query = req.query;

    Pokemons.findOne({'name':query["name"]}).then((pokemon) => {
      res.send({
        ID: pokemon,
      })
    }).catch((err) => {
      //catch error
      console.log(err)
    });
  })

    

    }

async function getPokemonbyFilters(category,Filter) {

    Pokemons.find({'maxCP': { $gt: Filter } ,'maxHP': {$gt: '3000'}}).then((pokemons) => {
        app.get('/filters', (req, res) => {
            res.send({
                ID: pokemons,
            })
            })
        }).catch((err) => {
        //catch error
        console.log("ERROR!!")
        });
    
        
    
        }

async function getPokemonPages() {

        app.get('/page', (req, res) => {
          const query = req.query
          Pokemons.paginate({}, { page: query["page"], limit: query["limit"] }).then(function(pokemons) {
            res.send({
                ID: pokemons,
            })
            }).catch((err) => {
              //catch error
              console.log("ERROR!!")
              });
        })
    
        }

async function getPokemonTypes() {
        app.get('/types', (req, res) => {
          const query = req.query
          Pokemons.findOne({'name':query["name"]}).then((pokemon) => {
      res.send({
        ID: pokemon["types"],
      })
    }).catch((err) => {
      console.log(err)
    });
    
        
    
        })
      }

async function getFavePokemons() {

  Pokemon_Faves.find({}).then(function(faves){
    var dict = [];

    for (let i = 0; i < faves.length; i++) {
      dict.push(faves[i]["favorites"]);
    }
    Pokemons.find({ name: { $in: dict}}).then((pokemon) => {
        console.log(dict,pokemon)
        app.get('/Faves', (req, res) => {
          res.send({
              ID: pokemon,
          })
          })
        }).catch((err) => {
        console.log("Unable to get Fave Pokemon")
        });
      
  })
  
      
  
  }

async function AddFavePokemon() {
  app.get('/add', (req, res) => {
    const query = req.query;
    Pokemon_Faves.create({
      favorites: query["name"]
    }).catch((err) => {
      //catch error
      console.log(err)
      });
    res.send('pokemon added')
    })
}
async function RemoveFavePokemon() {
  app.get('/remove', (req, res) => {
    const query = req.query;
    Pokemon_Faves.deleteOne({
      favorites: query["name"]
    }).catch((err) => {
      //catch error
      console.log(err)
      });
    res.send('pokemon removed')
    })
}
main().catch(console.error);

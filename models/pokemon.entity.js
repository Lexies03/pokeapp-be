const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: String,
  name: String,
  img: String,
  type: [String],
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    spattack: Number,
    spdefense: Number,
    speed: Number,
  },
  damages: {
    normal: String,
    fire: String,
    water: String,
    electric: String,
    grass: String,
    ice: String,
    fight: String,
    poison: String,
    ground: String,
    flying: String,
    psychic: String,
    bug: String,
    rock: String,
    ghost: String,
    dragon: String,
    dark: String,
    steel: String,
  },
  misc: {
    classification: String,
    height: String,
    weight: String,
    happiness: String,
  },
});

const PokemonModel = mongoose.model("pokemons", schema);

module.exports = PokemonModel;

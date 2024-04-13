const PokemonModel = require("../models/pokemon.entity");

class Pokemons {
  constructor() {}

  findPokemons(limit = 2, skip = 0) {
    try {
      return PokemonModel.find().limit(limit).skip(skip);
    } catch (err) {
      throw new Error("Failed to find all the pokemons", err);
    }
  }
}

module.exports = Pokemons;

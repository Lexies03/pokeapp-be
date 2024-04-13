const express = require("express");
const Pokemons = require("../objects/pokemon");
const pokemons = new Pokemons();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { limit, skip } = req.query;
    const pokemonList = await pokemons.findPokemons(limit, skip);

    res.json(pokemonList);
  } catch (err) {
    res.status(500).send("An error has occured");
  }
});

module.exports = router;

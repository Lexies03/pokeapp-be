const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//router
const pokemonRouter = require("./routes/pokemon.router");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Lexies_03:hw-fullstack-pokeapp@cluster0.bxhyqat.mongodb.net/db_pokeapp"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    throw new Error("MongoDB connection failed", err);
  });

app.use("/pokemons", pokemonRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

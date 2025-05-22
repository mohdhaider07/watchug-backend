const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    lovedMovies: [{ type: Number }], // Array of TMDB movie IDs
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

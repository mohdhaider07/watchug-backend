const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// Get all loved movie IDs for the logged-in user
router.get("/loved", auth, async (req, res) => {
  res.json({ lovedMovies: req.user.lovedMovies || [] });
});

// Add a movie ID to lovedMovies
router.post("/loved", auth, async (req, res) => {
  const { movieId } = req.body;
  if (!movieId) return res.status(400).json({ message: "movieId required" });
  if (!req.user.lovedMovies.includes(movieId)) {
    req.user.lovedMovies.push(movieId);
    await req.user.save();
  }
  res.json({ lovedMovies: req.user.lovedMovies });
});

// Remove a movie ID from lovedMovies
router.delete("/loved/:movieId", auth, async (req, res) => {
  const movieId = Number(req.params.movieId);
  req.user.lovedMovies = req.user.lovedMovies.filter((id) => id !== movieId);
  await req.user.save();
  res.json({ lovedMovies: req.user.lovedMovies });
});

module.exports = router;
